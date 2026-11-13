import React from 'react'

import MainLogo from  "../assets/images/Wealll_new.png";
import MiniLogo from  "../assets/images/Wealll_mini.png";
import navCall from  "../assets/images/nav-call.svg";

const Header = () => {
  return (
    
    <>
    
    <div className="container">

        <div className="nav-group">

            <div className="navbar">

                <div className="navlogo-full-wrap w-inline-block">

                    <div className="navlogo-full-mask">
                        <a href='#'><img src={MainLogo} alt="Logo" className="navlogo-full" /></a>
                    </div>
                    <a href="#"><img src={MiniLogo} alt="Logo" className="navlogo-mark" /></a>

                </div>

                <div className="navbar-menu">

                    <div className="navbar-menu-inner">

                        <div className="navbar-link-item w-inline-block">

                            <div className="navbar-link-text position-relative hover-mnu-reveal">
                                
                                <a href='javascript:void(0);'>Services</a>

                                <div className="dropdown">

                                    <ul className="list-unstyled">

                                        <li>

                                            <a href="branding-agency-kolkata">Branding</a>

                                        </li>

                                        <li> <a href="web-design-company-kolkata">Web Design</a>

                                        </li>

                                        <li> <a href="digital-marketing-agency-kolkata">Digital Marketing</a>

                                        </li>

                                    </ul>

                                </div>

                            </div>

                        </div>

                        <a href="our-work" aria-current="page" className="navbar-link-item w-inline-block ">

                            <div className="navbar-link-text">Our Work</div>

                        </a>

                        <a href="about" aria-current="page" className="navbar-link-item w-inline-block ">

                            <div className="navbar-link-text">Team</div>

                        </a>

                        <a href="refer-win" aria-current="page" className="navbar-link-item w-inline-block ">

                            <div className="navbar-link-text">Referral</div>

                        </a>

                        <a href="https://pixelstreet.in/blog" aria-current="page"
                            className="navbar-link-item w-inline-block ">

                            <div className="navbar-link-text">Blog</div>

                        </a>

                        <a href="careers" aria-current="page" className="navbar-link-item w-inline-block ">

                            <div className="navbar-link-text">Careers</div>

                        </a>

                    </div><a href="#" data-bs-toggle="modal" data-bs-target="#exampleModal"
                        className="btn-wrap greentowhite nav-btn w-inline-block">

                        <div className="btn-inner navbnt">

                            <div className="btn-main greentowhite nav-ani">

                                <div className="btn-text">DISCUSS A PROJECT

                                </div>

                            </div>

                        </div>

                    </a>

                </div>

                <div className="nav-mobile">

                    <div className="navbody">

                        <a data-w-id="c81135b2-e306-3de0-cea8-a4d8f2746292" href="https://pixelstreet.in/"
                            className="nav-menu-logo-link w-inline-block"><img src="assets/images/logo.svg" loading="lazy"
                                alt="Logo Pixelstreet" className="nav-menu-logo" />

                        </a>

                        <div data-w-id="bfc164ca-3c26-14ba-d6b1-6177cde85246" className="nav-close"><img
                                src="assets/images/close-m.svg" loading="lazy" alt="Icon Close X"
                                className="navclose-icon" />

                        </div>



                        <div className="nav-item-link mobile-drop w-inline-block">

                            <div className="nav-item-text">

                                Services

                                <span className="dropdown-icon"><i className="ri-add-line"></i></span>

                                <span className="dropdown-icon"><i className="ri-subtract-fill"></i></span>


                            </div>

                            <div className="dropdown-mob">

                                <ul className="list-unstyled">

                                    <li><a href="branding-agency-kolkata">Branding</a></li>

                                    <li><a href="web-design-company-kolkata">Web Design</a></li>

                                    <li><a href="digital-marketing-agency-kolkata">Digital Marketing</a></li>

                                </ul>

                            </div>

                        </div>

                        <a href="our-work" className="nav-item-link w-inline-block">

                            <div className="nav-item-text">Our Work

                            </div>

                        </a><a href="about" aria-current="page" className="nav-item-link w-inline-block w--current">

                            <div className="nav-item-text">Team</div>

                        </a>



                        <a href="refer-win" className="nav-item-link w-inline-block">

                            <div className="nav-item-text">Referral</div>

                        </a>

                        <a href="https://pixelstreet.in/blog" className="nav-item-link w-inline-block">

                            <div className="nav-item-text">Blog</div>

                        </a>

                        <a href="careers" className="nav-item-link w-inline-block">

                            <div className="nav-item-text">Careers</div>

                        </a>

                    </div>

                    <div data-w-id="3381c287-9947-e365-7067-fd4935256394" className="navbtn-wrap mobile-tab-none">

                        <img src="assets/images/menu.svg" loading="lazy" alt="" className="navbtn-icon" />

                    </div>

                    <a href="tel:+919007295096">

                        <div data-w-id="3381c287-9947-e365-7067-fd4935256394" className="navbtn-wrap dk-show">



                            <img src={navCall} loading="lazy" alt="" className="navbtn-icon" />

                        </div>

                    </a>





                </div>

            </div>

        </div>

        <div data-w-id="50ab8146-de5b-2d73-65a6-48e823c948ec" className="topmarker"></div>

    </div>


    </>


  )
}

export default Header
