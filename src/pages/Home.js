import React from "react";
import { RegularButton, StatsCard, IconTextButton } from "./Elements";

// Import images
import bedroom from "../assets/images/bedroom.jpg";
import bar from "../assets/images/bar.jpg";
import livingRoom from "../assets/images/living room.jpg";
import wardrobe from "../assets/images/wardrobe.jpg";
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

// Stats section component

const Stats = () => {
  return (
    <section id="stats-section">
      <div className="image">
        <img src={wardrobe} alt="wardrobe" />
      </div>

      <div className="stats">
        <StatsCard title="the 6K+" value={<>Specializing <br/> in luxury</>} />
        <StatsCard title="14" value={<>Progress <br/> Work</>} />
        <StatsCard title="9" value={<>Total <br/> Work</>} />
      </div>

      <div className="license-info">
        <p>Licensed and award-winning interior design firm specializing in luxury residential interiors.</p>
        <IconTextButton text="read more" />
      </div>

    </section>
  );
}

// Home component
const Home = () => {
  return (
    <>
      <HeroSection />
      <Stats />
    </>
  );
};

export default Home;
