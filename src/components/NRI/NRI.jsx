import React from "react";
import { Link } from "react-router-dom";

import { Section, Container } from "../../components";

const NRI = (props) => {
  return (
    <Container>
      <Section
        id="nri"
        className="!my-0 py-8 md:py-16"
        title={"Innerwork for Non-Resident Indians (NRIs)"}
        label={"Holding NRI's hand"}
        // label={"HOLDING THE HAND OF AN NRI…"}
        description={
          <span>
            We blend local expertise in{" "}
            <strong>Bridging Distance, Delivering Justice</strong> with a global
            perspective to assist NRI clients.
          </span>
        }
      >
        <Link
          to={"nri-legal-services"}
          className="w-full rounded-md border-2 border-transparent bg-primary-light px-6 py-2 text-sm uppercase text-white duration-200 hover:bg-primary-dark sm:w-40"
        >
          Read More
        </Link>
      </Section>
    </Container>
  );
};

export default NRI;
