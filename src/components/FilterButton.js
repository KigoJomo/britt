import React from "react";

const FilterButton = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 md:px-10 py-1 md:py-2 rounded-md md:rounded-xl capitalize font-medium cursor-pointer text-nowrap text-xs md:text-base ${
        active ? "bg-black text-white border-0" : "border"
      }`}
    >
      {text}
    </button>
  );

};

export default FilterButton;
