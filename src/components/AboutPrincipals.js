import React from "react";
import Principal from "./Principal";
import user from "../assets/images/user.webp";
import user2 from "../assets/images/user2.webp";
import diningSetup from "../assets/images/dining-setup.webp";

const AboutPrincipals = () => {
  return (
    <section className="w-full px-4 py-0 md:px-14 flex flex-col items-center gap-4 relative md:bg-white">
      <div
        className="desc flex flex-col gap-6 items-center md:absolute z-10 md:w-1/3 md:py-2 md:px-6 md:aspect-4/3 md:justify-between"
        style={{ top: "15%" }}
      >
        <h1 className="hidden md:block font-bold text-4xl md:uppercase text-center tracking-wider leading-normal">
          meet the
          <br />
          Principals
        </h1>

        <h2 className="font-bold md:hidden">meet principals</h2>

        <div className="image hidden md:flex w-full aspect-6 items-center gap-0 rounded-3xl overflow-hidden hover-effect-cont">
          <img
            src={diningSetup}
            alt="Brittocharrete dining room"
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
        <div className="w-full h-full flex items-center justify-between md:bg-slate principals-clipped hover-effect-cont">
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

          <div className="names w-full flex items-start justify-between">
            <Principal name="jay britto" />
            <Principal name="david charette" order="2" />
          </div>
    </section>
  );
};

export default AboutPrincipals;
