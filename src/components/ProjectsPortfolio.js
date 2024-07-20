import React from "react";
import PortfolioImage from "./PortfolioImage";

import kitchen from "../assets/images/dining-setup.webp";
import bedroom from "../assets/images/bedroom.webp";
import livingRoom from "../assets/images/living room.webp";
import familyRoom from "../assets/images/family-room.webp";

const ProjectsPortfolio = () => {
  return (
    <section id="portfolio" className="w-full md:h-90vh md:py-2 md:px-12">
      <div className="w-full h-full flex flex-col md:flex-wrap">
        <PortfolioImage
          image={kitchen}
          text="kitchen"
          width="md:w-3/10"
          height="md:h-3/5"
        />
        <PortfolioImage
          image={bedroom}
          text="bedroom"
          width="md:w-3/10"
          height="md:h-2/5"
        />
        <PortfolioImage
          image={livingRoom}
          text="living room"
          width="md:w-3/10"
          height="md:h-full"
        />
        <PortfolioImage
          image={familyRoom}
          text="familyRoom"
          width="md:w-2/5"
          height="md:h-7/10"
        />
        <div className="desc -order-1 md:order-10 w-full md:w-2/5 md:h-3/10 flex flex-col gap-2 md:justify-around p-4">
          <h1 className="text-2xl text-center md:text-left md:text-5xl">
            Interior Collections
          </h1>
          <p className="tracking-tighter text-center md:text-left">
            Discover our Modern Interiors collection, where sleek and
            contemporary designs redefine urban living with style and
            functionality
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
