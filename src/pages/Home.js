import React from "react";
import { RegularButton, StatsCard, IconTextButton, Image } from "./Elements";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Import images
import bedroom from "../assets/images/bedroom.webp";
import bar from "../assets/images/bar.webp";
import study from "../assets/images/study.webp";
import livingRoom from "../assets/images/living room.webp";
import bathtub from "../assets/images/bathtub.webp";
import shower from "../assets/images/shower.webp";
import wardrobe from "../assets/images/wardrobe.webp";
import user from "../assets/images/user.webp";
import user2 from "../assets/images/user2.webp";
import star from "../assets/images/star.webp";

// A higher order component that will wrap sections and apply the scroll animations
const ScrollAnimationWrapper = ({ children, variants }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

const fadeInVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {opacity: 1, y: 0, transition: {duration: 0.7} },
}

// Hero section component
const HeroSection = () => {
  return (
    <ScrollAnimationWrapper variants={fadeInVariants}>
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
    </ScrollAnimationWrapper>
  );
};

// Stats section component
const Stats = () => {
  return (
    <ScrollAnimationWrapper variants={fadeInVariants}>
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
    </ScrollAnimationWrapper>
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
    <ScrollAnimationWrapper variants={fadeInVariants}>
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
    </ScrollAnimationWrapper>
  );
}

// Showcase component
const Showcase = () => {
  return (
    <ScrollAnimationWrapper variants={fadeInVariants}>
      <section id="showcase">
        <div className="centerpiece">
          <div className="title">
            <p>ritz-carlton ph</p>
            <h3>modern villa</h3>
            <p>portofino tower</p>
          </div>
          <Image
            heading={
              <>
                Britto living <br /> room
              </>
            }
            image={livingRoom}
            button
          />
        </div>
        <div className="sub">
          <Image image={bathtub} button />
          <h3>Boca Modern <br/> Sofa Brittocharette</h3>
          <p>
            Discover our portfolio and reach out with any questions. We're here to bring your design aspirations to life.
          </p>
          <IconTextButton text="show more" />
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
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
