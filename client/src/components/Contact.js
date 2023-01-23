import React from "react";
import "../css/contact.css";

export default function Contact() {
  return (
    <>
      <div className="containerOne">
        <div className="phone details">
          <i className="fa-solid fa-mobile-screen"></i> Phone
          <br />
          <span>+91 8979978979</span>
        </div>
        <div className="email details">
          <i className="fa-solid fa-square-envelope"></i>Email
          <br />
          <span>trishantverma22452@gmail.com</span>
        </div>
        <div className="adress details">
          <i className="fa-solid fa-map-location-dot"></i> Address
          <br />
          <span>Rohta, Near By Gwalior Road, Agra, 282009</span>
        </div>
      </div>

      <div className="bottomBox">
        <div className="boxOne">
          <h2>Get In Touch</h2>
          <form>
            <input type="text" placeholder="Enter Your Name"></input>
            <input type="text" placeholder="Enter Your Email"></input>
            <input type="text" placeholder="Enter Your Phone Number"></input>
            <br />
            <textarea
              style={{
                marginTop: "20px",
                marginLeft: "25px",
                backgroundColor: "whitesmoke",
              }}
              cols="5"
              rows="5"
              placeholder="Type Your Message"
            ></textarea>
            <br />
            <button
              className="btn btn-outline-danger"
              style={{
                marginLeft: "25px",
                marginTop: "10px",
                padding: "5px 40px",
              }}
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
