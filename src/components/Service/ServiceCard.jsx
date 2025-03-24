import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="group relative overflow-hidden rounded-sm">
      <img
        src={service.image}
        alt={`${service.name}`}
        className="h-[250px] w-full object-cover"
        loading="lazy"
      />
      <div
        style={
          {
            // backgroundImage: "linear-gradient(180deg, transparent 100%, rgba(0, 0, 0)",
          }
        }
        className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-4 bg-[#343a4980] text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0] md:text-lg"
        // className="absolute inset-0 flex cursor-pointer items-center justify-center bg-[#343a49c9] text-center font-roboto font-medium text-white transition-all hover:opacity-100 md:text-lg lg:opacity-0"
      >
        <h3 className="font-semibold text-secondary">{service.name}</h3>
        <p className="w-[80%] truncate text-sm">{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
