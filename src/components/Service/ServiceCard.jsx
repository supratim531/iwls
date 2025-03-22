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
        className="absolute inset-0 flex cursor-pointer items-center justify-center bg-[#343a49c9] text-center font-roboto font-medium text-white transition-all hover:opacity-100 md:text-lg lg:opacity-0"
      >
        {service.name}
      </div>
    </div>
  );
};

export default ServiceCard;
