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
      <button className="btn-ic bg-black text-white flex items-center justify-center rounded-full w-16 text-3xl aspect-1">&#x2197;</button>
    </>
  );
};

const IconTextButton = ({to, text}) => {
  return (
    <>
      <button className="border-0">
        <Link to={`/${to}`} className="h-8 flex items-center">
          <p className="text-white bg-black px-4 py-2 rounded-full capitalize text-nowrap max-h-full flex items-center">
            {text}
          </p>
          <span className="text-white bg-black rounded-full capitalize h-full aspect-4/3 flex items-center justify-center">
            &#x279c;
          </span>
        </Link>
      </button>
    </>
  );
};

// &#x2192;
// &rightarrow;

const StatsCard = ({title, value, last}) => {
  return (
    <div className={`card flex flex-col items-start justify-end gap-6 w-1/3 pr-2 pl-8 border-r ${last && "border-r-0"}`}>
      <h2 className="text-6xl font-bold">{title}</h2>
      <h3 className="font-bold">{value}</h3>
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