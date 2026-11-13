import React from "react";
import { Link } from "react-router-dom";
import login_bg from '../../assets/images/login_bg.jpg';
const Login = () => {
  return (
    <>
      <div className="container-xxl cust_padding">
        <div className="login-wrapper row g-0">
          <div className="col-md-6 left-box">
            <a href="#" className="back-btn">&lt; Go Back</a>

            <div className="login-title">Login / Sign Up</div>

            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter Login ID"
              />
            </div>

            <div className="mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
              />
            </div>

            <a href="#" className="forgot-link">
              Forgot Password ?
            </a>

            <div className="form-check mt-4">
              <input className="form-check-input" type="checkbox" value="" id="termsCheck"/>
              <label className="form-check-label" for="termsCheck">
                I have read and accepted the
                <a href="#" className="terms-link">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button className="login-btn">LOGIN</button>

            <div className="text-center mt-4">
              Or <br />
              <br />
              <span>
              Don’t have an account?{" "}
              <a href="#" className="open-acc-link">
                Open Account
              </a>
              </span>
            </div>
          </div>

          <div className="col-md-6 right-box">
            <div
              id="carouselExampleIndicators"
              className="carousel slide h-100"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner h-100">
                <div className="carousel-item active">
                  <img src={login_bg}  alt="" />
                </div>

                <div className="carousel-item">
                  <img src={login_bg}  alt="" />
                </div>

                <div className="carousel-item">
                  <img src={login_bg} alt="" />
                </div>
              </div>

              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="2"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
