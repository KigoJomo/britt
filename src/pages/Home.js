import React from "react";
import { RegularButton } from "./Elements";

// Import images
import bedroom from "../assets/images/bedroom.jpg";
import bar from "../assets/images/bar.jpg";
import livingRoom from "../assets/images/living room.jpg";
import user from "../assets/images/user.jpg";
import user2 from "../assets/images/user2.jpg";

// Hero section component
const HeroSection = () => {
  return (
    <section id="hero-section">
      <div className="heading">
        <h1>luxurious interior</h1>
        <span>
          <img src={bar} alt="mini-bar" />
          <h1>and</h1>
          <img src={bedroom} alt="bedroom" />
        </span>
        <h1>industrial design</h1>
      </div>

      <div className="hero-image">
        <RegularButton text="best of the year" />
        <div className="image">
          <img src={livingRoom} alt="Living room" />
        </div>

        <div className="founders">
          <div className="photos">
            <img src={user} alt="founder Brittocharette" />
            <img src={user2} alt="principal Brittocharette" />
          </div>
          <h3>
            Founder and Principal
            <br />
            Brittocharette
          </h3>
        </div>
      </div>
    </section>
  );
};

// Home component
const Home = () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
