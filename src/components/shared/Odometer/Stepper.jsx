import React from "react";

const Stepper = (props) => {
  const { digit } = props;

  const numbers = Array.from(new Array(10));

  return (
    <div
      data-digit={digit}
      className="stepper relative top-0 flex flex-col transition-all duration-500"
    >
      {numbers.map((_, index) => (
        <div key={index} className="h-10 leading-10">
          {index}
        </div>
      ))}
    </div>
  );
};

export default Stepper;
