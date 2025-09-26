import React from "react";
import { FaInstagram, FaGithub, FaPhone } from "react-icons/fa";
import { CiFacebook, CiLinkedin } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";

function Contact() {
  return (
    <>
      <div className="container contact">
        <h1>CONATAC ME</h1>
        <div className="contact-icons" data-aos="zoom-in-up" data-aos-duration="1000">
          <a href="https://www.instagram.com/" target="_blank" className="items">
            <FaInstagram className="icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="items">
            <CiFacebook className="icon" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank" className="items">
            <CiLinkedin className="icon" />
          </a>
          <a href="https://x.com/home" target="_blank" className="items">
            <FaXTwitter className="icon" />
          </a>
          <a href="https://github.com/ANIL9012" target="_blank" className="items">
            <FaGithub className="icon" />
          </a>
          <a href="mailto:9012kumaranil@gmail.com" target="_blank" className="items">
            <CgMail className="icon" />
          </a>
          <a href="tel:+9411894517" target="_blank" className="items">
            <FaPhone className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Contact;
