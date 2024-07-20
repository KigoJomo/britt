import React from "react";

const PortfolioImage = ({ aspect = "16/9", text, width, height }) => {
  return (
    <div
      className={`border w-full aspect-${aspect} md:w-${width} md:h-${height} flex items-center justify-center`}
    >
      <h1>{text}</h1>
    </div>
  );
};

export default PortfolioImage;
