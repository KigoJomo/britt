import React from "react";
import { ScrollAnimationWrapper, fadeInVariants } from "../components/ScrollAnimationWrapper";
import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsPortfolio from "../components/ProjectsPortfolio";

const Projects = () => {
  return (
    <>
      <ScrollAnimationWrapper variants={fadeInVariants}>
        <ProjectsHeader />
      </ScrollAnimationWrapper>

      {/* slider goes here */}

      <ScrollAnimationWrapper variants={fadeInVariants}>
        <ProjectsPortfolio />
      </ScrollAnimationWrapper>
    </>
  );
};

export default Projects;
