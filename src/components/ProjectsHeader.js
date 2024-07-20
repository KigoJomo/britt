import React from "react";
import { IconTextButton } from "../pages/Elements";
import bright1 from "../assets/images/bright1.webp";
import bright2 from "../assets/images/bright2.webp";
import AnimatedSlider from "./AnimatedSlider";

const ProjectsHeader = () => {
  return (
    <section className="w-full min-h-full md:h-full px-4 pt-4 pb-20 md:p-12 md:pb-24 flex flex-col md:flex-row gap-8 md:gap-12 items-center relative">
      <div className="desc w-full md:w-2/5 md:h-full flex flex-col items-center md:items-start gap-8 md:justify-around">
        <h1 className="text-center md:text-left md:text-7xl order-1">
          our <br className="hidden md:block" /> signature{" "}
          <br className="hidden md:block" /> projects
        </h1>

        <p className="text-center md:text-left order-3 md:order-2">
          Welcome to Britto Charette's Projects page, where we showcase our
          finest interior design endeavors. Our portfolio spans a diverse range
          of residential and commercial spaces, each crafted with meticulous
          attention to detail and a passion for innovation.
        </p>

        <div className="image w-full md:w-3/5 order-2 md:order-3 items-center gap-0 rounded-3xl overflow-hidden hover-effect-cont">
          <img
            src={bright1}
            alt="BrittoCharette interior design"
            className="aspect-3 tripple-clip"
          />
        </div>
      </div>

      <div className="image-container w-full md:w-3/5 flex flex-col items-center relative">
        <div className="image w-full md:w-4/5">
            <img
              src={bright2}
              alt="BrittoCharette interior design"
              className="w-full aspect-4/3 projects-header-clipped"
            />
        </div>
        <div className="absolute" style={{top: "92%"}}>
          <IconTextButton to="#portfolio" text="discover more" />
        </div>
      </div>
      <AnimatedSlider/>
    </section>
  );
};

export default ProjectsHeader;
