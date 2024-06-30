import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ConsultWheelBlack from "../assets/images/consult-wheel-black.webp";
import ConsultWheelWhite from "../assets/images/consult-wheel-white.webp";

const fadeInVariants = {
  hidden: { opacity: 0, bottom: "120%" },
  vimeo: { opacity: 1, bottom: "77%", transition: { duration: 0.9 } },
  pinterest: { opacity: 1, bottom: "8.5%", transition: { duration: 0.6 } },
  twitter: { opacity: 1, bottom: "3.25%", transition: { duration: 0.7 } },
  facebook: { opacity: 1, bottom: "30%", transition: { duration: 0.8 } },
  instagram: { opacity: 1, bottom: "18%", transition: { duration: 0.7 } },
  youtube: { opacity: 1, bottom: "0%", transition: { duration: 0.5 } },
  linkedIn: { opacity: 1, bottom: "49%", transition: { duration: 0.8 } },
};

const ScrollAnimationWrapper = ({ children, variantKey, username }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start(variantKey);
    }
  }, [controls, inView, variantKey]);

  return (
    <motion.a
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={fadeInVariants}
      className={`social-tags ${variantKey}`}
      href={`https://${variantKey}.com${username? `/${username}/` : ''}`}
      target="__blank"
    >
      {children}
    </motion.a>
  );
};

const SocialLink = (props) => {
  return (
    <ScrollAnimationWrapper variantKey={props.platform} username={props.username}>
      {props.platform}
    </ScrollAnimationWrapper>
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
        <SocialLink platform="linkedIn" username="in/kigo-jomo"/>
        <SocialLink platform="vimeo" />
        <SocialLink platform="pinterest" username="kigojomo" />
        <SocialLink platform="twitter" />
        <SocialLink platform="facebook" />
        <SocialLink platform="instagram" username="user_6.8.4" />
        <SocialLink platform="youtube" username="@kigojomo" />
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
