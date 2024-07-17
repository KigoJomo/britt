import React from "react";
import {
  ScrollAnimationWrapper,
  fadeInVariants,
} from "../components/ScrollAnimationWrapper";
import AboutHeader from "../components/AboutHeader";
import AboutPrincipals from "../components/AboutPrincipals";
import AboutServices from "../components/AboutServices";

const About = () => {
  return (
    <>
      <ScrollAnimationWrapper variants={fadeInVariants}>
        <AboutHeader />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper variants={fadeInVariants}>
        <AboutPrincipals />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper variants={fadeInVariants}>
        <AboutServices />
      </ScrollAnimationWrapper>
    </>
  );
};

export default About;
