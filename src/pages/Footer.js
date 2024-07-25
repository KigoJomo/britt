import React, { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ConsultWheelBlack from "../assets/images/consult-wheel-black.webp";
import ConsultWheelWhite from "../assets/images/consult-wheel-white.webp";
import star from "../assets/images/star-white.png";
import { Link } from "react-router-dom";

const ScrollAnimationWrapper = ({ children }) => {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Assuming md is 768px
  const [inViewRef, inView] = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  // Assign the inViewRef to the element
  const setRefs = (node) => {
    ref.current = node;
    inViewRef(node);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (inView && ref.current) {
      ref.current.classList.remove("Hidden");
      setTimeout(() => {
        ref.current.classList.add("landed");
      }, 2000);
    } else {
      ref.current.classList.add("Hidden");
      ref.current.classList.remove("landed");
    }
  }, [inView]);

  return (
    <div
      ref={setRefs}
      className={`Hidden ${
        isMobile ? "links-container" : "links-container-md"
      } w-3/4 relative`}
    >
      {children}
    </div>
  );
};

const SocialLink = ({ platform, username }) => {
  return (
    <a
      href={`https://${platform}.com${username ? `/${username}/` : ""}`}
      className={`social-tags ${platform} py-1 px-4 md:w-1/5 md:px-8 md:py-2`}
      target="__blank"
      rel="noopener noreferrer"
    >
      {platform}
    </a>
  );
};

const SocialLinks = () => {
  return (
    <div
      className="social-links bg-white flex flex-col items-center"
      style={{ height: "300px" }}
    >
      <ScrollAnimationWrapper>
        <img
          className="wheel-black md:h-4/5 h-1/3"
          src={ConsultWheelBlack}
          alt="BrittoCharette"
        />
        <img
          className="wheel-black-2 md:h-4/5 h-1/3"
          src={ConsultWheelBlack}
          alt="BrittoCharette"
        />
        <img
          className="wheel-white md:h-1/2 h-1/3"
          src={ConsultWheelWhite}
          alt="BrittoCharette"
        />
        <SocialLink platform="linkedIn" username="in/kigo-jomo" />
        <SocialLink platform="vimeo" />
        <SocialLink platform="pinterest" username="kigojomo" />
        <SocialLink platform="twitter" />
        <SocialLink platform="facebook" />
        <SocialLink platform="instagram" username="orb_designs_" />
        <SocialLink platform="youtube" username="@kigojomo" />
      </ScrollAnimationWrapper>
    </div>
  );
};

const Info = () => {
  return (
    <div className="info max-w-full w-full py-8 px-4 md:px-20 text-white flex md:flex-nowrap flex-wrap justify-between gap-y-10">
      <p className="w-1/2 flex-shrink-0 md:w-1/5">
        We invite you to connect to our team for more information.
      </p>
      <p className="w-1/2 flex-shrink-0 md:text-center text-right md:w-1/5">
        Let's Stay Connected
      </p>
      <p className="md:text-right text-center w-full flex-shrink-0 md:w-1/5">
        © 2010 All Rights <br className="hidden md:block" /> Reserved
      </p>
    </div>
  );
};

const ContactBanner = () => {
  return (
    <div className="contact-banner pb-4 md:py-8 px-2 flex justify-center items-center">
      <h1 className="text-white text-4xl md:text-9xl uppercase tracking-wider">
        contact
      </h1>
      <img src={star} alt="brittocharette" className="h-8 md:h-16" />
      <h1 className="text-white text-4xl md:text-9xl  uppercase tracking-wider">
        us
      </h1>
    </div>
  );
};

const Credits = () => {
  return (
    <div className="w-full flex items-center justify-center gap-2 p-4 pt-8 relative text-white">
      <div className="absolute w-1/2 border border-white top-0"></div>
      <p className="text-base font-light text-slate">©Built by</p>
      <Link
        target="__blank"
        rel="noopener noreferrer"
        to="https://instagram.com/orb_designs_/"
        className="font-medium"
        style={{ textDecoration: "underline" }}
      >
        ORB
      </Link>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full flex flex-col bg-gray relative mt-16">
      <SocialLinks />
      <Info />
      <ContactBanner />
      <Credits />
    </footer>
  );
};

export default Footer;
