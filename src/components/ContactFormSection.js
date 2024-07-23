import React from "react";
import formImage from "../assets/images/lakeside-manor-1.webp";
import FilterButton from "./FilterButton";

const Investments = [
  { text: "< $400", active: false },
  {
    text: "$400 - $700",
    active: true,
  },
  {
    text: "$701 - $800",
    active: false,
  },
  { text: "$800 >", active: false },
];

const FieldWrapper = ({ id, type, label, required=false }) => {
  return (
    <div className="fieldwrapper w-full flex flex-col gap-2 md:gap-4">
      <label htmlFor={id} className="text-xs md:text-base capitalize font-light">
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
  return (
    <form className="w-full md:w-1/2 flex flex-col gap-6 md:gap-10">
      <h1 className="w-full text-nowrap md:text-5xl">get in touch</h1>
      <div className="name-email w-4/5 md:w-full flex gap-6">
        <FieldWrapper id={"name"} type={"text"} label={"name"} required />
        <FieldWrapper id={"email"} type={"email"} label={"email address"} required />
      </div>
      <div className="category-select w-full flex flex-col gap-4">
        <label className="text-xs md:text-base capitalize font-light">choose</label>
        <div className="categories flex items-center justify-start flex-wrap gap-4">
          <FilterButton text={"family room"} active />
          <FilterButton text={"living room"} />
          <FilterButton text={"bedroom"} />
          <FilterButton text={"kitchen"} />
        </div>
      </div>
      <div className="category-select w-full flex flex-col gap-4">
        <label className="text-xs md:text-base capitalize font-light">
          investment consideration
        </label>
        <div className="categories flex items-center justify-start flex-wrap gap-4">
          {Investments.map((button) => (
            <FilterButton {...button} key={button.text} />
          ))}
        </div>
      </div>
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
