import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "./../assets/images/logo.png";
import enterarrow from "./../assets/images/enter.png";
const Header = () => {

  useEffect(()=>{
         
    // Mean Menu
  $(".mean-menu").meanmenu({
    meanScreenWidth: "991",
  });
      
},[])

  return (
    <>
      <header className="header_section">
        <div className="top_header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                <div className="top_header_social">
                  <ul>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-9">
                <div className="top_header_contact_info">
                  <ul>
                    <li>
                      <a href="mailto:navin@navanuwealth.com">
                        <i className="fa-regular fa-envelope"></i>{" "}
                        navin@navanuwealth.com
                      </a>
                    </li>
                    <li>
                      <a href="tel:9831044336">
                        <i className="fa-solid fa-phone-volume"></i> +91
                        9831044336
                      </a>
                    </li>
                    <li>
                      <a href="tel:7733885010">91 7733885010</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="main_header">
          <div className="navbar-area nav-bg-2">
            <div className="mobile-responsive-nav">
                <div className="container-fluid">
                    <div className="mobile-responsive-menu">
                        <div className="logo">
                          <Link to="/"><img src={logo} className="main-logo" alt="logo" /></Link>
                     </div>
                    </div>
                </div>
            </div>
            
            <div className="desktop-nav">
              <div className="container-fluid">
                <nav className="navbar navbar-expand-md">
                  <Link to="/" className="navbar-brand"><img src={logo} className="main-logo" alt="logo" /></Link>
                  <div
                    className="collapse navbar-collapse mean-menu"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav mx-auto">
                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle active">
                          Products
                        </a>
                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/mutual-fund" className="nav-link">Mutual Funds</Link>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Equity
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Insurance
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link active">
                              Fixed Deposits (FD)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Bonds
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Estate Planning
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              AIF
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Structured Products
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Pre-IPO
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          Tools
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/sip-calculator" className="nav-link">SIP Calculator</Link>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Type
                            </a>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Type
                            </a>
                          </li>
                        </ul>
                      </li>

                      <li className="nav-item">
                        {/* <a href="about.html" className="nav-link">
                          About
                        </a> */}
                        <Link to="/about" className="nav-link">About</Link>
                      </li>

                      <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact</Link>
                      </li>

                      <li className="nav-item">
                        <a href="#" className="nav-link dropdown-toggle">
                          More
                        </a>

                        <ul className="dropdown-menu">
                          <li className="nav-item">
                            <Link to="/disclaimer" className="nav-link">Disclaimer</Link>
                          </li>
                          <li className="nav-item">
                            <Link to="/articles" className="nav-link">Articles</Link>
                          </li>
                          <li className="nav-item">
                            <a href="#" className="nav-link">
                              Privacy Policy
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="navbar_right">
                    <ul>
                      <li>
                        <div className="search-box">
                            <input type="text" className="search-input" placeholder="Search..." />
                            <span className="search-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </span>
                        </div>
                      </li>
                      <li>
                        <a href="#" className="invest_btn">
                          Invest Now
                        </a>
                      </li>
                      <li>
                       
                        <Link to="/login" className="login_btn">Login / Register <img src={enterarrow} alt="" /></Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
