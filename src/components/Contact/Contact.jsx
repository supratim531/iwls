import React from "react";

import { Section, Container } from "../../components";

import css from "./Contact.module.css";
import { ContactUsImage } from "../../assets";

const Contact = () => {
  return (
    <article
      className={css.root}
      style={{
        backgroundImage: `url(${ContactUsImage})`,
      }}
    >
      <Container>
        <Section
          id="contact"
          className="!my-0 !gap-4 py-8 lg:!flex lg:!flex-row lg:py-16"
          title={"Don't Hesitate To Ask"}
          label={"Your Trusted Partner"}
          description={
            "We pride ourselves on providing personalized attention, clear communication and unwavering dedication to achieving the best possible outcome for our clients."
          }
        >
          <div data-aos="fade-up" className="lg:!w-[110%]">
            <iframe
              src="https://link.youngarchitects.in/widget/form/T1q5BNjUavi5TCo4Vzkf"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "3px",
              }}
              id="inline-T1q5BNjUavi5TCo4Vzkf"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Contact Us Innerwork Legal Services"
              data-height="662"
              data-layout-iframe-id="inline-T1q5BNjUavi5TCo4Vzkf"
              data-form-id="T1q5BNjUavi5TCo4Vzkf"
              title="Contact Us Innerwork Legal Services"
            ></iframe>
          </div>
        </Section>
      </Container>
    </article>
  );
};

export default Contact;
