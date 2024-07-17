import React from "react";
import Service from "./Service";
import diningWindow from "../assets/images/dining-window.webp";

const services = [
  {
    title: "Space Planning",
    description:
      "We create efficient layouts to maximize the use of space. Every design is crafted with attention to detail to ensure comfort and ease of use.",
  },
  {
    title: "Interior Design",
    description:
      "From concept development to final installation, we handle all aspects of interior decoration, ensuring every detail aligns with the client's vision.",
  },
  {
    title: "Custom Furniture Design",
    description:
      "We design and craft unique furniture pieces tailored to specific client needs, creating items that are not only beautiful but also functional.",
  },
  {
    title: "Project Management",
    description:
      "We oversee the entire design process, ensuring projects are completed on time and within budget. Our team is committed to delivering the best results for every client.",
  },
];

const AboutServices = () => {
  return (
    <section className="w-full md:h-screen py-0 md:py-16 px-4 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-center gap-6 md:gap-24">
      <div className="services-intro w-full md:w-1/3 md:h-full flex flex-col items-center md:items-start gap-2 md:justify-between">
        <h2 className="font-bold md:hidden">our services</h2>
        <h1 className="font-bold hidden md:block">our services</h1>
        <p className="text-center md:text-left px-6 md:pl-0">
          At britto charette, we offer a comprehensive range of services to
          bring your interior design vision to life. each service is tailored to
          meet the unique needs of our clients, ensuring a seamless and
          satisfying experience.
        </p>
        <div className="image w-full hover-effect-cont">
          <img
            src={diningWindow}
            alt="Brittocharette dining room"
            className="w-full aspect-2 md:hidden"
          />
          <img
            src={diningWindow}
            alt="Brittocharette dining room"
            className="w-full aspect-1 hidden md:block service-image-clipped"
          />
        </div>
      </div>

      <div className="services w-4/5 md:w-1/3 md:h-full flex flex-col gap-4 md:justify-between">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
};

export default AboutServices;
