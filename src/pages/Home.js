import React from "react";
import { RegularButton, StatsCard, IconTextButton, Image } from "./Elements";

// Import images
import bedroom from "../assets/images/bedroom.jpg";
import bar from "../assets/images/bar.jpg";
import study from "../assets/images/study.jpg";
import livingRoom from "../assets/images/living room.jpg";
import shower from "../assets/images/shower.jpg";
import wardrobe from "../assets/images/wardrobe.jpg";
import user from "../assets/images/user.jpg";
import user2 from "../assets/images/user2.jpg";
import star from "../assets/images/star.png";

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

        <Image image={study} />

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
      <Image image={shower} />

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

const SliderContent = () => {
  return (
    <>
      <img src={star} alt="star" />
      <h2>/</h2>
      <h2>Brittocharette luxurious interior</h2>
      <img src={star} alt="star" />
      <h2>/</h2>
      <h2>miami-based interior design</h2>
    </>
  );
}

// Showroom section component
const Showroom = () => {
  return (
    <section id="showroom">
      <div className="left">
        <h2>
          visit our <br />
          showroom{" "}
        </h2>
        <p>
          From our studio in Miami's world-renowned Wynwood neighborhood, founders Joy Britto and David Charette create custom furniture.
        </p>
        <IconTextButton text="about us" />
      </div>

      <Image image={wardrobe}/>

      <div className="slider-wrapper">
        <div className="slider">
          <SliderContent />
          <SliderContent />
          <SliderContent />
          <SliderContent />
        </div>
      </div>
    </section>
  );
}

// Showcase component
const Showcase = () => {
  return (
    <section id="showcase">

      <div className="centerpiece">
        <div className="title">
          <p>ritz-carlton ph</p>
          <h3>modern villa</h3>
          <p>portofino tower</p>
        </div>
        <Image image={livingRoom}
          title={<>britto <br /> living room</>}
          button={true}
        />
      </div>

      <div className="sub">
      </div>
    </section>
  )
}

// Home component
const Home = () => {
  return (
    <>
      <HeroSection />
      <Stats />
      <Showroom />
      <Showcase />
    </>
  );
};

export default Home;
