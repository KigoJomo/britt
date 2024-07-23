import React from "react";

const ContactDetail = ({ label, value }) => {
  return (
    <div className="w-full flex items-end justify-between border-b border-black py-4">
      <p className="capitalize">{label}</p>
      <p>{value}</p>
    </div>
  );
};

const ContacDetails = () => {
    return (
      <div className="contact-details w-full md:w-1/2 flex flex-col">
        <ContactDetail label="Email" value="brittocharette.com" />
        <ContactDetail label="Number" value="305 640 5005" />
        <ContactDetail
          label="Address"
          value="291 NE 47TH STREET MIAMI, FL 33137"
        />
      </div>
    );
};

export default ContacDetails;
