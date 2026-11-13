import React from "react";
import { Link } from "react-router-dom";
import save_icon from "../../assets/images/save_icon.png";
import share_icon from "../../assets/images/share_icon.png";
import article1 from "../../assets/images/article1.jpg";
import article2 from "../../assets/images/article2.jpg";
import article3 from "../../assets/images/article3.jpg";
import usersmall from "../../assets/images/user_small.png";
import calendarsmall from "../../assets/images/calendar_small.png";
import singleArticlebg from "../../assets/images/single_article.png"; 


const ArticleDetails = () => {
  const bgStyle = {
    backgroundImage: `url(${singleArticlebg})`,
  };

  return (
    <>
      <div className="breadcrumb_section text-center">
        <div className="container">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
              <Link to="/articles">Articles</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              5 Investment Mistakes to Avoid in 2025
            </li>
          </ol>
        </div>
      </div>

      <div className="article_banner" style={bgStyle}>
        <div className="container">
          <Link to="/articles"><i className="fa-solid fa-chevron-left"></i> Go Back</Link>
        </div>
      </div>

      <div className="article_details">
        <div className="container">
          <div className="heading">
            <h2>5 Investment Mistakes to Avoid in 2025</h2>
            <span>by Navin Jhajharia</span>
          </div>
          <p>
            Investing in 2025 offers exciting opportunities, but it also demands
            careful planning and discipline. Many investors make avoidable
            mistakes that can derail their financial growth. Here are five key
            mistakes to watch out for this year:
          </p>
          <p>
            1. Following Market Hype Without Research Social media trends and
            influencer advice can make certain stocks or assets look
            irresistible. However, investing without understanding the
            fundamentals often leads to losses when the hype fades. Always do
            your own research before committing your money.
          </p>
          <p>
            2. Ignoring Portfolio Diversification Putting all your money into
            one asset class—like stocks, crypto, or real estate—can expose you
            to high risk. Diversifying across sectors, geographies, and
            investment types helps reduce volatility and protect your wealth
            during market downturns.
          </p>
          <p>
            3. Trying to Time the Market Many investors attempt to buy low and
            sell high, but even experts struggle to predict exact market
            movements. Instead of chasing perfect timing, focus on
            consistency—invest regularly and stay patient for long-term growth.
          </p>
          <p>
            4. Neglecting Long-Term Financial Goals Chasing quick profits can
            distract from building a strong financial foundation. Align your
            investments with your long-term objectives—such as retirement,
            buying a home, or securing your child’s education—to ensure your
            money works toward meaningful outcomes.
          </p>
          <p>
            5. Overlooking Emergency Funds and Liquidity Without an emergency
            fund, unexpected events may force you to sell investments
            prematurely, often at a loss. Keep at least 3–6 months’ worth of
            expenses in easily accessible savings to safeguard your investment
            journey.
          </p>
          <p>
            By avoiding these common mistakes and focusing on steady, informed
            investing, you can make 2025 a year of smarter financial growth and
            stability.
          </p>
          <div className="article_save_share">
            <ul>
              <li>
                <img src={save_icon} alt="" /> <a href="#">Save</a>
              </li>
              <li>
                <img src={share_icon} alt="" />
                <a href="#"> Share</a>
              </li>
            </ul>
          </div>
          <div className="related_artilcles">
            <h3 className="text-center">READ SIMILAR ARTICLES</h3>
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
                        Learn about common investment pitfalls and how to
                        navigate market volatility with smart financial
                        decisions.
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
                      <h4>
                        Building Emergency Fund: Your Financial Safety Net
                      </h4>
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
      </div>
    </>
  );
};

export default ArticleDetails;
