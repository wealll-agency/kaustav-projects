import React, { useEffect } from "react";
import serviceimg from "../../assets/images/service_img.png";
const OurServices = () => {

    useEffect(()=>{
         // Wait until jQuery is loaded and DOM is ready
    setTimeout(() => {
      if (window.$) {
        window.$(".service-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout:2000,
        navText: ['<i className="fa-solid fa-chevron-left"></i>', '<i className="fa-solid fa-chevron-right"></i>'],
        responsive: {
            0: { items: 1 },
            768: { items: 1 }
        }
    });

      }
    }, 100);

    },[])

  return (
    <>
      <section className="services-section">
        <div className="container">
          <h2 className="section-title">SERVICES WE PROVIDE</h2>
          <div className="owl-carousel owl-theme service-carousel">
            <div className="service-slide row align-items-center">
              <div className="col-md-6 service-left">
                <h5>WEALTH MANAGEMENT</h5>
                <h3>Comprehensive financial planning for long-term growth</h3>
                <p>
                  Our comprehensive wealth management service brings together
                  investment planning, portfolio diversification, and ongoing
                  monitoring. By aligning strategies with your goals and risk
                  appetite, we ensure your wealth grows steadily while staying
                  protected against market volatility.
                </p>
                <a className="read-more" href="#">Read More</a>
              </div>

              <div className="col-md-6 text-center service-image">
                <img src={serviceimg} alt="Investment Advisory"/>
              </div>
            </div>

            <div className="service-slide row align-items-center">
              <div className="col-md-6 service-left">
                <h5>INVESTMENT ADVISORY</h5>
                <h3>Expert guidance for smarter investment decisions</h3>
                <p>
                  We provide personalized investment strategies to help you
                  manage your wealth effectively and achieve your financial
                  goals efficiently.
                </p>
                <a className="read-more" href="#">Read More</a>
              </div>

              <div className="col-md-6 text-center service-image">
                <img src={serviceimg} alt="Investment Advisory"/>
              </div>
            </div>

             <div className="service-slide row align-items-center">
              <div className="col-md-6 service-left">
                <h5>INVESTMENT ADVISORY</h5>
                <h3>Expert guidance for smarter investment decisions</h3>
                <p>
                  We provide personalized investment strategies to help you
                  manage your wealth effectively and achieve your financial
                  goals efficiently.
                </p>
                <a className="read-more" href="#">Read More</a>
              </div>

              <div className="col-md-6 text-center service-image">
                <img src={serviceimg} alt="Investment Advisory"/>
              </div>
            </div>

             <div className="service-slide row align-items-center">
              <div className="col-md-6 service-left">
                <h5>INVESTMENT ADVISORY</h5>
                <h3>Expert guidance for smarter investment decisions</h3>
                <p>
                  We provide personalized investment strategies to help you
                  manage your wealth effectively and achieve your financial
                  goals efficiently.
                </p>
                <a className="read-more" href="#">Read More</a>
              </div>

              <div className="col-md-6 text-center service-image">
                <img src={serviceimg} alt="Investment Advisory"/>
              </div>
            </div>

             <div className="service-slide row align-items-center">
              <div className="col-md-6 service-left">
                <h5>INVESTMENT ADVISORY</h5>
                <h3>Expert guidance for smarter investment decisions</h3>
                <p>
                  We provide personalized investment strategies to help you
                  manage your wealth effectively and achieve your financial
                  goals efficiently.
                </p>
                <a className="read-more" href="#">Read More</a>
              </div>

              <div className="col-md-6 text-center service-image">
                <img src={serviceimg} alt="Investment Advisory"/>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OurServices;
