import React from "react";

const RegularButton = (props) => {
  return (
    <>
      <button>{props.text}</button>
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
    <div className="stats-card">
      <h2>{props.title}</h2>
      <h3>{props.value}</h3>
    </div>
  )
}

const Image = (props) => {
  return (
    <div className="image-container">
      {props.heading && <h2>{props.heading}</h2>}
      <div className="image">
        <img src={props.image} alt={props.image} />
      </div>
      {props.button && <IconButton />}
    </div>
  );
};

export { RegularButton, IconButton, IconTextButton, StatsCard, Image };