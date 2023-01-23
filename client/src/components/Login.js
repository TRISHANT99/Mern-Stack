import React from "react";
import { Link } from "react-router-dom";
import loginimg from "../img/loginImg.jpg";
import "../css/login.css";

export default function Login() {
  return (
    <>
      <section className="sign-in">
        <div className="container mt-5">
          <div className="signin-content">
            <div className="signup-image">
              <figure>
                <img src={loginimg} className="loginimg" alt="loginImg" />
              </figure>
              <Link to="/signup" className="signup-image-link">
                Sign Up [Create an Account]
              </Link>
            </div>
            <div className="signin-form">
              <h2 className="form-title">Sign In</h2>
              <form className="register-form" id="register-form">
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="fa-solid fa-paper-plane"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="off"
                    placeholder="Enter Your Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <i className="fa-solid fa-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    autoComplete="off"
                    placeholder="Enter Your Password"
                  />
                </div>

                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signin"
                    id="signin"
                    className="form-submit"
                    value="Log In"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
