import React from "react";

import {
  Hero,
  About,
  Service,
  Team,
  Contact,
  Testimonial,
} from "../../components";

const HomePage = (props) => {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Team />
      <Contact />
      <Testimonial />
    </main>
  );
};

export default HomePage;
