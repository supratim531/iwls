import React from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

import { Container, SubSection } from "../../components";

import { services } from "../../assets";

const ServiceDetailPage = (props) => {
  const { title } = useParams();
  const selectedService = services.find((item) => item.urlPath === title);

  return (
    <section>
      <Helmet>
        <title>{selectedService.metaTitle}</title>
        <meta name="description" content={selectedService.metaDescription} />
      </Helmet>

      <div
        style={{
          backgroundImage: `url(${selectedService?.image})`,
          backgroundSize: "cover",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
        className="relative inset-0 flex h-[45vh] items-center justify-center !bg-left text-2xl text-white sm:h-[45vh] md:!bg-center lg:h-[60vh]"
      >
        <div className="text-center">
          <Link
            to={"/"}
            className="text-secondary underline underline-offset-4 duration-200 hover:text-primary-dark"
          >
            Home
          </Link>{" "}
          {"/"} <span>{selectedService?.name}</span>
        </div>
      </div>

      <Container className="">
        <SubSection
          title={selectedService?.name}
          description={selectedService?.description}
          className="m-0 py-8 md:py-12 [&>div:nth-child(1)>p]:text-center [&>div:nth-child(1)]:mb-[16px] [&>div>h1]:text-center [&>div>h1]:not-italic"
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
      </Container>
    </section>
  );
};

export default ServiceDetailPage;
