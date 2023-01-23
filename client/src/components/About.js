import React from "react";
import logo from "../img/logo.jpg";
import "../css/about.css";

export default function About() {
  return (
    <>
      <div className="container aboutBox">
        <form method="">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img src={logo} alt="person" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>Trishant Verma</h5>
                <h6>Full Stack Web Developer</h6>
                <p className="profile-rating mt-3 mb-5">
                  Rankings : <span>1/10</span>
                </p>
                <ul className="nav nav-tabs">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item" role="tablist">
                    <a
                      className="nav-link active"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2 ">
              <input
                type="submit"
                className="profile-edit-btn btn btn-outline-danger"
                name="btnAddMore"
                value="Edit Profile"
              />
            </div>
          </div>
          <div className="row">
            {/* Left Side url  */}
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a
                  href="http://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
                <br />
                <a
                  href="http://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
                <br />
                <a
                  href="http://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
                <br />
                <a
                  href="http://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
                <br />
                <a
                  href="http://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
                <br />
                <a
                  href="http://www.youtube.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Youtube
                </a>
                <br />
              </div>
            </div>
            {/* right side data toogle  */}
            <div className="col-md-8 pl-5 about-info">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  area-labelledby="home-tab"
                >
                  <div className="row mt-3">
                    <div className="col-md-6">
                      <label>User ID</label>
                    </div>
                    <div className="col-md-6">
                      <p>234677546</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>Trishant</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>trishantverma22452@gmail.com</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>8979978979</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Profession</label>
                    </div>
                    <div className="col-md-6">
                      <p>Full Stack Web Developer</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
