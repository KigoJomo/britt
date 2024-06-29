import React from "react";
import ConsultWheelBlack from "../assets/images/consult-wheel-black.webp";
import ConsultWheelWhite from "../assets/images/consult-wheel-white.webp";

const SocialLink = (props) => {
  return (
    <a
      target="__blank"
      href={`https://${props.platform}.com`}
      className={`social-tags ${props.platform}`}
    >
      {props.platform}
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className="social-links">
      <div className="links-container">
        <img
          className="wheel-black"
          src={ConsultWheelBlack}
          alt="BrittoCharette"
        />
        <img
          className="wheel-black-2"
          src={ConsultWheelBlack}
          alt="BrittoCharette"
        />
        <img
          className="wheel-white"
          src={ConsultWheelWhite}
          alt="BrittoCharette"
        />
        <SocialLink platform="linkedIn" />
        <SocialLink platform="vimeo" />
        <SocialLink platform="pinterest" />
        <SocialLink platform="twitter" />
        <SocialLink platform="facebook" />
        <SocialLink platform="instagram" />
        <SocialLink platform="youtube" />
      </div>
    </div>
  );
};

const Info = () => {
  return (
    <div className="info">
      <p>We invite you to connect to our team for more information.</p>
      <p>Let's Stay Connected</p>
      <p>
        © 2010 All Rights <br /> Reserved
      </p>
    </div>
  );
};

const ContactBanner = () => {
  return (
    <div className="contact-banner">
      <h1>contact</h1>
      <span></span>
      <h1>us</h1>
    </div>
  );
};

const Footer = () => {
  return (
    <footer>
      <SocialLinks />
      <Info />
      <ContactBanner />
    </footer>
  );
};

export default Footer;
