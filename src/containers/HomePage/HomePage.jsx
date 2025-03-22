import React from "react";

import { Hero, About, Service, Team, Testimonial } from "../../components";

const HomePage = (props) => {
  return (
    <main>
      <Hero />
      <About />
      <Service />
      <Team />
      <Testimonial />
    </main>
  );
};

export default HomePage;
