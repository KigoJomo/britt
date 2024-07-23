import React, { useEffect, useState, useRef } from "react";
import {
  ScrollAnimationWrapper,
  fadeInVariants,
} from "../components/ScrollAnimationWrapper";
import Project from "./Project";
import FilterButton from "./FilterButton";
import projectsData from "../data/projects.json";

const PageButton = ({ number, pageInView, onClick }) => {
  return (
    <button
      className={`flex items-center justify-center w-8 aspect-1 text-xs md:text-sm rounded-full hover:border border-gray ${
        pageInView ? "bg-black text-white" : "bg-white text-black"
      }`}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
};

const PageNavigation = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1);

  return (
    <ScrollAnimationWrapper variants={fadeInVariants}>
      <div className="w-full flex items-center justify-center gap-4">
        <button
          className="md:text-2xl text-gray hover:text-black mr-4"
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
        >
          &#x276E;
        </button>
        {pageNumbers.map((number) => (
          <PageButton
            key={number}
            number={number}
            pageInView={number === currentPage}
            onClick={onPageChange}
          />
        ))}
        <button
          className="md:text-2xl text-gray hover:text-black ml-4"
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
        >
          &#x276F;
        </button>
      </div>
    </ScrollAnimationWrapper>
  );
};

const OurProjects = () => {
  const [projects, setProjects] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [projectsPerPage] = useState(5);
  const [currentFilter, setCurrentFilter] = useState("All");

  const sectionRef = useRef(null);

  useEffect(() => {
    let filteredProjects = projectsData;

    if (currentFilter !== "All") {
      filteredProjects = projectsData.filter(
        (project) => project.category === currentFilter
      );
    }

    const indexOfLastProject = currentPage * projectsPerPage;
    const indexOfFirstProject = indexOfLastProject - projectsPerPage;
    const currentProjects = filteredProjects.slice(
      indexOfFirstProject,
      indexOfLastProject
    );

    setProjects(currentProjects);
  }, [currentPage, currentFilter, projectsPerPage]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFilterChange = (filter) => {
    setCurrentFilter(filter);
    setCurrentPage(1); // Reset to first page on filter change
  };

  const totalPages = Math.ceil(
    (currentFilter === "All"
      ? projectsData.length
      : projectsData.filter((project) => project.category === currentFilter)
          .length) / projectsPerPage
  );

  return (
    <section className="w-full flex flex-col items-center gap-6">
      <ScrollAnimationWrapper variants={fadeInVariants}>
        <div
          className="w-full flex flex-col items-center gap-4 md:gap-6"
          ref={sectionRef}
        >
          <h1 className="text-2xl text-center md:text-5xl">Our Projects</h1>
          <div className="filter w-full flex items-center justify-center gap-2 md:gap-6 flex-wrap">
            {[
              "All",
              "family-room",
              "living-room",
              "bedroom",
              "kitchen",
              "bathroom",
            ].map((category) => (
              <FilterButton
                key={category}
                text={category}
                active={currentFilter === category}
                onClick={() => {
                  handleFilterChange(category);
                }}
              />
            ))}
          </div>
        </div>
      </ScrollAnimationWrapper>

      <div className="projects-container w-full flex flex-col items-center gap-6 md:gap-8 md:px-24">
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
      <PageNavigation
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default OurProjects;
