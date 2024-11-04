import { createRouter } from 'next-connect';
import { createTransport } from 'nodemailer';

// * Function to generate HTML email content
const getMessage = (name, email, message, phone) => {
  return `
    <!DOCTYPE html>
  <html>
  
  <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
      <style>
          body, h1, h4, p, blockquote {
              font-family: Arial, Helvetica, sans-serif; /* Add the desired font family here */
              color: #3c3c3c;
          }
          h1 { font-size: 24px; font-weight: bold; margin-top: 0; margin-bottom: 20px; }
          p { font-size: 16px; line-height: 1.5; margin-top: 0; margin-bottom: 20px; }
          .code, .link { font-size: 20px; font-weight: bold; color: #55e6a5; text-decoration: underline; }
      </style>
  </head>
  
  <body>
      <h1>New Lead Submission from website - ${name || "No Name Provided"}</h1>
      <p>
        A new potential customer has contacted through the website. Please get in touch with the customer ASAP.
      </p>
      <h4>Email:</h4>
      <blockquote>${email || "No Email Provided"}</blockquote>
      <h4>Phone:</h4>
      <blockquote>${phone || "No Phone Provided"}</blockquote>
      <h4>Customer Message:</h4>
      <blockquote>${message || "No Message Provided"}</blockquote>
      <p><small>This is an auto-generated email on submission of contact form on the <b>RIICH CARPETS & RUGS</b> website.</small></p>
  </body>
  
  </html>`;
};

// * Initialize a new router
const apiRoute = createRouter();

apiRoute.post(async (req, res) => {
  const config = {
    host: process.env.NEXT_PUBLIC_EMAIL_HOST,
    secure: false,
    auth: {
      user: process.env.NEXT_PUBLIC_EMAIL_SENDER_EMAIL,
      pass: process.env.NEXT_PUBLIC_EMAIL_SENDER_PASSWORD,
    },
  };
  
  const transporter = createTransport(config);

  const { name, email, phone, message } = req.body; // Directly destructuring to get form data

  const ownerMessage = {
    from: process.env.NEXT_PUBLIC_EMAIL_SENDER_REPLY_TO,
    to: process.env.NEXT_PUBLIC_EMAIL_SEND_TO,
    subject: 'New Website Lead',
    html: getMessage(name, email, message, phone),
  };

  transporter.sendMail(ownerMessage, (err) => {
    if (err) {
      res.status(500).json({ data: {}, error: err });
    } else {
      res.status(200).json({ data: 'success', statusCode: 200 });
    }
  });
});

export default apiRoute.handler({
  onError(error, res) {
    res.status(501).json({ error: `Sorry something Happened! ${error.message}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: `Method "${req.method}" Not Allowed` });
  },
});

export const config = {
  api: {
    bodyParser: true,
  },
};
