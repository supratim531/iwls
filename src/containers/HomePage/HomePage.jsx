import React from "react";

import { Hero, About, Team, Testimonial } from "../../components";

const HomePage = (props) => {
  return (
    <main>
      <Hero />
      <About />
      <Team />
      <Testimonial />
    </main>
  );
};

export default HomePage;
