import React from "react";
import Elegance from "./Elegance";
import diningSetup from "../assets/images/dining-setup.webp";
import dining from "../assets/images/dining.webp";

const AboutHeader = () => {
  return (
    <section className="px-4 pt-4 md:px-10 flex flex-col gap-6">
      <h1 className="hidden md:block uppercase font-normal text-9xl">about</h1>
      <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 md:aspect-4">
        <div className="w-full md:w-1/5 md:h-full flex md:flex-col items-center md:items-start justify-between md:gap-6">
          <h1 className="md:uppercase font-bold md:text-9xl flex md:flex-col gap-3">
            <span className="md:hidden">about</span>
            <span>us</span>
          </h1>
          <p className="md:text-left text-right">
            Luxurious Interior and
            <br className="md:hidden" />
            Industrial Design
          </p>
          <div className="hidden md:block">
            <Elegance />
          </div>
        </div>

        <div className="w-full md:w-1/2 md:h-full aspect-4/3 md:aspect-21/9 image-container flex flex-col gap-6 relative">
          <div className="image w-full h-full aspect-4/3 md:aspect-21/9 hover-effect-cont">
            <img
              src={dining}
              alt="Brittocharrete dining room"
              className="w-full h-full hidden aspect-21/9 md:block"
            />
            <img
              src={dining}
              alt="Brittocharrete dining room"
              className="w-full h-full aspect-4/3 md:hidden philosophy-image-clipped"
            />
          </div>

          <div
            className="image absolute aspect-1 md:hidden max-h-48"
            style={{ top: "77%", left: "52%", width: "48%" }}
          >
            <img
              src={diningSetup}
              alt="Brittocharrete dining room"
              className=""
            />
          </div>
        </div>

        <div className="md:hidden w-1/2 mt-6">
          <Elegance />
        </div>

        <div className="w-full md:w-1/3 md:h-full flex flex-col md:justify-between gap-2 items-center md:items-start pt-8 md:pt-0">
          <div className="image-container w-full hidden md:flex">
            <div className="image w-full aspect-21/9 hover-effect-cont">
              <img
                src={diningSetup}
                alt="Brittocharrete dining room"
                className="w-full h-full"
              />
            </div>
          </div>

          <h2 className="font-bold">our philosophy</h2>
          <p className="text-center md:text-left">
            At Britto Charette, we believe in creating luxurious, personalized
            environments that reflect our clients' tastes and lifestyles.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHeader;
