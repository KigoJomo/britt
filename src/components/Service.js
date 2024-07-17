import React from "react";

const Service = ({ title, description }) => {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-base md:text-2xl font-bold uppercase">{title}</h1>
      <p>{description}</p>
      <hr className="mt-2 md:hidden" />
    </div>
  );
};

export default Service;
