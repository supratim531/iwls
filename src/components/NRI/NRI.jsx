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
        label={"HOLDING THE HANDS OF NRI's…"}
        description={
          "Bridging Distances, Delivering Justice with expert legal services tailored for NRIs."
        }
      >
        <Link
          to={"nri-legal-services"}
          className="w-full px-6 py-2 text-sm text-white uppercase duration-200 border-2 border-transparent rounded-md bg-primary-light hover:bg-primary-dark sm:w-40"
        >
          Read More
        </Link>
      </Section>
    </Container>
  );
};

export default NRI;
