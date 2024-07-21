import React from "react";
import { IconButton } from "../pages/Elements";

const Project = ({ title, description, category, images }) => {
  return (
    <div className="project w-full md:w-4/5 flex flex-col md:flex-row-reverse md:items-center gap-2 md:gap-6 px-4 py-4 md:py-8 md:border-b-2 border-slate">
      <div className="image-container w-full md:w-3/5 relative">
        <div className="image w-full rounder-clip">
          <img
            src={images[0]}
            alt={`BrittoCharette ${title} ${category}`}
            className="project-image-clipped aspect-16/9"
          />
        </div>
        <div className="absolute" style={{ top: "82%", left: "90%" }}>
          <IconButton />
        </div>
      </div>

      <div className="title w-full md:w-2/5 flex flex-col gap-2 md:gap-4 justify-center md:pr-28 relative">
        <h2 className="md:text-4xl font-extrabold">{title}</h2>
        <p className="w-3/5 md:w-full">{description}</p>
        <div className="image w-3/10 md:w-full absolute right-4 md:static">
          <img
            src={images[1]}
            alt={`BrittoCharette ${title} ${category}`}
            className="w-full aspect-16/9"
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
