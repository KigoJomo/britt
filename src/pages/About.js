import React from "react";
import {
  ScrollAnimationWrapper,
  fadeInVariants,
} from "../components/ScrollAnimationWrapper";
import AboutHeader from "../components/AboutHeader";
import AboutPrincipals from "../components/AboutPrincipals";

const About = () => {
  return (
    <>
      <ScrollAnimationWrapper variants={fadeInVariants}>
        <AboutHeader />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper variants={fadeInVariants}>
        <AboutPrincipals />
      </ScrollAnimationWrapper>
    </>
  );
};

export default About;
