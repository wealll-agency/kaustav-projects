import React, { useEffect } from "react";
import footerlogo from "./../assets/images/footer_logo.png";
import fbicon from "./../assets/images/fb_icon.png";
import linkedinicon from "./../assets/images/linkedin_icon.png";
import instaicon from "./../assets/images/insta_icon.png";
import ytubeicon from "./../assets/images/ytube_icon.png";
import chaticon from "./../assets/images/chaticon.png";

const Footer = () => {

  useEffect(()=>{
    const phoneNumber = "9831044336";
    const defaultMessage = "Hello, I'm interested in your services. Could you please share more details?"; // prefilled message
    // Builds a WhatsApp link compatible with mobile & web
    function makeWhatsAppLink(phone, text){

      const encoded = encodeURIComponent(text || "");
      return "https://wa.me/" + phone + (encoded ? "?text=" + encoded : "");
    }

    // set href on the button
    const btn = document.getElementById("whatsapp-btn");
    if(btn){
      btn.href = makeWhatsAppLink(phoneNumber, defaultMessage);
      // optional: open in new window for desktop
      btn.target = "_blank";
    }

  },[])

  return (
    <>
      <footer className="site-footer">
        <div className="container-fluid">
          <div className="footer-inner">
            <div className="row gx-4 gy-4 align-items-start">
              <div className="col-12 col-lg-2">
                <div className="footer-logo">
                  <img src={footerlogo} alt="Brand Logo" />
                  <div>
                    <div className="mt-2">
                      <a href="#" className="me-2">
                        <img src={fbicon} alt="" />
                      </a>
                      <a href="#" className="me-2">
                        <img src={linkedinicon} alt="" />
                      </a>
                      <a href="#" className="me-2">
                        <img src={instaicon} alt="" />
                      </a>
                      <a href="#">
                        <img src={ytubeicon} alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-10">
                <div className="row">
                  <div className="col-lg-4">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="footer-heading">Quick Links</div>
                        <ul className="footer-links">
                          <li>
                            <a href="#">Home</a>
                          </li>
                          <li>
                            <a href="#">About Us</a>
                          </li>
                          <li>
                            <a href="#">Financial Products</a>
                          </li>
                          <li>
                            <a href="#">Services</a>
                          </li>
                          <li>
                            <a href="#">Articles/Insights</a>
                          </li>
                          <li>
                            <a href="#">Testimonials</a>
                          </li>
                          <li>
                            <a href="#">Contact Us</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-7">
                        <div className="footer-heading">Investor Relations</div>
                        <ul className="footer-links">
                          <li>
                            <a href="#">Investor Charter – Stock Broking</a>
                          </li>
                          <li>
                            <a href="#">
                              Investor Charter – Depository Participant
                            </a>
                          </li>
                          <li>
                            <a href="#">Investor Charter – Research Analyst</a>
                          </li>
                          <li>
                            <a href="#">Investor Complaints</a>
                          </li>
                          <li>
                            <a href="#">Investors Education</a>
                          </li>
                          <li>
                            <a href="#">Terms & Conditions</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="row">
                      <div className="col-lg-5">
                        <div className="footer-heading">Important Links</div>
                        <ul className="footer-links">
                          <li>
                            <a href="#">Forms Downloads</a>
                          </li>
                          <li>
                            <a href="#">Carrier Links</a>
                          </li>
                          <li>
                            <a href="#">Investors Link</a>
                          </li>
                          <li>
                            <a href="#">DOs and DON'Ts</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-lg-7">
                        <div className="footer-heading">Legal & Compliance</div>
                        <ul className="footer-links">
                          <li>
                            <a href="#">SEBI SCORES</a>
                          </li>
                          <li>
                            <a href="#">Disclaimer</a>
                          </li>
                          <li>
                            <a href="#">Privacy Policy</a>
                          </li>
                          <li>
                            <a href="#">Terms of Use</a>
                          </li>
                          <li>
                            <a href="#">Code of Ethics & Conduct</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="footer-heading">Contact Information</div>

                    <div className="contact-info">
                      <div className="ci-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <p>
                          <strong>Office Address</strong>
                          <br />
                          BF - 237, Sector 1, Salt Lake City, Kolkata, West
                          Bengal
                        </p>
                      </div>

                      <div className="ci-item">
                        <i className="fa-solid fa-phone"></i>
                        <p>
                          <strong>Phone Number</strong>
                          <br />
                          <a href="tel:919831044336">+91 98310 44336</a>
                          <br />
                          <a href="tel:917735885010">+91 77358 85010</a>
                        </p>
                      </div>

                      <div className="ci-item">
                        <i class="fa-solid fa-envelope"></i>
                        <p>
                          <strong>Email</strong>
                          <br />
                          <a href="mailto:navin@navanuwealth.com">navin@navanuwealth.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-12">
              <div className="footer-divider"></div>
              <div className="row">
                <div className="col-12">
                  <div className="disclaimer">
                    Disclaimer: Investments in securities market are subject to
                    market risks. Read all the related documents carefully
                    before investing.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="footer-bottom">
            <p className="mb-0">2025 Navanu Wealth. All Rights Reserved</p>
          </div>

           {/* floating chat bubble (optional) */}
            <div className="floating-chat">
              <a id="whatsapp-btn" class="whatsapp-btn" href="#" target="_blank" rel="noopener noreferrer">
                <img src={chaticon} alt="" />
              </a>
            </div>
      </footer>
    </>
  );
};

export default Footer;
