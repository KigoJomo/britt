import React from "react";
import AnimatedSlider from "./AnimatedSlider";
import {
  ScrollAnimationWrapper
} from "./ScrollAnimationWrapper";

import diningRoom from "../assets/images/bright1.webp";
import diningRoom2 from "../assets/images/bright5.webp";
import bright6 from "../assets/images/bright6.webp";
import bright7 from "../assets/images/bright7.webp";

const Image = ({ width, aspect, src, alt, animationDuration = 1 }) => {
  const imageAnimateVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: { opacity: 1, y: 0, transition: { duration: animationDuration } },
    };

  return (
    <ScrollAnimationWrapper variants={imageAnimateVariants}>
      <div className={`image ${width}`}>
        <img
          src={src}
          alt={`Brittocharette ${alt}`}
          className={`w-full ${aspect}`}
        />
      </div>
    </ScrollAnimationWrapper>
  );
};

const ContactHeader = () => {
  return (
    <section className="w-full flex flex-col items-center gap-12 py-6">
      <h1 className="flex flex-col items-center gap-1 md:gap-4 text-3xl md:text-7xl font-bold text-nowrap text-center">
        <span className="flex items-center justify-center gap-2">
          Consult with
          <img
            src={diningRoom}
            alt="Brittocharette dining room"
            className="h-8 rounded-full aspect-2 md:h-16"
          />
          us
        </span>
        <span className="flex items-center gap-2">
          <img
            src={diningRoom2}
            alt="Brittocharette dining room"
            className="h-8 rounded-full aspect-3 md:h-16"
          />
          before you
        </span>
        <span>commit</span>
      </h1>

      <AnimatedSlider absolute={false} />

      <div className="images w-full px-4 md:px-8 flex flex-col gap-2">
        <Image
          width="w-full md:hidden"
          src={diningRoom2}
          alt={"dining room"}
          aspect={"aspect-21/9"}
        />
        <div className="w-full flex gap-2 md:gap-8">
          <Image
            width={"flex-1 hidden md:flex hover-effect-cont"}
            aspect={"aspect-3/4 md:aspect-1"}
            src={diningRoom2}
            alt={"dining room"}
          />
          <Image
            width={"flex-1 hover-effect-cont"}
            aspect={"aspect-3/4 md:aspect-1"}
            src={bright6}
            alt={"interior"}
            animationDuration={1.5}
          />
          <Image
            width={"flex-1 hover-effect-cont"}
            aspect={"aspect-3/4 md:aspect-1"}
            src={bright7}
            alt={"interior"}
            animationDuration={2.0}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHeader;
