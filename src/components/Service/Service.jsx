import React, { useState } from "react";

import { Modal, Section, Container, ServiceCard } from "../../components";

import css from "./Service.module.css";
import { services } from "../../assets";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <Container>
      <Section
        id="service"
        title={"Our Service"}
        label={"What We Do"}
        description={
          "When your rights are at stake, you need a legal team that will fight tirelessly on your behalf. Our firm specializes in protecting the rights of our clients, ensuring that they receive fair treatment and due process under the law."
        }
      >
        <ul
          role="menu"
          data-aos="fade-up"
          aria-label="Our available services"
          className={css.categoryList}
        >
          {services.map((service, index) => (
            <li key={service.name} onClick={() => setSelectedService(service)}>
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>
      </Section>

      <Modal
        title={selectedService?.name}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        <div className="flex flex-col gap-4">
          <div>
            <img src={selectedService?.image} alt={selectedService?.name} />
          </div>

          <p className="text-sm md:text-base">{selectedService?.description}</p>

          <div className="w-full text-center">
            <button
              onClick={() => setSelectedService(null)}
              className="self-center rounded-md bg-red-600 px-4 py-2 text-white"
            >
              Close
            </button>
          </div>
        </div>
      </Modal>
    </Container>
  );
};

export default Service;
