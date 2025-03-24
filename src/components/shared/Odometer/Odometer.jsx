import React, { useState, useEffect, useRef } from "react";

import Stepper from "./Stepper";

const Odometer = (props) => {
  const { number } = props;
  const componentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const digits = `${number}`.split("");

  useEffect(() => {
    function animate() {
      const elements = document.getElementsByClassName("stepper");

      [...elements].forEach((element) => {
        requestAnimationFrame(() => {
          const digitToStop = element.dataset.digit;
          element.style.top = `-${40 * parseInt(digitToStop)}px`;
          element.style.transitionDduration = `-${200 * parseInt(digitToStop)}px`;
        });
      });
    }

    requestAnimationFrame(animate);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }, // Trigger when 50% of the component is visible
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div ref={componentRef} className="flex h-10 overflow-hidden">
      {isVisible
        ? digits.map((digit, index) => <Stepper key={index} digit={digit} />)
        : null}
    </div>
  );
};

export default Odometer;
