import React from "react";
import { StatsCard, StatsCardDark, IconTextButton, Image, IconButton } from "./Elements";
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
    threshold: 0.1,
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
  );
};

const fadeInVariants = {
  hidden: { opacity: 0, y: 200 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

// Hero section component
const HeroSection = () => {
  return (
    <ScrollAnimationWrapper variants={fadeInVariants}>
      <section
        id="hero-section"
        className="flex flex-col items-center gap-12 w-full px-4 md:px-10 md:py-4"
      >
        <div className="flex flex-col items-center w-full">
          <h1 className="w-full text-center md:text-8xl">luxurious interior</h1>
          <span className="flex items-center justify-center gap-2 w-full">
            <img
              src={bar}
              alt="mini-bar"
              className="h-10 rounded-full aspect-2 md:h-16"
            />
            <h1 className="md:text-8xl">and</h1>
            <img
              src={bedroom}
              alt="bedroom"
              className="h-10 rounded-full aspect-2 md:h-16"
            />
          </span>
          <h1 className="w-full text-center md:text-8xl">industrial design</h1>
        </div>

        <div
          id="hero-section"
          className="w-full relative flex flex-col items-center gap-8"
        >
          <button className="bg-black px-4 py-2 rounded-full text-white capitalize text-center text-xs absolute z-10 -top-4 md:text-lg md:border-white md:border-8 md:-top-8">
            Best of year
          </button>
          <div className="image-container w-full relative aspect-1 md:aspect-3">
            <div className="image w-full aspect-1 md:aspect-3">
              <img
                src={study}
                alt="britto study design"
                className="hero-image-clipped md:hidden"
              />
              <img
                src={study}
                alt="britto study design"
                className="hero-image hidden md:block"
              />
            </div>

            <div className="stats md:hidden flex items-center justify-around bg-black w-2/3 absolute rounded-2xl overflow-hidden" style={{top: "74%", height: "26%"}}>
              <StatsCardDark
                title="6K+"
                value={
                  <>
                    Specializing <br /> in luxury
                  </>
                }
              />
              <StatsCardDark title="14" value={<>Progress</>} />
              <StatsCardDark title="9" value={<>Work</>} />
            </div>
          </div>
          <div className="founders flex flex-row-reverse justify-between w-full md:absolute md:flex-col md:items-end md:-bottom-16">
            <div className="photos flex items-center gap-2">
              <img
                src={user}
                alt="founder Brittocharette"
                className="h-12 rounded-full"
              />
              <img
                src={user2}
                alt="principal Brittocharette"
                className="h-12 rounded-full"
              />
            </div>
            <h3 className="md:text-right">
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
      <section
        id="stats-section"
        className="flex flex-col items-center justify-between gap-6 w-full px-4 md:px-10 md:py-4 md:flex-row md:items-end"
      >
        <div className="image-container w-full md:w-1/5 relative">
          <div
            className="image w-full aspect-1 rounded-3xl overflow-hidden"
            style={{ filter: "none" }}
          >
            <img
              src={shower}
              alt="brittocharette shower"
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="stats hidden md:flex w-1/2">
          <StatsCard
            title="the 6K+"
            value={
              <>
                Specializing <br /> in luxury
              </>
            }
          />
          <StatsCard
            title="14"
            value={
              <>
                Progress <br /> Work
              </>
            }
          />
          <StatsCard
            last
            title="9"
            value={
              <>
                Total <br /> Work
              </>
            }
          />
        </div>
        <div className="license-info flex flex-col items-end md:gap-5 md:w-1/4">
          <div className="info w-full flex md:justify-end">
            <p className="w-2/3 md:w-full md:text-right">
              Licensed and award-winning interior design firm specializing in
              luxury residential interiors.
            </p>
          </div>
          <IconTextButton to="about" text="read more" />
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};

const SliderContent = () => {
  return (
    <>
      <img src={star} alt="star" className="h-9" />
      <h2 className="flex-shrink-0 uppercase">/</h2>
      <h2 className="flex-shrink-0 uppercase">
        Brittocharette luxurious interior
      </h2>
      <img src={star} alt="star" className="h-9" />
      <h2 className="flex-shrink-0 uppercase">/</h2>
      <h2 className="flex-shrink-0 uppercase">miami-based interior design</h2>
    </>
  );
};

// Showroom section component
const Showroom = () => {
  return (
    <ScrollAnimationWrapper variants={fadeInVariants}>
      <section
        id="showroom"
        className="px-4 pb-20 md:px-10 relative flex flex-col-reverse items-end md:items-center justify-center md:flex-row gap-4 md:gap-12"
      >
        <div className="info w-1/2 flex flex-col gap-2 items-end md:items-start md:w-1/3 md:gap-8">
          <h2 className="text-right md:text-left md:text-6xl font-bold">
            visit our <br />
            showroom{" "}
          </h2>
          <p className="text-right md:text-left">
            From our studio in Miami's world-renowned Wynwood neighborhood,
            founders Joy Britto and David Charette create custom furniture.
          </p>
          <div className="hidden md:flex">
            <IconTextButton to="about" text="about us" />
          </div>
        </div>
        <div className="image-container w-full md:w-2/5 relative">
          <div className="image w-full aspect-1 rounded-3xl overflow-hidden">
            <img
              src={wardrobe}
              alt="brittocharette wardrobe"
              className="w-full h-full showroom-image-clipped md:hidden"
            />
            <img
              src={wardrobe}
              alt="brittocharette wardrobe"
              className="w-full h-full showroom-image-clipped-md hidden md:block"
            />
          </div>
          <div className="image-container absolute top-1/2 w-1/2 md:hidden flex flex-col gap-3">
            <div className="image w-full aspect-9/16">
              <img
                src={bar}
                alt="brittocharette bar"
                className="w-full h-full"
              />
            </div>
            <IconTextButton to="about" text="about us" />
          </div>
        </div>
        <div className="slider-wrapper absolute bottom-0 left-0 w-full overflow-hidden bg-slate">
          <div className="slider flex items-center gap-8">
            <SliderContent />
            <SliderContent />
            <SliderContent />
            <SliderContent />
          </div>
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};

// Showcase component
const Showcase = () => {
  return (
    <ScrollAnimationWrapper variants={fadeInVariants}>
      <section id="showcase" className="px-4 flex md:flex-row flex-col gap-8">
        <div className="centerpiece flex flex-col-reverse md:flex-col gap-4">
          <div className="title flex flex-col gap-1">
            <p className="uppercase">ritz-carlton ph</p>
            <div className="flex md:flex-col items-end md:items-start gap-2 md:gap-1">
              <h3 className="uppercase font-bold">modern villa</h3>
              <p className="uppercase">portofino tower</p>
            </div>
          </div>

          <div className="image-container w-full relative">
            <h2 className="uppercase text-right absolute z-10 right-0 w-1/2 h-1/4">
              Britto living <br /> room
            </h2>
            <div className="image w-full aspect-4/3">
              <img
                src={livingRoom}
                alt="brittocharette livingRoom"
                className="w-full h-full centerpiece-image"
              />
            </div>
            <div className="hidden md:block">
              <IconButton />
            </div>
          </div>
        </div>

        <div className="sub flex flex-col gap-4">
          <div className="image-container w-full relative">
            <div className="image w-full aspect-4/3">
              <img
                src={bathtub}
                alt="brittocharette bathtub"
                className="w-full h-full"
              />
            </div>

            <h3 className="md:hidden absolute">
              Boca Modern <br /> Sofa Brittocharette
            </h3>

            <div className="hidden md:block">
              <IconButton />
            </div>
          </div>
          <h3>
            Boca Modern <br /> Sofa Brittocharette
          </h3>
          <p>
            Discover our portfolio and reach out with any questions. We're here
            to bring your design aspirations to life.
          </p>
          <IconTextButton text="show more" />
        </div>
      </section>
    </ScrollAnimationWrapper>
  );
};

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
