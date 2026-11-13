import React from "react";
import { Link } from "react-router-dom";
import aboutimgright from '../../assets/images/about_right_img.png';
import icon_left from '../../assets/images/left_icon.png';
import icon_right from '../../assets/images/right_icon.png';
import founder_img from '../../assets/images/founder_img.jpg';
import white_arrow from '../../assets/images/white_arrow.png';
const AboutComponent = () => {
  return (
    <>
      <div className="breadcrumb_section text-center">
        <div className="container">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              About Us
            </li>
          </ol>
        </div>
      </div>

        <div className="about_us">
            <div className="container-xl">
                <div className="row align-items-center">
                    <div className="col-md-7">
                       <div className="about_us_left">
                            <p>Navanu is a professionally run financial advisory firm dedicated to providing personalized guidance for wealth creation and management. We believe in delivering simple, unbiased, and uncluttered professional advice that adds genuine value to our clients' financial journeys.</p>
                            <p>Our approach is built on trust, transparency, and a deep understanding of each client's unique financial situation. We don't just manage money – we build lasting relationships that help families and individuals achieve their financial dreams.</p>
                            <div class="center_btn pt-0">
                                <a href="#">Get In Touch <i className="fa-solid fa-angles-right"></i></a>
                            </div>
                        </div> 
                    </div>
                    <div className="col-md-5">
                        <div className="about_right">
                            <img src={aboutimgright} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="founders">
            <div className="container-xxl">
                <div className="about_common_title text-center">
                    <h2>
                        <img src={icon_left} alt="" />
                        MEET OUR FOUNDERS
                        <img src={icon_right} alt="" />
                    </h2>
                </div>

                <div className="row founder_row">
                    <div className="col-lg-3 col-md-6">
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                    </div>
                    
                </div>

                <div className="topspace"></div>

                <div className="about_common_title text-center">
                    <h2>
                        <img src={icon_left} alt="" />
                        MEET THE TEAM
                        <img src={icon_right} alt="" />
                    </h2>
                </div>

                <div className="row founder_row">
                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div className="founder_col">
                            <div className="founder_image">
                                <img src={founder_img} alt="" />
                            </div>
                            <div className="founder_info">
                                <div className="row">
                                    <div className="col-md-6 pe-0">
                                        <h4>Navin Jhajharia</h4>
                                        <h5>CEO</h5>
                                    </div>
                                    <div className="col-md-6 text-end ps-0">
                                        <h6>@navin.jhajharia</h6>
                                        <img src={white_arrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>


            </div>
        </div>


    </>
  );
};

export default AboutComponent;
