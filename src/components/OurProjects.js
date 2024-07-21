import React, { useEffect, useState } from "react";
import Project from "./Project";
import FilterButton from "./FilterButton";
import projectsData from "../data/projects.json";

const OurProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section className="w-full flex flex-col items-center gap-6">
      <h1 className="text-2xl text-center md:text-left md:text-5xl">
        our projects
      </h1>
      <div className="filter w-full flex items-center justify-center gap-2 md:gap-6 flex-wrap">
        <FilterButton text="All" active />
        <FilterButton text="family room" />
        <FilterButton text="living room" />
        <FilterButton text="bedroom" />
        <FilterButton text="kitchen" />
        <FilterButton text="bathroom" />
      </div>

      <div className="projects-container w-full flex flex-col items-center gap-6 md:gap-8">
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            description={project.description}
            category={project.category}
            images={project.images}
          />
        ))}
      </div>
    </section>
  );
};

export default OurProjects;
