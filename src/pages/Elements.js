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
        <span>&rightarrow;</span>
      </button>
    </>
  );
};

// &#x2192;
// &rightarrow;

export { RegularButton, IconButton, IconTextButton };