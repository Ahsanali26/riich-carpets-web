const cors = require("cors");
const express = require("express");
const nodemailer = require("nodemailer");

require("dotenv").config();

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/", async (req, res) => {
  try {
    const { name, email, number, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: {
        user: process.env.NODEMAILER_FROM_EMAIL,
        pass: process.env.NODEMAILER_FROM_EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.NODEMAILER_FROM_EMAIL,
      to: process.env.NODEMAILER_TO_EMAIL,
      subject: process.env.NODEMAILER_SUBJECT,
      text: `Name: ${name}
             Email: ${email}
             Phone Number: ${number}
             Message: ${message}`,
    });

    return res.status(200).send({ message: "Email sent successfully!" });
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

app.listen(process.env.PORT, () => {
  console.log("App is running...");
});
