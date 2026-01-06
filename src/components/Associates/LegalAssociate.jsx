import React from "react";
import { Section, Container } from "../../components";
import { LegalAssociates } from "../../assets";

const LegalAssociate = () => {
  return (
    <Container>
      <Section
        id="services"
        title={"Professional Expertise"}
        label={"Our Legal Associates"}
        description={
          "Inner Work Legal Services is powered by a team of seasoned legal associates committed to delivering precise, reliable, and outcome-driven legal solutions. Our professionals combine deep domain expertise with a client-first approach to ensure every engagement is handled with diligence, confidentiality, and strategic clarity."
        }
      >
        <img src={LegalAssociates} alt="" />
      </Section>
    </Container>
  );
};

export default LegalAssociate;
