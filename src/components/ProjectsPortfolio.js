import React from "react";
import PortfolioImage from "./PortfolioImage";

const ProjectsPortfolio = () => {
  return (
    <section
      id="portfolio"
      className="w-full md:aspect-16/9 flex justify-center md:py-16 md:px-12"
    >
      <div className="w-full md:aspect-16/9 flex flex-col md:flex-wrap box-border">
        <PortfolioImage aspect="16/9" text="1" width="3/10" height="3/5" />
        <PortfolioImage aspect="16/9" text="2" width="3/10" height="2/5" />
        <PortfolioImage aspect="16/9" text="3" width="3/10" height="full" />
        <PortfolioImage aspect="16/9" text="4" width="2/5" height="7/10" />
        <PortfolioImage aspect="16/9" text="5" width="2/5" height="3/10" />
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
