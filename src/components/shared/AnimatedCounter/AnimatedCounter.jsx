import React, { useRef, useLayoutEffect } from "react";
import { animate, useInView } from "framer-motion";

const AnimatedCounter = (props) => {
  const { from, to, once, animationOptions } = props;
  const ref = useRef(null);
  const inView = useInView(ref, { once: once === true });

  useLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    element.textContent = String(from);

    const controls = animate(from, to, {
      duration: 1.5,
      ease: "easeOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = String(Number(value).toFixed(0));
      },
    });

    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return <span ref={ref}></span>;
};

export default AnimatedCounter;
