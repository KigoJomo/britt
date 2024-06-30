import React, { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import ConsultWheelBlack from "../assets/images/consult-wheel-black.webp";
import ConsultWheelWhite from "../assets/images/consult-wheel-white.webp";

const ScrollAnimationWrapper = ({ children }) => {
  const ref = useRef(null);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  // Assign the inViewRef to the element
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    if (inView && ref.current) {
      console.log("Footer in view");
      ref.current.classList.remove("hidden"); 
    }
  }, [inView]);

  return (
    <div ref={setRefs} className="hidden links-container">
      {children}
    </div>
  );
};

const SocialLink = (props) => {
  return (
    <a
      href={`https://${props.platform}.com${
        props.username ? `/${props.username}/` : ""
      }`}
      className={`social-tags ${props.platform}`}
      target="__blank"
      rel="noopener noreferrer"
    >
      {props.platform}
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div className="social-links">
      <ScrollAnimationWrapper>
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
        <SocialLink platform="linkedIn" username="in/kigo-jomo" />
        <SocialLink platform="vimeo" />
        <SocialLink platform="pinterest" username="kigojomo" />
        <SocialLink platform="twitter" />
        <SocialLink platform="facebook" />
        <SocialLink platform="instagram" username="user_6.8.4" />
        <SocialLink platform="youtube" username="@kigojomo" />
      </ScrollAnimationWrapper>
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