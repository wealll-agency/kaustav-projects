import React, { useState } from "react";
import { Link } from "react-router-dom";
import investment_icon1 from '../../assets/images/investment_icon1.png';
import investment_icon2 from '../../assets/images/investment_icon2.png';
import investment_icon3 from '../../assets/images/investment_icon3.png';
import arrow_left from '../../assets/images/arrow_left.png';
const SipCalculator = () => {
  const [amount, setAmount] = useState(5000);
  const [rate, setRate] = useState(12);
  const [years, setYears] = useState(10);

  return (
    <>
      <div className="breadcrumb_section text-center">
        <div className="container">
          <ol className="breadcrumb justify-content-center">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item">
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

      <div className="tool_details">
        <div className="container-fluid p-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-4">
              <div className="tool_left_sidebar">
                <h4>financial tools</h4>
                <ul>
                  <li>
                    <a href="#">Type</a>
                  </li>
                  <li className="active">
                    <a href="#">SIP Calculator</a>
                  </li>
                  <li>
                    <a href="#">Type</a>
                  </li>
                  <li>
                    <a href="#">Type</a>
                  </li>
                  <li>
                    <a href="#">Type</a>
                  </li>
                  <li>
                    <a href="#">Type</a>
                  </li>
                  <li>
                    <a href="#">Type</a>
                  </li>
                  <li>
                    <a href="#">Type</a>
                  </li>
                  <li>
                    <a href="#">Type</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="about_tool">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="investment-card">
                      <h3 className="investment-title">Investment Details</h3>

                      {/* Monthly Investment */}
                      <div className="control-row">
                        <div className="control-label">
                          Monthly Investment Amount
                        </div>
                        <div className="text-end">
                          <div className="value-pill">
                            <span className="prefix">₹</span>
                            <span>{amount.toLocaleString()}</span>
                          </div>
                        </div>
                      </div>
                      <div className="slider-row">
                        <input
                          type="range"
                          min="0"
                          max="50000"
                          value={amount}
                          onChange={(e) =>
                            setAmount(parseInt(e.target.value || 0, 10))
                          }
                          className="fill"
                          style={{ ["--pos"]: (amount / 50000) * 100 + "%" }}
                        />
                      </div>

                      {/* Expected Return Rate */}
                      <div className="control-row">
                        <div className="control-label">
                          Expected Return Rate (%)
                        </div>
                        <div className="text-end">
                          <div className="value-pill">{rate}</div>
                        </div>
                      </div>
                      <div className="slider-row">
                        <input
                          type="range"
                          min="0"
                          max="30"
                          value={rate}
                          onChange={(e) =>
                            setRate(parseInt(e.target.value || 0, 10))
                          }
                          className="fill"
                          style={{ ["--pos"]: (rate / 30) * 100 + "%" }}
                        />
                      </div>

                      {/* Investment Period */}
                      <div className="control-row">
                        <div className="control-label">
                          Investment Period (Years)
                        </div>
                        <div className="text-end">
                          <div className="value-pill">
                            <span className="prefix">Y</span> {years}
                          </div>
                        </div>
                      </div>
                      <div className="slider-row">
                        <input
                          type="range"
                          min="1"
                          max="40"
                          value={years}
                          onChange={(e) =>
                            setYears(parseInt(e.target.value || 1, 10))
                          }
                          className="fill"
                          style={{ ["--pos"]: (years / 40) * 100 + "%" }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="investment_result">
                      <h3 className="text-center">Investment Results</h3>

                      <div className="inner_box">
                        <div className="inner_box_left">
                          <h4><img src={investment_icon1} alt="" /> Total Investment</h4>
                        </div>
                        <div className="inner_box_right">
                          <h5>₹ 6,00,000</h5>
                        </div>
                      </div>

                      <div className="inner_box">
                        <div className="inner_box_left">
                          <h4><img src={investment_icon2} alt="" /> Expected Returns</h4>
                        </div>
                        <div className="inner_box_right">
                          <h5>₹ 5,61,695</h5>
                        </div>
                      </div>

                      <div className="inner_box">
                        <div className="inner_box_left">
                          <h4><img src={investment_icon3} alt="" /> Maturity Value</h4>
                        </div>
                        <div className="inner_box_right">
                          <h5>₹ 11,61,695</h5>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
              <div className="why_choose_tool">
                <h5>Why Choose SIP?</h5>
                <ul>
                  <li><img src={arrow_left} alt="" /> Rupee cost averaging reduces market volatility impact.</li>
                  <li><img src={arrow_left} alt="" /> Power of compounding grows your money exponentially</li>
                  <li><img src={arrow_left} alt="" /> Disciplined investing builds long-term wealth.</li>
                  <li><img src={arrow_left} alt="" /> Flexible amount and tenure options </li>
                </ul>
                <a href="#">Choose SIP Today</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SipCalculator;
