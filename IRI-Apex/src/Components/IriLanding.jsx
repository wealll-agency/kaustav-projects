import React from 'react';
import './iriLanding.css';

const IriLanding = () => {
  const topics = [
    { title: "Waterproof No Makeup Look", desc: "Master the art of the 'no makeup' look using local products, perfectly waterproofed for any occasion." },
    { title: "Glass Skin Photo Finish", desc: "Achieve the coveted long-wear glass skin effect that looks flawless both in person and on camera." },
    { title: "Brazilian Makeup Look", desc: "Learn the vibrant, contoured, and highly stylized techniques of Brazilian makeup artistry." },
    { title: "Drag Proof & Smudge Proof", desc: "Advanced techniques for creating makeup that withstands dragging, water, and smudging." },
    { title: "Sweat Resistant Reception Look", desc: "Create a long-lasting, drag-proof, sweat-resistant flawless look ideal for high-energy receptions." },
    { title: "Ultra HD Glass Finish", desc: "The ultimate guide to the Ultra HD glass finish makeup look for the highest definition requirements." }
  ];

  const mentors = [
    { name: "Jayita Das", style: "No Makeup Look with Water Proof", img: "/images/speaker_1.png" },
    { name: "Debjani Dutta", style: "Drag Proof, Water Proof, Smudge Proof Makeup", img: "/images/speaker_2.png" },
    { name: "Mouparna Adhikary", style: "Glass Skin Photo Finish Long Wear Makeup Look", img: "/images/speaker_5.png" },
    { name: "Monalisa Mukharjee", style: "Ultra HD Glass Finishing Makeup", img: "/images/speaker_3.png" },
    { name: "Chandrani Mukherjee", style: "Long Lasting, Drag-Proof, Sweat Resistant Flawless Reception Look", img: "/images/speaker_4.png" }

  ];

  const SVGIcon = ({ path }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );

  return (
    <div className="landing-container">
      {/* Hero Section */}
      <section className="premium-hero">
        <div className='hero_img'>
          <img src="/images/mastery_hero2.png" alt="" />
        </div>
        <div className="hero-overlay"></div>

        <div className='hero_content'>
          <div className="hero-main-content">
            <div className="hero-text-column">
              <span className="premium-badge">IRI APEX PRESENTS</span>
              <h1 className="editorial-title">
                <span className="title-makeup">Makeup</span>
                <span className="title-conclave">CONCLAVE <span className="title-version">1.0</span></span>
              </h1>
            </div>
          </div>
          <p className="premium-subtitle">
            One Day. 5 Mentors. 5 Looks. Experience the ultimate beauty masterclass designed for professionals.
          </p>

          <div className="premium-details-dock">
            <div className="dock-item">
              <span className="dock-label">
                <SVGIcon path={<path d="M8 2v4M16 2v4M3 10h18M5 4h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />} />
                Date
              </span>
              <span className="dock-value">11 July 2026</span>
            </div>
            <div className="dock-divider"></div>
            <div className="dock-item">
              <span className="dock-label">
                <SVGIcon path={<><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></>} />
                Time
              </span>
              <span className="dock-value">9:00 AM - 7:00 PM</span>
            </div>
            <div className="dock-divider"></div>
            <div className="dock-item">
              <span className="dock-label">
                <SVGIcon path={<><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></>} />
                Venue
              </span>
              <span className="dock-value">Montana Vista, Siliguri</span>
            </div>
          </div>

          <div className="premium-ctas">
            <a href="#booking" className="btn-glow">Book Your Seat</a>
          </div>

          <div className="hero-partners-strip">

            <div className="strip-item">
              <span className="strip-label">Organised & Hosted by</span>
              <div className="strip-content">
                <img src="/images/iri_logo.png" alt="Marketing Partner" className="strip-logo" />
              </div>
            </div>

            <div className="strip-divider"></div>

            <div className="strip-item">
              <span className="strip-label">Strategic Partner</span>
              <div className="strip-content">
                <img src="/images/logo1.png" alt="Marketing Partner" className="strip-logo" />
              </div>
            </div>

            <div className="strip-divider"></div>

            <div className="strip-item">
              <span className="strip-label">Marketing PARTNER </span>
              <div className="strip-content">
                <img src="/images/logo3.webp" alt="Digital Marketing Partner" className="strip-logo" />
              </div>
            </div>

            <div className="strip-divider"></div>

            <div className="strip-item">
              <span className="strip-label">TECHNICAL PARTNER</span>
              <div className="strip-content">
                <img src="/images/logo3.png" alt="Technology Partner" className="strip-logo" />
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* Topics Section */}
      <section id="topics" className="topics-section">
        <h2 className="section-title">What You'll Learn</h2>
        <div className="topics-grid">
          {topics.map((topic, index) => (
            <div key={index} className="topic-card">
              <div className="topic-icon">✦</div>
              <h3>{topic.title}</h3>
              <p style={{ marginTop: '1rem', color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.5' }}>
                {topic.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Perks Section */}
      <section className="perks-section">
        <div className="perks-container">
          <h2 className="section-title">What's Included</h2>
          <div className="perks-list">
            <div className="perk-item">
              <div className="perk-icon">📱</div>
              <div className="perk-content">
                <h4>Digital Marketing Knowledge</h4>
                <p>Social Media Handling strategies & Free Book included.</p>
              </div>
            </div>
            <div className="perk-item">
              <div className="perk-icon">🍽️</div>
              <div className="perk-content">
                <h4>Complimentary Meals</h4>
                <p>Breakfast, Lunch, Evening Tea, Coffee & Snacks provided.</p>
              </div>
            </div>
            <div className="perk-item">
              <div className="perk-icon">📸</div>
              <div className="perk-content">
                <h4>5 Star Photo Session</h4>
                <p>Professional photo session at the luxurious 5-star property.</p>
              </div>
            </div>
            <div className="perk-item">
              <div className="perk-icon">📜</div>
              <div className="perk-content">
                <h4> Certificate</h4>
                <p>Boost your portfolio with an Certified recognition.</p>
              </div>
            </div>
            <div className="perk-item">
              <div className="perk-icon">🎁</div>
              <div className="perk-content">
                <h4>Surprise Goodie Bag</h4>
                <p>Exclusive for the first 50 participants to register.</p>
              </div>
            </div>
            <div className="perk-item">
              <div className="perk-icon">🌟</div>
              <div className="perk-content">
                <h4>Special Guests</h4>
                <p>Surprise guest appearances to be revealed soon.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="premium-ctas"><a href="#booking" className="btn-glow">Book Now</a></div>
      </section>

      {/* Mentors Section */}
      <section className="mentors-section">
        <h2 className="section-title">Learn from the Best</h2>
        <div className="mentors-grid">
          {mentors.map((mentor, index) => (
            <div key={index} className="premium-mentor-card">
              <div className="mentor-avatar-wrapper">
                <div className="mentor-avatar-ring"></div>
                <img src={mentor.img} alt={mentor.name} className="mentor-avatar" />
              </div>
              <div className="mentor-glass-panel">
                <h3 className="mentor-name">{mentor.name}</h3>
                <div className="mentor-badge">DEMO</div>
                <div className="mentor-divider"></div>
                <p className="mentor-topic">{mentor.style}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="booking" className="pricing-section">
        <div className="pricing-card">
          <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '1rem' }}>Entry Pass</h2>
          <div className="price">
            <span className="currency">₹</span>3000
          </div>
          <p style={{ color: 'var(--text-muted)' }}>Full Day Masterclass Access</p>

          <ul className="pricing-features">
            <li><span>✓</span> Access to all 5 mentor sessions</li>
            <li><span>✓</span> All meals and refreshments included</li>
            <li><span>✓</span> 5-Star Photo Session access</li>
          </ul>

          <a href="#" className="btn-glow" style={{ width: '100%', marginBottom: '1rem', textAlign: 'center' }}>Book Now</a>
          <span className="advance-note">* Advance Booking Only ₹1000</span>
        </div>
      </section>

      {/* Event Agenda Section */}
      <section className="agenda-section">
        <div className="agenda-layout">
          {/* Left Column */}
          <div className="agenda-text-column">
            <span className="agenda-subtitle">MAKEUP CONCLAVE 1.0</span>
            <h2 className="agenda-title">Event <span>Schedule</span></h2>
            <p className="agenda-description">
              Experience a full day of intensive masterclasses designed to elevate your artistry. We have carefully curated each session to ensure you receive the highest quality of education and demonstrations.
            </p>
            <div className="agenda-quote">
              "Your growth as an artist is our priority. Get ready to transform your skills with industry-leading techniques."
            </div>
          </div>

          {/* Right Column (The Card) */}
          <div className="agenda-card-column">
            <div className="agenda-schedule-card">
              {[
                { time: "9:00 AM - 10:00 AM", title: "Registration & Welcome", letter: "1" },
                { time: "10:00 AM - 11:00 AM", title: "Guest Felicitation", letter: "2" },
                { time: "11:00 AM - 01:00 PM", title: "Makeup Classes", letter: "3" },
                { time: "01:00 PM - 02:00 PM", title: "Networking & Lunch", letter: "4" },
                { time: "02:00 PM - 04:00 PM", title: "Makeup Classes", letter: "5" },
                { time: "04:00 PM - 05:30 PM", title: "Selfie Shoots", letter: "6" },
                { time: "05:30 PM - 07:00 PM", title: "Q&A & Certification", letter: "7" }
              ].map((item,
                index) => (
                <div key={index} className="schedule-row">
                  <div className="schedule-left">
                    <span className="schedule-letter">{item.letter}</span>
                    <span className="schedule-title">{item.title}</span>
                  </div>
                  <div className="schedule-right">
                    <span className="schedule-time">{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* <div className="agenda-stats">
          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <SVGIcon path={<><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></>} />
            </div>
            <h3 className="stat-number">5000+</h3>
            <p className="stat-label">Artists Trained</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <SVGIcon path={<><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></>} />
            </div>
            <h3 className="stat-number">50+</h3>
            <p className="stat-label">Cities Reached</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <SVGIcon path={<><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></>} />
            </div>
            <h3 className="stat-number">20+</h3>
            <p className="stat-label">Industry Experts</p>
          </div>

          <div className="stat-divider"></div>

          <div className="stat-card">
            <div className="stat-icon-wrapper">
              <SVGIcon path={<><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></>} />
            </div>
            <h3 className="stat-number">4.9/5</h3>
            <p className="stat-label">Average Rating</p>
          </div>
        </div> */}
      </section>

      {/* Terms & Conditions Section */}
      <section className="terms-section">
        <div className="terms-container-box">
          <div className="terms-header-box">
            <h2 className="terms-title-box">Terms & <span>Conditions</span></h2>
          </div>

          <div className="terms-list-box">
            {[
              { title: "Ticket Policy", desc: "All ticket sales are final. No refunds, cancellations, or transfers are permitted under any circumstances." },
              { title: "Entry Requirements", desc: "A valid government-issued ID and the original booking confirmation email must be presented at the venue for entry." },
              { title: "Right of Admission", desc: "Management reserves the right of admission and may remove any attendee violating event rules or causing disruption." },
              { title: "Photography/Videography", desc: "Recording the masterclass or using professional cameras is strictly prohibited unless authorized by the organizers." },
              { title: "Timings", desc: "Please arrive at the venue at least 30 minutes prior to the scheduled start time to ensure smooth registration." },
              { title: "Liability", desc: "The organizers are not responsible for any loss, theft, or damage to personal belongings during the event." }
            ].map((term, index) => (
              <div key={index} className="term-list-item">
                <div className="term-check-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <div className="term-list-content">
                  <span className="term-bold-title">{term.title}: </span>
                  {term.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Footer */}
      <div className="sticky-footer">
        <div className="sticky-footer-content">
          <span className="sticky-footer-text">DON'T MISS OUT!</span>
          <a href="#" className="sticky-footer-btn">BOOK NOW ₹ 3000</a>
        </div>
      </div>

    </div>
  );
};

export default IriLanding;