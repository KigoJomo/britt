import React from "react";
import {
  ScrollAnimationWrapper,
  fadeInVariants,
} from "../components/ScrollAnimationWrapper";
import ProjectsHeader from "../components/ProjectsHeader";
import ProjectsPortfolio from "../components/ProjectsPortfolio";
import OurProjects from "../components/OurProjects";

const Projects = () => {
  return (
    <>
      <ScrollAnimationWrapper variants={fadeInVariants}>
        <ProjectsHeader />
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper variants={fadeInVariants}>
        <ProjectsPortfolio />
      </ScrollAnimationWrapper>

      <OurProjects />
    </>
  );
};

export default Projects;
