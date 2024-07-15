// src/pages/About.js

import React from "react";
import dining from "../assets/images/dining.webp";
import diningSetup from "../assets/images/dining-setup.webp";
import user from "../assets/images/user.webp";
import user2 from "../assets/images/user2.webp";
import { ScrollAnimationWrapper, fadeInVariants } from "./Home";

const Elegance = () => {
  return (
    <p>
      Modern Elegance: Designs featuring clean lines, neutral palettes, and
      high-quality materials.
    </p>
  );
};

const About = () => {
  return (
    <>
      <ScrollAnimationWrapper variants={fadeInVariants}>
        <section className="px-4 pt-4 md:px-10 flex flex-col gap-6">
          <h1 className="hidden md:block uppercase font-normal text-9xl">
            about
          </h1>
          <div className="w-full flex flex-col md:flex-row gap-2 md:gap-8 md:aspect-4">
            <div className="w-full md:w-1/5 md:h-full flex md:flex-col items-center md:items-start justify-between md:gap-6">
              <h1 className="md:uppercase font-bold md:text-9xl flex md:flex-col gap-3">
                <span className="md:hidden">about</span>
                <span>us</span>
              </h1>
              <p className="md:text-left text-right">
                Luxurious Interior and
                <br className="md:hidden" />
                <p> </p>
                Industrial Design
              </p>
              <div className="hidden md:block">
                <Elegance />
              </div>
            </div>

            <div className="w-full md:w-1/2 md:h-full aspect-4/3 md:aspect-21/9 image-container flex flex-col gap-6 relative">
              <div className="image w-full h-full aspect-4/3 md:aspect-21/9">
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
                <div className="image w-full aspect-21/9">
                  <img
                    src={diningSetup}
                    alt="Brittocharrete dining room"
                    className="w-full h-full"
                  />
                </div>
              </div>

              <h2 className="font-bold">our philosophy</h2>
              <p className="text-center md:text-left">
                At Britto Charette, we believe in creating luxurious,
                personalized environments that reflect our clients' tastes and
                lifestyles.
              </p>
            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>

      <ScrollAnimationWrapper variants={fadeInVariants}>
        <section className="w-full px-4 py-0 md:px-14 flex flex-col items-center gap-4 relative md:bg-white">
          <div className="desc flex flex-col gap-6 items-center md:absolute z-10 md:w-1/3 md:py-2 md:px-6 md:aspect-4/3 md:justify-between" style={{top: '15%'}}>
            <h1 className="hidden md:block font-bold text-4xl md:uppercase text-center tracking-wider leading-normal">
              meet the
              <br/>
              Principals
            </h1>

            <h2 className="font-bold md:hidden">meet principals</h2>

            <div className="image hidden md:flex w-full aspect-6 items-center gap-0 rounded-3xl overflow-hidden">
              <img
                src={diningSetup}
                alt="Brittocharette dining room"
                className="aspect-6 tripple-clip"
              />
            </div>

            <p className="text-center">
              As principal and licensed designer, the founder oversees the
              day-to-day operations of Britto Charette and the design and
              manufacture of our firm's custom furniture and award-winning
              accessories.
            </p>
          </div>

          <div className="w-full aspect-3 flex flex-col clip-container">
            <div className="w-full h-full flex items-center justify-between md:bg-slate principals-clipped">
              <img
                src={user}
                alt="Principal Brittocharette"
                className="w-2/5 md:w-1/3 aspect-1 bg-slate md:bg-transparent rounded-xl"
              />

              <img
                src={user2}
                alt="Principal Brittocharette"
                className="w-2/5 md:w-1/3 aspect-1 bg-slate md:bg-transparent rounded-xl"
              />

            </div>
          </div>
        </section>
      </ScrollAnimationWrapper>
    </>
  );
};

export default About;
