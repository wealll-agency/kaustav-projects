import React from "react";
import { Link } from "react-router-dom";
import article1 from "../../assets/images/article1.jpg";
import article2 from "../../assets/images/article2.jpg";
import article3 from "../../assets/images/article3.jpg";
import usersmall from "../../assets/images/user_small.png";
import calendarsmall from "../../assets/images/calendar_small.png";
import user_icon from "../../assets/images/user_icon.png";
import calendar_icon from "../../assets/images/calendar_icon.png";
import openbook from "../../assets/images/open-book.png";

const Articles = () => {
  return (
    <>
      <div className="breadcrumb_section text-center">
        <div className="container">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Articles
            </li>
          </ol>
        </div>
      </div>

      <div className="articles_section">
        <div className="container">
          <ul className="financial_year">
            <li className="active">2024-2025</li>
            <li>2023-2024</li>
          </ul>

          <div className="single_article_section">
            <div className="row g-0">
              <div className="col-md-4">
                <div className="single_article_image">
                  <img src={article1} alt="" />
                  <span class="small_badge">Investment Tips</span>
                </div>
              </div>
              <div className="col-md-8">
                <div className="single_artcle_content">
                  <h3>5 Investment Mistakes to Avoid in 2025</h3>
                  <ul className="meta_conent">
                    <li>
                      <img src={user_icon} alt="" /> Navin Jhajharia
                    </li>
                    <li>
                      <img src={calendar_icon} alt="" /> January 01, 2025
                    </li>
                    <li>
                      <img src={openbook} alt="" /> 15 mins read{" "}
                    </li>
                  </ul>
                  <p>
                    As 2025 unfolds, investors should stay cautious and avoid
                    common mistakes that can derail financial growth. One major
                    error is ignoring inflation, as rising prices can silently
                    reduce the real value of returns if funds remain in
                    low-yield or idle assets. Another pitfall is chasing market
                    hype whether it’s trending stocks, cryptocurrencies, or
                    speculative sectors without understanding the fundamentals,
                    which often leads to impulsive losses.
                  </p>
                  <Link to="/article-details">Read More <i className="fa-solid fa-chevron-right"></i></Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row pt-1">
            <div className="col-lg-4">
              <div className="single_article">
                <div className="aricle_img">
                  <img src={article1} alt="" />
                  <span className="small_badge">Investment Tips</span>
                </div>
                <div className="article_content">
                  <div className="article_meta">
                    <h6>
                      <img src={usersmall} alt="" /> Navin Jhajharia
                    </h6>
                    <h6>
                      <img src={calendarsmall} alt="" />
                      January 01, 2025
                    </h6>
                  </div>
                  <div className="main_content text-center">
                    <h4>5 Investment Mistakes to Avoid in 2024</h4>
                    <p>
                      Learn about common investment pitfalls and how to navigate
                      market volatility with smart financial decisions.
                    </p>
                    <a href="#">
                      Read More <i className="fa-solid fa-chevron-right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single_article">
                <div className="aricle_img">
                  <img src={article2} alt="" />
                  <span className="small_badge">Tax Planning</span>
                </div>
                <div className="article_content">
                  <div className="article_meta">
                    <h6>
                      <img src={usersmall} alt="" /> Priya Sharma
                    </h6>
                    <h6>
                      <img src={calendarsmall} alt="" />
                      March 12, 2025
                    </h6>
                  </div>
                  <div className="main_content text-center">
                    <h4>Tax Planning Strategies for FY 2024-25</h4>
                    <p>
                      Maximize your tax savings with effective planning
                      strategies and understand the latest changes in tax
                      regulations.
                    </p>
                    <a href="#">
                      Read More <i className="fa-solid fa-chevron-right"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single_article">
                <div className="aricle_img">
                  <img src={article3} alt="" />
                  <span className="small_badge">Financial Planning</span>
                </div>
                <div className="article_content">
                  <div className="article_meta">
                    <h6>
                      <img src={usersmall} alt="" /> Navin Jhajharia
                    </h6>
                    <h6>
                      <img src={calendarsmall} alt="" />
                      January 01, 2025
                    </h6>
                  </div>
                  <div className="main_content text-center">
                    <h4>Building Emergency Fund: Your Financial Safety Net</h4>
                    <p>
                      Discover why emergency funds are crucial and learn
                      practical steps to build one that protects your family's
                      future.
                    </p>
                    <a href="#">
                      Read More <i className="fa-solid fa-chevron-right"></i>{" "}
                    </a>
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

export default Articles;
