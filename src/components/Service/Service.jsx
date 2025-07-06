import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Modal,
  Section,
  SubSection,
  Container,
  ServiceCard,
} from "../../components";

import css from "./Service.module.css";
import { services } from "../../assets";

const Service = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState(null);

  return (
    <Container>
      <Section
        id="services"
        title={"Our Service"}
        label={"What We Do"}
        description={
          // "When your rights are at stake, you need a legal team that will fight tirelessly on your behalf. Our firm specializes in protecting the rights of our clients, ensuring that they receive fair treatment and due process under the law."
          "Inner Work Legal Services is an India-based law firm committed to providing expert legal solutions across a comprehensive range of legal domains with a client-centric approach, prioritizing tailored and effective legal strategies for individuals, businesses, and NRIs. Our firm provides comprehensive drafting services encompassing a wide spectrum of agreements, deeds, and other legal documentation."
        }
      >
        <ul
          role="menu"
          data-aos="fade-up"
          aria-label="Our available services"
          className={css.categoryList}
        >
          {services.map((service, index) => (
            // <li key={service.name} onClick={() => setSelectedService(service)}>
            <li
              key={service.name}
              onClick={() =>
                navigate(`our-services-kolkata/${service.urlPath}`)
              }
            >
              <ServiceCard service={service} />
            </li>
          ))}
        </ul>

        <SubSection
          title={"Conclusion"}
          className="mt-8 [&>div:nth-child(1)>p]:text-center [&>div:nth-child(1)]:mb-[16px] [&>div>h2]:text-center [&>div>h2]:not-italic"
          description={
            "Inner Work Legal Services is a distinguished law firm in India committed to providing professional, client-friendly, and trustworthy legal representation across a wide range of legal domains through both traditional litigation and ADR methods, upholding high ethical standards to meet the unique needs of individuals, businesses, and NRIs."
          }
        />
      </Section>

      <Modal
        title={selectedService?.name}
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
      >
        {/* <div className="flex flex-col gap-4">
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
        </div> */}

        <div className="flex flex-col gap-4">
          <div>
            <img src={selectedService?.image} alt={selectedService?.name} />
          </div>

          <SubSection
            title={selectedService?.name}
            description={selectedService?.description}
            className="m-0 [&>div:nth-child(1)>p]:text-center [&>div:nth-child(1)]:mb-[16px] [&>div>h2]:text-center [&>div>h2]:not-italic"
          >
            <div data-aos="fade-up" className="flex flex-col gap-4">
              <ul className="list-inside">
                {selectedService?.name === "Service Providers" ||
                selectedService?.name === "Educational Landscape" ||
                selectedService?.name ===
                  "Corporate Legal Matters (including NCLT, SARFAESI, DRT & DRAT)" ||
                selectedService?.name ===
                  "GST-Related Legal Matters (including Registration, Appeals & Resolution)" ? (
                  <div className="flex flex-col gap-4">
                    {selectedService?.points.map((point) => (
                      <div>
                        <p key={point?.description}>{point?.description}</p>
                        <ul className="text-sm">
                          {point?.subPoints?.map((subPoint) => (
                            <li
                              key={subPoint?.label}
                              className="list-inside list-disc"
                            >
                              {subPoint?.label ? (
                                <span className="text-primary-light">
                                  {subPoint?.label}
                                  {":"}
                                </span>
                              ) : null}{" "}
                              <span>{subPoint?.description}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  selectedService?.points.map((point) => (
                    <li key={point?.label} className="list-inside list-disc">
                      {point?.label ? (
                        <strong className="text-primary-light">
                          {point?.label}
                          {":"}
                        </strong>
                      ) : null}{" "}
                      <span>{point?.description}</span>
                    </li>
                  ))
                )}
              </ul>

              <p>{selectedService?.extra}</p>
            </div>
          </SubSection>

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
