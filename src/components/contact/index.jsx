import { Form } from "react-bootstrap";
import {
  FaDribbble,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaCheck,
  FaCalendarAlt,
  FaUserAlt,
  FaEnvelope,
  FaGlobe,
  FaPencilAlt,
  FaComments,
  FaPhoneAlt,
  FaArrowDown,
} from "react-icons/fa";
import { useState } from "react";
import { isFormValid } from "../../helpers";

const Contact = () => {
  const [form, setForm] = useState({
    data: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
  });

  const [message, setMessage] = useState(null);

  const submitForm = async (e) => {
    e.preventDefault();
  
    if (!isFormValid(form.data, setForm).includes(false)) {
      setForm({ ...form, errors: {} });
      try {
        console.log("Form data being sent:", form.data); // Log form data
  
        const response = await fetch("/api/send-email", {  
          method: "POST",
          body: JSON.stringify({
            name: form.data.name,
            email: form.data.email,
            phone: form.data.number,
            message: form.data.message,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        const data = await response.json();
        
        if (response.ok) {
          setMessage("Thank you for contacting us! We will get back to you shortly.");
          setForm({
            ...form,
            data: {
              name: "",
              email: "",
              number: "",
              message: "",
            },
          });
        } else {
          setMessage(`Failed to send message: ${data.error}`);
        }
      } catch (error) {
        setMessage("An error occurred while sending your message. Please try again.");
      }
    }
  };
  
  return (
    <>
      {/* <!-- CONTACT ADDRESS AREA START --> */}
      <div className="ltn__contact-address-area mb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                {/* <div className="ltn__contact-address-icon">
                  <img src="/img/icons/10.png" alt="Icon Image" />
                </div> */}
                <h3>Email Address</h3>
                <p>
                  Info@richcarpets.com
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                {/* <div className="ltn__contact-address-icon">
                  <img src="/img/icons/11.png" alt="Icon Image" />
                </div> */}
                <h3>Phone Number</h3>
                <p>
                  +966 57 041 1234 <br /> +971 55 630 1800
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                {/* <div className="ltn__contact-address-icon">
                  <img src="/img/icons/12.png" alt="Icon Image" />
                </div> */}
                <h3>Office Address</h3>
                <p>
                  PO BOX 8332, Jeddah 21482, Saudi Arabia <br />
                  and Sharjah, UAE
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT ADDRESS AREA END --> */}

      {/* <!-- CONTACT MESSAGE AREA START --> */}
      <div className="ltn__contact-message-area mb-120 mb--100">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="ltn__form-box contact-form-box box-shadow white-bg contactus-form">
                <h4 className="title-2">Get A Quote</h4>
                {message ? (
                  <p
                    style={{
                      background: "#4BB543",
                      color: "#ffffff",
                      padding: "10px",
                    }}
                  >
                    {message}
                  </p>
                ) : null}
                {form?.errors ? <p></p> : null}
                <form
                  id="contact-form"
                  action="#"
                  method="post"
                  onSubmit={submitForm}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="input-item input-item-name ltn__custom-icon">
                        <input
                          type="text"
                          name="name"
                          value={form?.data?.name}
                          placeholder="Enter your name"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              data: { ...form.data, name: e.target.value },
                            })
                          }
                        />
                        <span className="inline-icon">
                          <FaUserAlt />
                        </span>
                      </div>
                      {form?.errors?.name ? <p className="invalid-text">{form?.errors?.name}</p> : null}
                    </div>
                    <div className="col-md-6">
                      <div className="input-item input-item-email ltn__custom-icon">
                        <input
                          type="email"
                          name="email"
                          value={form?.data?.email}
                          placeholder="Enter email address"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              data: { ...form.data, email: e.target.value },
                            })
                          }
                        />
                        <span className="inline-icon">
                          <FaEnvelope />
                        </span>
                      </div>
                      {form?.errors?.email ? (
                        <p className="invalid-text">{form?.errors?.email}</p>
                      ) : null}
                    </div>
                    <div className="col-md-12">
                      <div className="input-item input-item-phone ltn__custom-icon">
                        <input
                          type="text"
                          name="phone"
                          value={form?.data?.number}
                          placeholder="Enter phone number"
                          onChange={(e) =>
                            setForm({
                              ...form,
                              data: {
                                ...form.data,
                                number: e.target.value,
                              },
                            })
                          }
                        />
                        <span className="inline-icon">
                          <FaPhoneAlt />
                        </span>
                      </div>
                      {form?.errors?.number ? (
                        <p className="invalid-text">{form?.errors?.number}</p>
                      ) : null}
                    </div>
                  </div>
                  <div className="input-item input-item-textarea ltn__custom-icon">
                    <textarea
                      name="message"
                      placeholder="Enter message"
                      value={form?.data?.message}
                      onChange={(e) =>
                        setForm({
                          ...form,
                          data: { ...form.data, message: e.target.value },
                        })
                      }
                    ></textarea>
                    <span className="inline-icon">
                      <FaPencilAlt />
                    </span>
                  </div>
                  {form?.errors?.message ? (
                    <p className="invalid-text">{form?.errors?.message}</p>
                  ) : null}
                  {/* <p>
                    <label className="input-info-save mb-0">
                      <input type="checkbox" name="agree" /> Save my name,
                      email, and website in this browser for the next time I
                      comment.
                    </label>
                  </p> */}
                  <div className="btn-wrapper mt-0">
                    <button
                      className="btn theme-btn-1 btn-effect-1 text-uppercase"
                      type="submit"
                    >
                      get a free service
                    </button>
                  </div>
                  <p className="form-messege mb-0 mt-20"></p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- CONTACT MESSAGE AREA END --> */}

      {/* <!-- GOOGLE MAP AREA START --> */}
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1901295.916358017!2d39.211149!3d21.450123!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d01fb1137e59%3A0xe059579737b118db!2sJeddah%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1691691130508!5m2!1sen!2sin" 
          width="100%"
          height="100%"
          className="google-map mb-120"
        />
      {/* <!-- GOOGLE MAP AREA END --> */}
    </>
  );
};

export default Contact;
