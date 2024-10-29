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
      const response = await fetch("http://localhost:5000", {
        method: "POST",
        body: JSON.stringify(form.data),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setMessage(data.message);
      setForm({
        ...form,
        data: {
          name: "",
          email: "",
          number: "",
          message: "",
        },
      });
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
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/10.png" alt="Icon Image" />
                </div>
                <h3>Email Address</h3>
                <p>
                  info@webmail.com <br />
                  jobs@webexample.com
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/11.png" alt="Icon Image" />
                </div>
                <h3>Phone Number</h3>
                <p>
                  +0123-456789 <br /> +987-6543210
                </p>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="ltn__contact-address-item ltn__contact-address-item-3 box-shadow">
                <div className="ltn__contact-address-icon">
                  <img src="/img/icons/12.png" alt="Icon Image" />
                </div>
                <h3>Office Address</h3>
                <p>
                  18/A, New Born Town Hall <br />
                  New York, US
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
            <div className="col-lg-12">
              <div className="ltn__form-box contact-form-box box-shadow white-bg">
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
                      {form?.errors?.name ? <p>{form?.errors?.name}</p> : null}
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
                        <p>{form?.errors?.email}</p>
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
                        <p>{form?.errors?.number}</p>
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
                    <p>{form?.errors?.message}</p>
                  ) : null}
                  <p>
                    <label className="input-info-save mb-0">
                      <input type="checkbox" name="agree" /> Save my name,
                      email, and website in this browser for the next time I
                      comment.
                    </label>
                  </p>
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
      <div className="google-map mb-120">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd"
          width="100%"
          height="100%"
        ></iframe>
      </div>
      {/* <!-- GOOGLE MAP AREA END --> */}
    </>
  );
};

export default Contact;
