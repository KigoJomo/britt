import React from "react";
import { IconTextButton } from "../pages/Elements";

const PortfolioImage = ({ text, width, height, image }) => {

  return (
    <div
      className={`w-full p-4 aspect-16/9 ${width} ${height} flex items-center justify-center relative`}
    >
      <div
        className="image w-full aspect-16/9 md:h-full border"
        style={{ filter: "url(#rounder)" }}
      >
        <img
          src={image}
          alt={`Brittocharette ${text}`}
          className="portfolio-clip"
        />
      </div>
      <div
        className="absolute"
        style={{ top: "calc(100% - 40px)", right: "16px" }}
      >
        <IconTextButton text={text} />
      </div>
    </div>
  );
};

export default PortfolioImage;
