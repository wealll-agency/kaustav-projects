import React from "react";
import downloadicon from "../../assets/images/download-icon.png";
import ratingicon from "../../assets/images/rating-icon.png";
import riseicon from "../../assets/images/rise-icon.png";
import rupeeicon from "../../assets/images/rupee-icon.png";
import workicon from "../../assets/images/work-icon.png";
import heroBg from "../../assets/images/hero_bg.png"; 

const Hero = () => {
  const bgStyle = {
    backgroundImage: `url(${heroBg})`,
  };

  return (
    <>
      <section className="hero-section" style={bgStyle}>
        <div className="hero-overlay" />

        <div className="hero-card container">
          <div className="hero-inner">
            <h1 className="hero-title">
              Your Wealth,
              <br />
              Our Expertise
            </h1>
            <p className="hero-sub">
              Smart financial strategies designed to secure your future and grow
              your prosperity.
            </p>

            <div className="hero-ctas">
              <button className="btn btn-dark btn-get">
                GET STARTED <i className="fa-solid fa-angles-right"></i>
              </button>
              <button className="btn btn-outline-light btn-profile">
                <img src={downloadicon} alt="" />
                Company Profile
              </button>
            </div>

            <div className="hero-stats row">
              <div className="col stat">
                <img src={ratingicon} alt="" />
                <div className="stat-value">10,000+</div>
                <div className="stat-label">Happy Clients</div>
              </div>

              <div className="col stat">
                <img src={riseicon} alt="" />
                <div className="stat-value">₹50 Cr+</div>
                <div className="stat-label">AUM Assured</div>
              </div>

              <div className="col stat">
                <img src={rupeeicon} alt="" />
                <div className="stat-value">₹60 Cr+</div>
                <div className="stat-label">Sum Assured</div>
              </div>

              <div className="col stat">
                <img src={workicon} alt="" />
                <div className="stat-value">25+ years</div>
                <div className="stat-label">Experience</div>
              </div>
            </div>

           
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
