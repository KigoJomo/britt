import React from "react";
import ContactHeader from "../components/ContactHeader";
import ContactFormSection from "../components/ContactFormSection";
import ContacDetails from "../components/ContactDetails";
import logo from "../assets/images/britt-logo.webp";

const Contact = () => {
  return (
    <>
      <ContactHeader />
      <ContactFormSection />
      <div className="w-full flex justify-start md:justify-end px-6 md:px-20 md:gap-24">
        <div className="w-1/2 aspect-1 hidden md:block p-12">
          <img src={logo} alt="Brittocharette interior design" className="w-full aspect-1 opacity-45" />
        </div>
        <ContacDetails />
      </div>
    </>
  );
};

export default Contact;
