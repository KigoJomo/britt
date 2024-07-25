import React, { useState } from "react";
import formImage from "../assets/images/lakeside-manor-1.webp";
import FilterButton from "./FilterButton";
import CategorySelect from "./CategorySelect";

const Investments = ["< $400", "$400 - $700", "$701 - $800", "$800 >"];
const RoomTypes = ["family room", "living room", "bedroom", "kitchen"];

const FieldWrapper = ({ id, type, label, required = false }) => {
  return (
    <div className="fieldwrapper w-full flex flex-col gap-2 md:gap-4">
      <label
        htmlFor={id}
        className="text-xs md:text-base capitalize font-light"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          required={required ? "required" : undefined}
          className="resize-none w-full border-0 border-b border-b-gray outline-none focus:outline-none focus:border-b-black bg-transparent focus:bg-transparent"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          required={required ? "required" : undefined}
          className="w-full border-0 border-b border-b-gray outline-none focus:outline-none focus:border-b-black bg-transparent focus:bg-transparent"
        />
      )}
    </div>
  );
};

const ContactForm = () => {
  const [currentRoomType, setCurrentRoomType] = useState(RoomTypes[0]);
  const [currentInvestment, setCurrentInvestment] = useState(Investments[1]);

  return (
    <form className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
      <h1 className="w-full text-nowrap md:text-5xl">get in touch</h1>
      <div className="name-email w-4/5 md:w-full flex gap-6">
        <FieldWrapper id={"name"} type={"text"} label={"name"} required />
        <FieldWrapper
          id={"email"}
          type={"email"}
          label={"email address"}
          required
        />
      </div>

      <CategorySelect
        label="Choose a room type"
        options={RoomTypes}
        selectedOption={currentRoomType}
        setSelectedOption={setCurrentRoomType}
      />

      <CategorySelect
        label="Investment consideration"
        options={Investments}
        selectedOption={currentInvestment}
        setSelectedOption={setCurrentInvestment}
      />

      <FieldWrapper id={"message"} type={"textarea"} label={"your message"} />
      <div>
        <FilterButton text={"submit"} type="submit" />
      </div>
    </form>
  );
};

const ContactFormSection = () => {
  return (
    <section className="w-full px-4 md:px-20 flex flex-col md:flex-row items-start gap-8 md:gap-24">
      <div
        className="image w-full md:w-1/2 border border-gray rounded-3xl overflow-hidden"
        style={{ filter: "none" }}
      >
        <img
          src={formImage}
          alt="Brittocharette Interior design"
          className="w-full aspect-4/3 md:aspect-1"
        />
      </div>

      <ContactForm />
    </section>
  );
};

export default ContactFormSection;
