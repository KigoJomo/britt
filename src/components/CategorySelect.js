import React from "react";
import FilterButton from "./FilterButton";

const CategorySelect = ({
  label,
  options,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <div className="category-select w-full flex flex-col gap-4">
      <label className="text-xs md:text-base capitalize font-light">
        {label}
      </label>
      <div className="categories flex items-center justify-start flex-wrap gap-4">
        {options.map((option) => (
          <FilterButton
            key={option}
            text={option}
            active={option === selectedOption}
            onClick={() => setSelectedOption(option)}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySelect;
