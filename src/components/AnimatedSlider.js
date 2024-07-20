import React from "react";
import star from "../assets/images/star.webp";

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

const AnimatedSlider = () => {
    return (
      <div className="slider-wrapper absolute bottom-0 left-0 w-full overflow-hidden bg-slate">
        <div className="slider flex items-center gap-8">
          <SliderContent />
          <SliderContent />
          <SliderContent />
          <SliderContent />
        </div>
      </div>
    );
}

export default AnimatedSlider;