import React from "react";
import { Link } from "react-router-dom";
const ContactComponent = () => {
  return (
    <>
      <div className="breadcrumb_section text-center">
        <div className="container">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Us
            </li>
          </ol>
        </div>
      </div>

      <div className="contact_section">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="contact_left">
                <h3 className="text-center">Contact Information</h3>
                <div className="contact-list" role="contentinfo" aria-label="Office contact details">
                  <div className="contact-item">
                    <div className="ci-icon" aria-hidden="true">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>

                    <div className="ci-body">
                      <h4 className="ci-title">Office Address</h4>
                      <p className="ci-text">
                        BF -237, Sector 1, Salt Lake City, Kolkata, West Bengal
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="ci-icon" aria-hidden="true">
                      <i className="fa-solid fa-phone"></i>
                    </div>

                    <div className="ci-body">
                      <h4 className="ci-title">Phone Number</h4>
                      <p className="ci-text">
                        <span className="line"><a href="tel:919831044336">+91 98310 44336</a> </span>
                        <span className="line"> <a href="tel:917733885010">+91 77338 85010</a></span>
                      </p>
                    </div>
                  </div>
                  <div className="contact-item">
                    <div className="ci-icon" aria-hidden="true">
                      <i className="fa-solid fa-envelope"></i>
                    </div>

                    <div className="ci-body ci-email">
                      <h4 className="ci-title">Email</h4>
                      <p className="ci-text">
                        <a href="mailto:navin@navanuwealth.com">
                          navin@navanuwealth.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
                <div className="contact_right">
                    <h3 className="text-center">Contact Form</h3>
                    <form>
                        <div className="form_group">
                            <input type="text" name="name" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="form_group">
                            <input type="number" name="number" className="form-control" placeholder="Contact Number" />
                        </div>
                        <div className="form_group">
                            <input type="email" name="email" className="form-control" placeholder="Email" />
                        </div>
                        <div className="form_group mb-0">
                            <textarea name="message" className="form-control" placeholder="Message"></textarea>
                        </div>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map_section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.5211726547686!2d88.4205728!3d22.5970053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277da198c13bd%3A0xd03760456b9b4689!2sNavanu%20Wealth%20Services!5e0!3m2!1sen!2sin!4v1764307329540!5m2!1sen!2sin" width="100%" height="650" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </>
  );
};

export default ContactComponent;
