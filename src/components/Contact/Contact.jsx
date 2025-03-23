import React from "react";

import { Section, Container } from "../../components";

const Contact = () => {
  return (
    <Container>
      <Section
        id="contact"
        title="Contact Us"
        label="Don't Hesitate To Ask"
        description={
          "We pride ourselves on providing personalized attention, clear communication and unwavering dedication to achieving the best possible outcome for our clients."
        }
      >
        <div data-aos="fade-up">Form Goes Here</div>
      </Section>
    </Container>
  );
};

export default Contact;
