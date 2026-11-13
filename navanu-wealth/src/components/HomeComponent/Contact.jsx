import React from "react";
import contactimg from "../../assets/images/contact_left_img.png";

const Contact = () => {
  return (
    <>
      <section className="contact_section">
        <div className="container">
          <div class="section_title text-center">
            <h2>GET IN TOUCH</h2>
            <h3>Let’s talk about your financial goals.</h3>
          </div>
          <div className="row contact_row">
            <div className="col-md-6">
                <div className="contact_left">
                    <img src={contactimg} alt="" />
                </div>
            </div>
            <div className="col-md-6">
                <div className="contact_right">
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
                        <div className="form_group">
                            <textarea name="message" className="form-control" placeholder="Message"></textarea>
                        </div>
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
