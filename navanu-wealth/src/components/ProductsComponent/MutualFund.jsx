import React from "react";
import { Link } from "react-router-dom";
import Mutual_Funds from "../../assets/images/Mutual-Funds.jpg";

const MutualFund = () => {
  return (
    <>
      <div className="breadcrumb_section text-center">
        <div className="container">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li class="breadcrumb-item">
              <a href="/" data-discover="true">
                Products
              </a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Mutual Funds
            </li>
          </ol>
        </div>
      </div>

      <div className="product_details">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">
              <div className="left_sidebar product_sidebar">
                <h4>Products List</h4>
                <ul>
                  <li>
                    <a href="#">Equity</a>
                  </li>
                  <li className="active">
                    <a href="#">Mutual Funds</a>
                  </li>
                  <li>
                    <a href="#">Insurance</a>
                  </li>
                  <li>
                    <a href="#">Fixed Deposits (FD)</a>
                  </li>
                  <li>
                    <a href="#">Bonds</a>
                  </li>
                  <li>
                    <a href="#">Estate Planning</a>
                  </li>
                  <li>
                    <a href="#">AIF</a>
                  </li>
                  <li>
                    <a href="#">Structured Products</a>
                  </li>
                  <li>
                    <a href="#">Pre-IPO</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="product_info">
                <div className="product_img">
                  <img src={Mutual_Funds} alt="" />
                </div>
                <p className="mb-0">
                  <strong>Mutual funds</strong> are the keys to simplified
                  wealth building. These professionally managed investment funds
                  open doors to diverse investment opportunities for everyone.
                </p>
                <p className="mb-0">
                  Mutual funds offer a hassle-free way to invest. Skilled fund
                  managers pool money from various investors to create
                  diversified portfolios of stocks, bonds, and other assets.
                </p>
                <h5>Types of Mutual Funds</h5>
                <ul>
                  <li>
                    Equity Funds: Aim for higher returns with stock investments.
                  </li>
                  <li>
                    Debt Funds: Prioritize stability through bonds and
                    fixed-income securities.
                  </li>
                  <li>
                    Hybrid Funds: Balance risk and return with mixed assets.
                  </li>
                  <li>
                    Index Funds: Mirror market indices for broad exposure.
                  </li>
                </ul>
                <h5>Key Features:</h5>
                <ul>
                  <li>
                    Professional Management: Expert fund managers handle
                    investments.
                  </li>
                  <li>
                    Diversification: Reduce risk by investing in various assets.
                  </li>
                  <li>Liquidity: Easily buy and sell fund units as needed.</li>
                  <li>Transparency: Stay updated on the fund's performance.</li>
                  <li>
                    SIP Option: Build wealth systematically through regular
                    investments.
                  </li>
                </ul>
                <h5>
                  Mutual funds are the ideal choice for growing your wealth
                  without complications. Start your investment journey today for
                  a prosperous financial future.
                </h5>
                <div class="center_btn pt-2">
                  <a href="#">
                    Get In Touch <i class="fa-solid fa-angles-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MutualFund;
