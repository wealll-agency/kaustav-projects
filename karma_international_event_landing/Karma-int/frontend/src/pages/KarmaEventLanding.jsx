import React, { useState, useEffect } from 'react';
import { FaCalendarAlt } from 'react-icons/fa';
import './KarmaEventLanding.css';

const KarmaEventLanding = () => {
    const trainers = [
        {
            name: "Harsh Dave",
            role: "The Iconic Makeup Educator",
            image: "/images/harsh_dave.png",
            tag: "Iconic Makeup Educator · 15+ Years Experience",
            bullets: [
                "Learn industry-leading makeup techniques to elevate your bridal, editorial, and celebrity styling games.",
                "Discover the secrets of creating flawless glass skin, perfect contouring, and advanced eye looks.",
                "Step-by-step masterclass coaching designed to turn passionate beginners into successful makeup entrepreneurs.",
                "Receive a certified qualification from Jasmine Beauty Care and build your celebrity portfolio."
            ]
        },
        {
            name: "Richa Dave",
            role: "Celebrity Makeup Artist & Co-Founder",
            image: "/images/richa_dave.png",
            tag: "Celebrity Makeup Artist · Co-Founder of Jasmine Beauty Care",
            bullets: [
                "Specializes in high-end luxury bridal makeovers and advanced skin transformation techniques.",
                "Learn the business of makeup: client acquisition, pricing, branding, and setting up your salon.",
                "Hands-on demonstration of contemporary Indian bridal makeup and signature red carpet glam.",
                "Direct guidance on creating flawless looks for high-profile fashion shows and media shoots."
            ]
        },
        {
            name: "Prarthit Dave",
            role: "Creative Director & Master Stylist",
            image: "/images/prarthit_dave.png",
            tag: "Creative Director & Stylist · Hair Styling & Media Expert",
            bullets: [
                "Expert in advanced hair styling, extensions, styling products, and styling tools.",
                "Learn how to synchronize makeup and hair styles to create complete, jaw-dropping transformations.",
                "Portfolio development: how to photograph your models, light your work, and present it on social media.",
                "Secret hacks to work under tight timelines at major events, shows, and celebrity shoots."
            ]
        }
    ];

    const [activeTrainer, setActiveTrainer] = useState(0);
    const [activeReel, setActiveReel] = useState(1);
    const [playingReel, setPlayingReel] = useState(null);
    const [activeCerSlide, setActiveCerSlide] = useState(0);
    const [isHoveredCer, setIsHoveredCer] = useState(false);
    const [isTransitioningCer, setIsTransitioningCer] = useState(true);

    useEffect(() => {
        if (playingReel !== null) return;
        const interval = setInterval(() => {
            setActiveReel((prev) => (prev + 1) % 6);
        }, 3000);
        return () => clearInterval(interval);
    }, [playingReel]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTrainer((prev) => (prev + 1) % 3);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (isHoveredCer) return;
        const interval = setInterval(() => {
            setIsTransitioningCer(true);
            setActiveCerSlide((prev) => prev + 1);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHoveredCer]);

    const handleCerTransitionEnd = () => {
        if (activeCerSlide >= 8) {
            setIsTransitioningCer(false);
            setActiveCerSlide(0);
        }
    };



    return (
        <div className="landing-wrapper">
            {/* Main Banner Section */}
            <div className="karma-event-page">
                <div className="karma-event-content">
                    {/* 3-Person Gallery (Overlapped) */}
                    <div className="speakers-gallery">
                        <div className="speaker-card-side left-side">
                            <img
                                src="/images/harsh_dave.png"
                                alt="Harsh Dave"
                                className="speaker-img"
                            />
                        </div>

                        <div className="speaker-card-center">
                            <img
                                src="/images/richa_dave.png"
                                alt="Richa Dave"
                                className="speaker-img center-img"
                            />
                        </div>

                        <div className="speaker-card-side right-side">
                            <img
                                src="/images/prarthit_dave.png"
                                alt="Prarthi Dave"
                                className="speaker-img"
                            />
                        </div>
                    </div>

                    <h2 className="basic-advanced-title">Basic To Advanced</h2>
                    <h1 className="masterclass-title">Masterclass</h1>

                    {/* Date Badge */}
                    <div className="date-badge">
                        <FaCalendarAlt className="date-icon" />
                        <p className="date-text">17<span className="superscript">TH</span> TO 21<span className="superscript">ST</span>, AUGUST, 2026</p>
                    </div>

                    {/* Bottom Speaker Names & Descriptions Row */}
                    <div className="footer-divider-line"></div>
                    <div className="speakers-info-row">
                        <div className="speaker-info-col">
                            <h3 className="info-name">Richa Dave</h3>
                            <p className="info-title">The Iconic Makeup Educator</p>
                        </div>
                        <div className="speaker-info-col">
                            <h3 className="info-name">Harsh Dave</h3>
                            <p className="info-title">The Iconic Makeup Educator</p>
                        </div>
                        <div className="speaker-info-col">
                            <h3 className="info-name">Prarthi Dave</h3>
                            <p className="info-title">Iconic Hair Stylist & Educator</p>
                        </div>
                    </div>

                    {/* Partner Grid Section */}
                    <div className="footer-divider-line"></div>
                    <div className="partners-logos-row">
                        <div className="partners-logo-col">
                            <span className="partner-label">HOSTED BY</span>
                            <div className="partner-logos-group">
                                <img
                                    src="/images/karma_logo.png"
                                    alt="Karma Internationals Logo"
                                    className="partner-logo-img"
                                />
                                <span className="partner-ampersand">&amp;</span>
                                <img
                                    src="/images/sb_logo.png"
                                    alt="SB International Logo"
                                    className="partner-logo-img"
                                />
                            </div>
                        </div>
                        <div className="partners-logo-col">
                            <span className="partner-label">Digital Partner</span>
                            <div className="partner-logos-group">
                                <img
                                    src="/images/Wealll_new.png"
                                    alt="Wealll Logo"
                                    className="partner-logo-img"
                                />
                            </div>
                        </div>
                        <div className="partners-logo-col">
                            <span className="partner-label">Technical Partner</span>
                            <div className="partner-logos-group">
                                <img
                                    src="/images/growth_utsav.png"
                                    alt="Growth Utsav Logo"
                                    className="partner-logo-img"
                                />
                            </div>
                        </div>
                        <div className="partners-logo-col">
                            <span className="partner-label">Makeup Partner</span>
                            <div className="partner-logos-group">
                                <img
                                    src="/images/aflairza_logo.png"
                                    alt="Aflairza Logo"
                                    className="partner-logo-img"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Partners / Slider Section (Outside Banner) */}
            <div className="partners-section">
                <div className="partners-content-row">
                    <div className="partners-title-container">
                        <h2 className="partners-title">
                            <span className="gold-text">Karma</span><br />International <br />Featured
                        </h2>
                    </div>
                    <div className="marquee-container">
                        <div className="marquee-track">
                            {/* Original Set */}
                            <div className="marquee-item"><img src="/images/client_logo1.png" alt="Client 1" /></div>
                            <div className="marquee-item"><img src="/images/client_logo2.png" alt="Client 2" /></div>
                            <div className="marquee-item"><img src="/images/client_logo3.png" alt="Client 3" /></div>
                            <div className="marquee-item"><img src="/images/client_logo4.png" alt="Client 4" /></div>
                            <div className="marquee-item"><img src="/images/client_logo5.png" alt="Client 5" /></div>
                            <div className="marquee-item"><img src="/images/client_logo6.png" alt="Client 6" /></div>
                            {/* Duplicate Set for Infinite Scroll Loop */}
                            <div className="marquee-item"><img src="/images/client_logo1.png" alt="Client 1" /></div>
                            <div className="marquee-item"><img src="/images/client_logo2.png" alt="Client 2" /></div>
                            <div className="marquee-item"><img src="/images/client_logo3.png" alt="Client 3" /></div>
                            <div className="marquee-item"><img src="/images/client_logo4.png" alt="Client 4" /></div>
                            <div className="marquee-item"><img src="/images/client_logo5.png" alt="Client 5" /></div>
                            <div className="marquee-item"><img src="/images/client_logo6.png" alt="Client 6" /></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Choose Your Experience Section */}


            {/* Video Section commented out */}
            {/*
            <div className="video-section">
                <div className="video-container">
                    <iframe
                        src="https://www.youtube.com/embed/DPU9h4v48R8?autoplay=1&mute=1&loop=1&playlist=DPU9h4v48R8&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
                        width="100%"
                        height="100%"
                        style={{ border: 'none' }}
                        frameBorder="0"
                        allowFullScreen={true}
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    ></iframe>
                </div>
            </div>
            */}

            {/* Meet Your Trainer Section */}
            <section className="mtn-section">
                <div className="mtn-wrap">
                    <div className="mtn-photo-col mtn-insta-col">
                        <video
                            src="/videos/richa_dave.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="trainer-local-video"
                        ></video>
                    </div>
                    <div className="mtn-content-col">
                        <p className="mtn-eyebrow">Meet Your Trainer</p>

                        {trainers.map((t, idx) => (
                            <div key={idx} className={`mtn-details ${idx === activeTrainer ? 'active' : ''}`}>
                                <h2 className="mtn-name">{t.name}</h2>
                                <p className="mtn-role mb-3 mb-md-4">{t.role}</p>
                                <ul className="mtn-list">
                                    {t.bullets.map((bullet, bIdx) => (
                                        <li className="mtn-list__item" key={bIdx}>
                                            <span className="mtn-list__dot"></span>
                                            {bullet}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mtn-divider"></div>
                                <div className="mtn-author">
                                    <div className="mtn-author__info">
                                        <span className="mtn-author__name">{t.name}</span>
                                        <span className="mtn-author__tag">{t.tag}</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Slider Dots */}
                        <div className="mtn-dots">
                            {trainers.map((_, idx) => (
                                <button
                                    key={idx}
                                    className={`mtn-dot ${idx === activeTrainer ? 'active' : ''}`}
                                    onClick={() => setActiveTrainer(idx)}
                                    aria-label={`Go to trainer ${idx + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="price-section">
                <div className="container">
                    <h2 className="text-center"><span className="golden-text-gradient">Choose Your Experience</span></h2>
                    <p className="text-center">Select the perfect package</p>
                    <div className="row pt-40 justify-content-center g-4">
                        {/* Package 1 */}
                        <div className="col-md-6 col-lg-5">
                            <div className="ticket-card glass-effect">
                                <div className="text-center">
                                    <h3>Package - 1</h3>
                                    <span className="price golden-text-gradient">₹ 20,000/-</span>
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Learn 2 Complete Looks Every Day (Makeup & Hair)
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Participants will receive a Framed Certificate
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            A Customised Trophy
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Selfie with the Jasmine Beauty Care Team
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Breakfast | Lunch | Hi-Tea
                                        </li>
                                    </ul>
                                    <button className="book_now_btn golden-gradient">Book Now</button>
                                </div>
                            </div>
                        </div>

                        {/* Package 2 */}
                        <div className="col-md-6 col-lg-5">
                            <div className="ticket-card glass-effect vip-card">
                                <div className="text-center">
                                    <h3>Package - 2</h3>
                                    <span className="price golden-text-gradient">₹ 30,000/-</span>
                                    <ul>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Learn 2 Complete Looks Every Day (Makeup & Hair)
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Private Hands-on Practice Sessions by Team Jasmine Beauty Care
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Participants will receive a Framed Certificate
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            A Customised Trophy
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Selfie with the Entire Team
                                        </li>
                                        <li>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"
                                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round" className="text-yellow-400 flex-shrink-0">
                                                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                                <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                            </svg>
                                            Breakfast | Lunch | Hi-Tea
                                        </li>
                                    </ul>
                                    <button className="book_now_btn golden-gradient">Book Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Exclusive Bonuses Section */}
            <div className="bonuses-section-vsl">
                <div className="container">
                    <div className="bonuses-content text-center">
                        <h2 className="heading my-0"><span className="white-text">Exclusive</span> <span className="golden-text-gradient">Bonuses</span></h2>
                        <div className="tickets mt-3">
                            {/* Bonus 1 */}
                            <div className="ticket">
                                <div className="ticket-body">
                                    <span className="notch notch-tl"></span>
                                    <span className="notch notch-bl"></span>
                                    <span className="notch notch-l"></span>
                                    <span className="notch notch-r"></span>
                                    <div className="ticket-stub">
                                        <span className="stub-label">Bonus Pass</span>
                                        <div className="stub-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21 v-2 a4 4 0 0 0 -4 -4 H6 a4 4 0 0 0 -4 4 v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21 v-2 a4 4 0 0 0 -3 -3.87"></path><path d="M16 3.13 a4 4 0 0 1 0 7.75"></path></svg>
                                        </div>
                                        <div className="stub-num">01</div>
                                        <div className="stub-num-label">Bonus</div>
                                    </div>
                                    <div className="ticket-main">
                                        <span className="ticket-tag">👑 VIP ACCESS</span>
                                        <div className="ticket-text-content">
                                            <h3 className="ticket-title">Lifetime Access</h3>
                                            <p className="ticket-sub">to VIP community</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Bonus 2 */}
                            <div className="ticket">
                                <div className="ticket-body">
                                    <span className="notch notch-tl"></span>
                                    <span className="notch notch-bl"></span>
                                    <span className="notch notch-l"></span>
                                    <span className="notch notch-r"></span>
                                    <div className="ticket-stub">
                                        <span className="stub-label">Bonus Pass</span>
                                        <div className="stub-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3 H8 a2 2 0 0 1 2 2 V19 a2 2 0 0 0 2 2 2 2 0 0 0 2 -2 V5 a2 2 0 0 1 2 -2 H22"></path><path d="M4 6 H8"></path><path d="M4 10 H8"></path><path d="M16 6 H20"></path><path d="M16 10 H20"></path></svg>
                                        </div>
                                        <div className="stub-num">02</div>
                                        <div className="stub-num-label">Bonus</div>
                                    </div>
                                    <div className="ticket-main">
                                        <span className="ticket-tag">📚 E-BOOK 1</span>
                                        <div className="ticket-text-content">
                                            <h3 className="ticket-title">Employee Management</h3>
                                            <p className="ticket-sub">Manage employees effortlessly & streamline your work.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Bonus 3 */}
                            <div className="ticket">
                                <div className="ticket-body">
                                    <span className="notch notch-tl"></span>
                                    <span className="notch notch-bl"></span>
                                    <span className="notch notch-l"></span>
                                    <span className="notch notch-r"></span>
                                    <div className="ticket-stub">
                                        <span className="stub-label">Bonus Pass</span>
                                        <div className="stub-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3 H8 a2 2 0 0 1 2 2 V19 a2 2 0 0 0 2 2 2 2 0 0 0 2 -2 V5 a2 2 0 0 1 2 -2 H22"></path><path d="M4 6 H8"></path><path d="M4 10 H8"></path><path d="M16 6 H20"></path><path d="M16 10 H20"></path></svg>
                                        </div>
                                        <div className="stub-num">03</div>
                                        <div className="stub-num-label">Bonus</div>
                                    </div>
                                    <div className="ticket-main">
                                        <span className="ticket-tag">📚 E-BOOK 2</span>
                                        <div className="ticket-text-content">
                                            <h3 className="ticket-title">Sales Management</h3>
                                            <p className="ticket-sub">Turbocharge business growth with proven sales systems.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Bonus 4 */}
                            <div className="ticket">
                                <div className="ticket-body">
                                    <span className="notch notch-tl"></span>
                                    <span className="notch notch-bl"></span>
                                    <span className="notch notch-l"></span>
                                    <span className="notch notch-r"></span>
                                    <div className="ticket-stub">
                                        <span className="stub-label">Bonus Pass</span>
                                        <div className="stub-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3 H8 a2 2 0 0 1 2 2 V19 a2 2 0 0 0 2 2 2 2 0 0 0 2 -2 V5 a2 2 0 0 1 2 -2 H22"></path><path d="M4 6 H8"></path><path d="M4 10 H8"></path><path d="M16 6 H20"></path><path d="M16 10 H20"></path></svg>
                                        </div>
                                        <div className="stub-num">04</div>
                                        <div className="stub-num-label">Bonus</div>
                                    </div>
                                    <div className="ticket-main">
                                        <span className="ticket-tag">📚 E-BOOK 3</span>
                                        <div className="ticket-text-content">
                                            <h3 className="ticket-title">Financial Management</h3>
                                            <p className="ticket-sub">Improve business growth & profits through finance mastery.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Bonus 5 */}
                            <div className="ticket">
                                <div className="ticket-body">
                                    <span className="notch notch-tl"></span>
                                    <span className="notch notch-bl"></span>
                                    <span className="notch notch-l"></span>
                                    <span className="notch notch-r"></span>
                                    <div className="ticket-stub">
                                        <span className="stub-label">Bonus Pass</span>
                                        <div className="stub-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3 H8 a2 2 0 0 1 2 2 V19 a2 2 0 0 0 2 2 2 2 0 0 0 2 -2 V5 a2 2 0 0 1 2 -2 H22"></path><path d="M4 6 H8"></path><path d="M4 10 H8"></path><path d="M16 6 H20"></path><path d="M16 10 H20"></path></svg>
                                        </div>
                                        <div className="stub-num">05</div>
                                        <div className="stub-num-label">Bonus</div>
                                    </div>
                                    <div className="ticket-main">
                                        <span className="ticket-tag">📚 E-BOOK 4</span>
                                        <div className="ticket-text-content">
                                            <h3 className="ticket-title">Malodia Business Blueprint</h3>
                                            <p className="ticket-sub">Step-by-step process to run your business like a CEO.</p>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Bonus 6 */}
                            <div className="ticket">
                                <div className="ticket-body">
                                    <span className="notch notch-tl"></span>
                                    <span className="notch notch-bl"></span>
                                    <span className="notch notch-l"></span>
                                    <span className="notch notch-r"></span>
                                    <div className="ticket-stub">
                                        <span className="stub-label">Bonus Pass</span>
                                        <div className="stub-icon">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        </div>
                                        <div className="stub-num">06</div>
                                        <div className="stub-num-label">Bonus</div>
                                    </div>
                                    <div className="ticket-main">
                                        <span className="ticket-tag">📺 REPLAY ACCESS</span>
                                        <div className="ticket-text-content">
                                            <h3 className="ticket-title">3 Free Replays</h3>
                                            <p className="ticket-sub">attend future sessions</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA button at the bottom of bonuses */}
                        <div className="bonuses-cta-container mt-5 pt-3">
                            <button className="golden-gradient px-5 py-3 fs-5 font-weight-bold">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Satisfied MUA's Reels Slider Section */}
            <section className="mua-section">
                <div className="container">
                    <h2 className="mua-heading">Thousands of Satisfied <em>MUA'S</em></h2>

                    <div className="mua-slider-container">
                        <button className="mua-arrow prev" onClick={() => setActiveReel((prev) => (prev - 1 + 6) % 6)} aria-label="Previous reel">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        </button>

                        <div className="mua-slider-track">
                            {[0, 1, 2, 3, 4, 5].map((idx) => {
                                const reelId = [
                                    "841316029025589",
                                    "1125577746349061",
                                    "25409302808748175",
                                    "1297002459160483",
                                    "865156539911454",
                                    "788776383718576"
                                ][idx];

                                let cardClass = "mua-card";
                                if (idx === activeReel) {
                                    cardClass += " active";
                                } else if (idx === (activeReel - 1 + 6) % 6) {
                                    cardClass += " prev";
                                } else if (idx === (activeReel + 1) % 6) {
                                    cardClass += " next";
                                } else {
                                    cardClass += " hidden";
                                }

                                return (
                                    <div
                                        key={idx}
                                        className={cardClass}
                                        onClick={() => {
                                            if (activeReel !== idx) {
                                                setActiveReel(idx);
                                                setPlayingReel(null);
                                            }
                                        }}
                                    >
                                        <div className="mua-video-wrapper">
                                            <iframe
                                                src={`https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Freel%2F${reelId}%2F&show_text=0&t=0`}
                                                width="100%"
                                                height="100%"
                                                style={{ border: 'none', overflow: 'hidden' }}
                                                scrolling="no"
                                                frameBorder="0"
                                                allowFullScreen={true}
                                                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                                                title={`Satisfied MUA Reel ${idx + 1}`}
                                            ></iframe>

                                            {playingReel !== idx && (
                                                <div
                                                    className="mua-video-overlay"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        if (activeReel === idx) {
                                                            setPlayingReel(idx);
                                                        } else {
                                                            setActiveReel(idx);
                                                            setPlayingReel(null);
                                                        }
                                                    }}
                                                >
                                                    <div className="mua-reel-badge">
                                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style={{ marginRight: '6px' }}>
                                                            <path d="M9 8H7v3h2v9h4v-9h3.6l.4-3H13V6c0-.5.5-1 1-1h2V1H13a5 5 0 0 0-5 5v2z" />
                                                        </svg>
                                                        REELS
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <button className="mua-arrow next" onClick={() => setActiveReel((prev) => (prev + 1) % 6)} aria-label="Next reel">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    </div>

                    {/* Navigation Dots */}
                    <div className="mua-dots">
                        {[0, 1, 2, 3, 4, 5].map((idx) => (
                            <button
                                key={idx}
                                className={`mua-dot ${idx === activeReel ? 'active' : ''}`}
                                onClick={() => setActiveReel(idx)}
                                aria-label={`Go to reel ${idx + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>



            {/* Your 5-Day Journey Section */}
            <section className="pgd-section">
                <div className="container">
                    <h2 className="pgd-heading">Your <em>5-Day</em> Journey</h2>
                    <div className="pgd-track">
                        <div className="pgd-line"></div>

                        {/* Day 1 */}
                        <div className="pgd-step">
                            <div className="pgd-circle"><span className="pgd-num">01</span></div>
                            <div className="pgd-content">
                                <h3 className="pgd-title">Skin Prep & Base</h3>
                                <p className="pgd-desc">Master flawless glass skin base, color correction, and contouring techniques.</p>
                            </div>
                        </div>

                        {/* Day 2 */}
                        <div className="pgd-step">
                            <div className="pgd-circle"><span className="pgd-num">02</span></div>
                            <div className="pgd-content">
                                <h3 className="pgd-title">Eye Makeup Mastery</h3>
                                <p className="pgd-desc">Learn advanced smoky eyes, cut crease, glitter application, and liner precision.</p>
                            </div>
                        </div>

                        {/* Day 3 */}

                        <div className="pgd-step">
                            <div className="pgd-circle"><span className="pgd-num">03</span></div>
                            <div className="pgd-content">
                                <h3 className="pgd-title">Bridal & Glam Looks</h3>
                                <p className="pgd-desc">Create iconic Indian traditional bridal and high-fashion red carpet glam looks.</p>
                            </div>
                        </div>

                        {/* Day 4 */}
                        <div className="pgd-step">
                            <div className="pgd-circle"><span className="pgd-num">04</span></div>
                            <div className="pgd-content">
                                <h3 className="pgd-title">Hair Styling Art</h3>
                                <p className="pgd-desc">Understand hair texturing, red-carpet updos, volume creation, and detailing.</p>
                            </div>
                        </div>

                        {/* Day 5 */}
                        <div className="pgd-step">
                            <div className="pgd-circle"><span className="pgd-num">05</span></div>
                            <div className="pgd-content">
                                <h3 className="pgd-title">Shoot & Certify</h3>
                                <p className="pgd-desc">Professional photoshoot for your portfolio and award certificate distribution.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* This Masterclass Is For You If... Section */}
            <section className="mify-section">
                <div className="container">
                    <div className="mify-card">
                        <h2 className="mify-heading">This Masterclass <em>Is For You If...</em></h2>
                        <div className="mify-grid">
                            {/* Point 1 */}
                            <div className="mify-item">
                                <div className="mify-icon-wrap">
                                    <svg className="mify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="mify-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>

                            {/* Point 2 */}
                            <div className="mify-item">
                                <div className="mify-icon-wrap">
                                    <svg className="mify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="mify-text">Want to stop working 12-14 hours and build a business that runs without you.</p>
                            </div>

                            {/* Point 3 */}
                            <div className="mify-item">
                                <div className="mify-icon-wrap">
                                    <svg className="mify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="mify-text">Want to get out of the loop of discount wars, cash crunches, and team problems.</p>
                            </div>

                            {/* Point 4 */}
                            <div className="mify-item">
                                <div className="mify-icon-wrap">
                                    <svg className="mify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="mify-text">Need to build proper systems for sales, finance, and team management.</p>
                            </div>

                            {/* Point 5 */}
                            <div className="mify-item">
                                <div className="mify-icon-wrap">
                                    <svg className="mify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="mify-text">Are an action taker with the commitment to implement everything after the training.</p>
                            </div>

                            {/* Point 6 */}
                            <div className="mify-item">
                                <div className="mify-icon-wrap">
                                    <svg className="mify-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </div>
                                <p className="mify-text">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Karma International Section */}
            <section className="about-ki-section">
                <div className="container">
                    <div className="about-ki-wrap">
                        <div className="about-ki-photo-container">
                            <img
                                src="/images/about_img.jpeg"
                                alt="Karma International"
                                className="about-ki-img"
                            />
                        </div>
                        <div className="about-ki-content-col">
                            <p className="about-ki-eyebrow">ABOUT KARMA INTERNATIONAL</p>
                            <h2 className="about-ki-title">Meet <em>Karma International</em></h2>
                            <p className="about-ki-desc">
                                Karma International is a premier global fashion, style, and lifestyle platform. Over the years, we have hosted prestigious fashion awards, grand carnivals, industry seminars, and specialized masterclass training sessions designed to elevate makeup artists, hair stylists, and beauty entrepreneurs.
                            </p>
                            <p className="about-ki-mission">
                                <em>Mission:</em> To train and certify passionate beauty professionals globally.
                            </p>

                            <div className="about-ki-divider"></div>

                            <div className="about-ki-stats-grid">
                                <div className="about-ki-stat-card">
                                    <div className="about-ki-stat-val">10+</div>
                                    <div className="about-ki-stat-label">Years of Fashion & Styling Excellence</div>
                                </div>
                                <div className="about-ki-stat-card">
                                    <div className="about-ki-stat-val">50+</div>
                                    <div className="about-ki-stat-label">Awards & Grand Carnivals Hosted</div>
                                </div>
                                <div className="about-ki-stat-card">
                                    <div className="about-ki-stat-val">15,000+</div>
                                    <div className="about-ki-stat-label">Students Trained in Seminars & Classes</div>
                                </div>
                                <div className="about-ki-stat-card">
                                    <div className="about-ki-stat-val">100k+</div>
                                    <div className="about-ki-stat-label">Active Global Community Followers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Certification & Recognition Section */}
            <section className="cer-section">
                <div className="container">
                    <h2 className="cer-heading">Certification & <em>Recognition</em></h2>

                    <div
                        className="cer-slider-container"
                        onMouseEnter={() => setIsHoveredCer(true)}
                        onMouseLeave={() => setIsHoveredCer(false)}
                    >
                        <div
                            className="cer-slider-track"
                            style={{
                                transform: `translateX(calc(-${activeCerSlide} * var(--cer-slide-width, 25%)))`,
                                transition: isTransitioningCer ? 'transform 0.8s cubic-bezier(0.25, 1, 0.5, 1)' : 'none'
                            }}
                            onTransitionEnd={handleCerTransitionEnd}
                        >
                            {[
                                "/images/award4.jpg",
                                "/images/award7.jpg",
                                "/images/award2.jpg",
                                "/images/award8.jpg",
                                "/images/award1.jpg",
                                "/images/award5.jpg",
                                "/images/award3.jpg",
                                "/images/award6.jpg",
                                // Duplicate first 4 items for a seamless scrolling loop
                                "/images/award4.jpg",
                                "/images/award7.jpg",
                                "/images/award2.jpg",
                                "/images/award8.jpg"
                            ].map((imgSrc, idx) => (
                                <div key={`cer-item-${idx}`} className="cer-card">
                                    <div className="cer-img-frame">
                                        <img src={imgSrc} alt={`Recognition Award ${idx + 1}`} className="cer-img" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Terms and Conditions Section */}
            <section className="tnc-section" style={{ backgroundImage: "url('/images/banner_bg.jpeg')" }}>
                <div className="tnc-container">
                    <div className="tnc-logo-header">
                        <span className="tnc-presented">PRESENTED & ORGANIZED BY</span>
                        <img src="/images/karma_logo.png" alt="Karma International" className="tnc-karma-logo" />
                    </div>

                    <div className="tnc-card glass-effect">
                        <div className="tnc-card-layout">
                            <div className="tnc-left-col">
                                <h2 className="tnc-title"><span className="tnc-yellow">TERMS & CONDITIONS</span> APPLY</h2>
                                <div className="tnc-list-container">
                                    <ul className="tnc-list">
                                        <li><span className="tnc-bullet">•</span> Booking amount is non-refundable & non-adjustable</li>
                                        <li><span className="tnc-bullet">•</span> Full advance payment required</li>
                                        <li><span className="tnc-bullet">•</span> Seats will be allocated on a first-come, first-served basis<br />early bookings get front-row access.</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="tnc-vertical-separator"></div>

                            <div className="tnc-right-col">
                                <div className="tnc-contact-info">
                                    <span className="tnc-inquiries">FOR BOOKINGS AND INQUIRIES:</span>
                                    <h3 className="tnc-contact">CONTACT: <span className="tnc-yellow">87775 02600</span></h3>
                                    <div className="tnc-contact-name">ANJANA ROY</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Sticky Footer */}
            <div className="sticky-cta-footer">
                <div className="sticky-cta-container">
                    <div className="sticky-cta-text">
                        <h4 className="sticky-cta-title">Don't Miss Out!</h4>
                        <p className="sticky-cta-subtitle">Limited seats available for the masterclass</p>
                    </div>
                    <div className="sticky-cta-action">
                        <button className="sticky-cta-btn">Book Now ₹30,000</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KarmaEventLanding;
