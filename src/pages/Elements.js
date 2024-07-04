import React from "react";
import { Link } from "react-router-dom";

const Button = ({ label, to }) => {
  return (
    <>
      <button className="bg-black px-4 py-1 rounded-full">
        <Link
          to={to}
          className="text-white capitalize text-center w-full"
        >
          {label}
        </Link>
      </button>
    </>
  );
};

const IconButton = () => {
  return (
    <>
      <button className="btn-ic">&#x2197;</button>
    </>
  );
};

const IconTextButton = (props) => {
  return (
    <>
      <button className="btn-txt-ic">
        <p>{props.text}</p>
        <span>&#x279c;</span>
      </button>
    </>
  );
};

// &#x2192;
// &rightarrow;

const StatsCard = (props) => {
  return (
    <div className="stats-card flex flex-col items-start justify-center gap-1">
      <h2>{props.title}</h2>
      <h4>{props.value}</h4>
    </div>
  )
};

const StatsCardDark = (props) => {
  return (
    <div className="stats-card flex flex-col items-start justify-center gap-1 px-3 py-2 bg-black">
      <h2 className="text-white">{props.title}</h2>
      <h4 className="text-white">{props.value}</h4>
    </div>
  );
};

const Image = (props) => {
  return (
    <div className="image-container w-full relative">
      {props.heading && <h2 className="absolute">{props.heading}</h2>}
      <div className="image w-full">
        <img src={props.image} alt={props.image} className="w-full" />
      </div>
      {props.button && <IconButton />}
    </div>
  );
};

export { Button, IconButton, IconTextButton, StatsCard, StatsCardDark, Image };