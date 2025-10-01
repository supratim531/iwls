import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import { Modal, Section, SubSection, Container } from "../../components";

import css from "./About.module.css";
import {
  AboutUsImage,
  WhoWeAreImage,
  OurMissionImage,
  OurVisionImage,
  OurValuesImage,
} from "../../assets";

library.add(fas, far, fab);
const About = (props) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <article
      className={css.root}
      style={{
        backgroundImage: `url(${WhoWeAreImage})`,
      }}
    >
      <Container>
        <Section
          id="about"
          className="!my-0 flex flex-col gap-8 py-8 md:gap-16 md:py-16"
          title={"About Us"}
          label={"Who We Are"}
          description={
            "At our firm, we are a team of passionate legal professionals driven by an unwavering spirit of excellence—delivering swift, expert solutions across borders while safeguarding your interests with integrity and precision."
          }
        >
          <div className={css.threeMoto}>
            <div
              className={classNames(
                css.threeMotoCard,
                "group relative overflow-hidden rounded-sm",
              )}
            >
              <img
                src={OurMissionImage}
                alt="Our Mission"
                className="h-[250px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-4 bg-[#343a4980] text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0]">
                <SubSection
                  title={"Our Mission"}
                  description={
                    "Our mission is to offer unparalleled legal guidance and representation, driven by our core values of integrity, professionalism, and unwavering commitment to serve our clients' utmost interests."
                  }
                  className="[&>div>div]:px-10 [&>div>p]:text-[14px] [&>div>p]:text-white [&>div]:m-0 [&>div]:p-8"
                />
              </div>
            </div>

            <div
              className={classNames(
                css.threeMotoCard,
                "group relative overflow-hidden rounded-sm",
              )}
            >
              <img
                src={OurVisionImage}
                alt="Our Vision"
                className="h-[250px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-4 bg-[#343a4980] text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0]">
                <SubSection
                  title={"Our Vision"}
                  description={
                    "Our vision is to emerge as a prominent authority in the legal sphere, celebrated for our legal acumen, unwavering dedication to justice, and transformative influence on the well-being of our clients."
                  }
                  className="[&>div>div]:px-10 [&>div>p]:text-[14px] [&>div>p]:text-white [&>div]:m-0 [&>div]:p-8"
                />
              </div>
            </div>

            <div
              className={classNames(
                css.threeMotoCard,
                "group relative overflow-hidden rounded-sm",
              )}
            >
              <img
                src={OurValuesImage}
                alt="Our Values"
                className="h-[250px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 flex cursor-grab flex-col items-center justify-center gap-4 bg-[#343a4980] text-center font-roboto font-medium text-white transition-all hover:bg-[#343a49e0]">
                <SubSection
                  title={"Our Values"}
                  description={
                    "Our firm's values are central to who we are, influencing how we work with clients, colleagues, and the community. Integrity is key for us, meaning we prioritize honesty, transparency, and ethical behaviour in everything we do."
                  }
                  className="[&>div>div]:px-10 [&>div>p]:text-[14px] [&>div>p]:text-white [&>div]:m-0 [&>div]:p-8"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start rounded border border-gray-300 bg-gray-200 lg:flex-row lg:bg-white">
            <div
              data-aos="fade-up"
              className="flex w-full flex-col justify-between gap-4 self-stretch border-r border-r-gray-300 px-[45px] py-[30px] lg:w-[50%] lg:flex-auto"
            >
              <h3 className={classNames(css.subHeading)}>
                About Us
                {/* From legal counsel to detective work: our multifaceted approach */}
              </h3>

              <span>
                Innerwork Legal Services offers comprehensive, results-driven
                legal solutions. We provide expert guidance and strategic
                representation for individuals and businesses. We are committed
                to safeguarding your interests with integrity. We specialize in
                a wide range of legal areas, including:{" "}
                <strong>
                  {" "}
                  Legal services, Divorce lawyer, Civil law attorney, Family
                  lawyer, Immigration lawyer, Property lawyer, Criminal defense
                  lawyer.
                </strong>
              </span>

              <button
                onClick={() => setIsReadMore(true)}
                className="w-full rounded-md border-2 border-transparent bg-primary-light py-2 text-sm uppercase text-white duration-200 hover:bg-primary-dark sm:w-40"
              >
                Read More
              </button>
            </div>

            <div
              data-aos="fade-up"
              className="flex w-full flex-col justify-between gap-4 self-stretch px-[45px] py-[30px] lg:w-[50%] lg:flex-auto"
            >
              <h3 className={css.subHeading}>Why Choose Us?</h3>

              <div className="flex flex-col gap-4">
                <ul className={css.list}>
                  <li>
                    <i className="fa-solid fa-circle-check text-secondary"></i>
                    <span>
                      <strong>Expertise across diverse legal domains</strong>
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check text-secondary"></i>
                    <span>
                      <strong>Best possible Legal Solutions</strong>
                    </span>
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check text-secondary"></i>
                    <span>
                      <strong>Dedicated approach</strong>
                    </span>
                  </li>
                </ul>

                <div>
                  Innerwork Legal Services is your dedicated legal partner. We
                  offer strategic, authoritative, and high-caliber legal
                  solutions. Whether navigating complex legal challenges or
                  seeking expert counsel, our team ensures exceptional advocacy
                  and unwavering support to protect your interests.
                </div>
              </div>

              <a
                type="button"
                href="#contact"
                className="w-full rounded-md border-2 border-transparent bg-primary-light py-2 text-center text-sm uppercase text-white duration-200 hover:bg-primary-dark sm:w-40"
              >
                Contact Us Today
              </a>
            </div>
          </div>

          <div className="flex flex-col items-start gap-4 border-2 border-transparent bg-gray-200 lg:flex-row lg:bg-white">
            <div
              data-aos="fade-up"
              className="flex w-full flex-col gap-4 self-stretch lg:w-[50%] lg:flex-auto"
            >
              <img
                className="h-full w-full object-cover"
                src={AboutUsImage}
                alt="About Us"
              />
            </div>

            <div
              data-aos="fade-up"
              className="flex w-full flex-col gap-8 self-stretch px-[45px] py-[30px] lg:w-[50%] lg:flex-auto"
            >
              <h3 className={classNames(css.subHeading)}>
                {/* Local Knowledge, Global Reach: */}
                Rooted in Kolkata, Reaching Globally
              </h3>

              <span>
                Innerwork Legal Services offers{" "}
                <strong>
                  authoritative, high-caliber legal representation
                </strong>{" "}
                to NRI clients. Rooted in Kolkata, our{" "}
                <strong>trusted team</strong> provides seamless support and
                expert guidance, ensuring your interests are{" "}
                <strong>securely protected </strong> across all jurisdictions.
              </span>
              <ul className="md:fa-ul lg:fa-ul flex items-center justify-between">
                <li>
                  <FontAwesomeIcon
                    icon="fa-solid fa-circle-right"
                    beatFade
                    size="sm:lg md:fa-2xl lg:fa-2xl"
                    listItem
                    // pull="left"
                  />
                  <strong>
                    NRI Legal Support by Innerwork Legal Services:
                  </strong>
                </li>
              </ul>
              <ul className={css.list}>
                <li>
                  <i className="fa-solid fa-circle-check text-secondary"></i>
                  <span>
                    <strong>
                      Property & Inheritance: We handle property disputes,
                      transactions, and inheritance matters, including Will
                      drafting and succession, for NRIs in India
                    </strong>
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check text-secondary"></i>
                  <span>
                    <strong>
                      Family Law: We provide expert legal guidance on divorce,
                      child custody, and family disputes for clients living
                      abroad.{" "}
                    </strong>
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check text-secondary"></i>
                  <span>
                    <strong>
                      Power of Attorney: We facilitate the execution of a valid
                      PoA, allowing us to represent you in India when you cannot
                      be physically present.{" "}
                    </strong>
                  </span>
                </li>
                <li>
                  <i className="fa-solid fa-circle-check text-secondary"></i>
                  <span>
                    <strong>
                      Dispute Resolution: We offer strategic counsel and
                      representation in various civil and criminal matters,
                      ensuring your interests are protected.{" "}
                    </strong>
                  </span>
                </li>
              </ul>

              <Link
                to={"nri-legal-services"}
                className="w-full rounded-md border-2 border-transparent bg-primary-light py-3 text-center uppercase text-white duration-200 hover:bg-primary-dark sm:w-44"
              >
                NRI Support
              </Link>
            </div>
          </div>
        </Section>

        <Modal
          title="About Us"
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <div className="">
            <p className="mb-6 text-sm md:text-base">
              Encountering unexpected legal challenges can be both bewildering
              and draining. In a world where legal issues are common, having a
              skilled team to assist is crucial. Many individuals lack the time
              or expertise to handle legal matters independently, making the
              support of a knowledgeable team invaluable. Our team not only
              helps resolve current legal issues but also takes proactive
              measures to prevent future ones. In Kolkata, Innerwork Advisors
              LLP stands out as a dependable choice for top-quality legal and
              investigative assistance. Since 2020, we have consistently
              delivered excellent service to our clients. Our team comprises of
              experienced advocates, retired police officers, and investigative
              experts dedicated to achieving the best outcomes for our clients’
              legal needs. Additionally, Innerwork Advisors LLP also handles
              policy making, planning, and management. We have a team of experts
              in Forensic Science, Detective Services, Cyber Crime, and retired
              officers from various agencies. Over the years, we have earned a
              strong reputation as one of Kolkata’s respected law firm as well
              as a leading private investigation and detective agency. We take
              pride in offering thorough, reliable, and timely legal and private
              investigation services to our clients. Our experienced private
              investigators offer a range of dependable services, including
              pre-marriage investigations, post-marriage investigations and
              surveillance, finding missing persons, handling brand name issues,
              and background checks. Whether you require a reliable law firm or
              a top detective agency in Kolkata , Innerwork Advisors LLP is
              committed to delivering excellent results and ensuring client
              satisfaction.
            </p>

            {/* <SubSection
              className="m-0 [&>div]:text-center"
              title="Our Mission"
              description={
                "Our mission is to offer unparalleled legal guidance and representation, driven by our core values of integrity, professionalism, and unwavering commitment to serve our clients' utmost interests."
              }
            />

            <SubSection
              className="m-0 [&>div]:text-center"
              title="Our Vision"
              description={
                "Our vision is to emerge as a prominent authority in the legal sphere, celebrated for our legal acumen, unwavering dedication to justice, and transformative influence on the well-being of our clients."
              }
            />

            <SubSection
              className="m-0 [&>div]:text-center"
              title="Our Values"
              description={
                "Our firm's values are central to who we are, influencing how we work with clients, colleagues, and the community. Integrity is key for us, meaning we prioritize honesty, transparency, and ethical behaviour in everything we do."
              }
            /> */}

            <div className="w-full text-center">
              <button
                onClick={() => setIsModalOpen(false)}
                className="self-center rounded-md bg-red-600 px-4 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>

        <Modal
          title="About Us"
          isOpen={isReadMore}
          onClose={() => setIsReadMore(false)}
        >
          <div className="flex flex-col gap-4 text-sm md:text-base">
            {/* <p>
              At Innerwork Legal Services, we are dedicated to providing
              comprehensive legal solutions tailored to the diverse needs of
              individuals, businesses, and organizations. With a strong
              commitment to professionalism, integrity, and client satisfaction,
              we offer expert legal guidance across a wide range of practice
              areas, ensuring strategic and effective representation.
            </p> */}

            <div className="flex flex-col gap-4">
              {/* <h3 className="text-2xl font-semibold text-primary-dark">
                Expert Legal Services Across Multiple Domains
              </h3> */}

              <div className="flex flex-col gap-2">
                <h4>
                  At Innerwork Legal Services, we are dedicated to providing
                  comprehensive legal solutions tailored to the diverse needs of
                  individuals, businesses, and organizations. With a strong
                  commitment to professionalism, integrity, and client
                  satisfaction, we offer expert legal guidance across a wide
                  range of practice areas, ensuring strategic and effective
                  representation. Expert Legal Services Across Multiple Domains
                  Our firm specializes in various legal fields, offering
                  end-to-end support in:
                </h4>

                <ul className="[&>li>strong]:text-primary-light">
                  <li>
                    <strong>Corporate & Business Law:</strong> Legal advisory
                    for startups, corporations, and entrepreneurs, including
                    contract drafting, business structuring, compliance, and
                    dispute resolution.
                  </li>
                  <li>
                    <strong>Criminal & Civil Litigation:</strong> Strong legal
                    representation in criminal and civil matters, ensuring your
                    rights and interests are protected.
                  </li>
                  <li>
                    <strong>Family Law & Divorce Matters:</strong> Compassionate
                    yet strategic legal support for marriage, divorce, child
                    custody, and property settlements.
                  </li>
                  <li>
                    <strong>Intellectual Property & Cyber Law:</strong>{" "}
                    Protection of trademarks, copyrights, patents, and online
                    legal compliance.
                  </li>
                  <li>
                    <strong>Real Estate & Property Law:</strong> Legal
                    assistance in property disputes, transactions, lease
                    agreements, and due diligence.
                  </li>
                  <li>
                    <strong>Employment & Labor Law:</strong> Legal solutions for
                    workplace disputes, employee rights, and corporate
                    compliance.
                  </li>
                  <li>
                    <strong>Investigation & Legal Research:</strong> In-depth
                    legal analysis and investigative services to support
                    litigation and corporate risk management.
                  </li>
                  <li>
                    <strong>Experienced & Knowledgeable Team:</strong> Our legal
                    professionals bring years of expertise in handling complex
                    legal matters.
                  </li>
                  <li>
                    <strong>Client-Centric Approach:</strong> We prioritize your
                    needs and provide personalized solutions that align with
                    your goals.
                  </li>
                  <li>
                    <strong>Strategic & Research-Driven Solutions:</strong> Our
                    meticulous legal research and investigative approach ensure
                    well-informed strategies and robust legal support.
                  </li>
                  <li>
                    <strong>Transparent & Ethical Practices:</strong> We uphold
                    the highest standards of legal ethics, ensuring clarity,
                    confidentiality, and trust in every client.
                  </li>
                </ul>
              </div>

              {/* <div className="flex flex-col gap-2">
                <h4 className="text-lg font-medium text-primary-light">
                  Why Choose Innerwork Legal Services?
                </h4>

                <ul className="[&>li>strong]:text-secondary">
                  <li>
                    <strong>Experienced & Knowledgeable Team:</strong> Our legal
                    professionals bring years of expertise in handling complex
                    legal matters.
                  </li>
                  <li>
                    <strong>Client-Centric Approach:</strong> We prioritize your
                    needs and provide personalized solutions that align with
                    your goals.
                  </li>
                  <li>
                    <strong>Strategic & Research-Driven Solutions:</strong> Our
                    meticulous legal research and investigative approach ensure
                    well-informed strategies and robust legal support.
                  </li>
                  <li>
                    <strong>Transparent & Ethical Practices:</strong> We uphold
                    the highest standards of legal ethics, ensuring clarity,
                    confidentiality, and trust in every case.
                  </li>
                </ul>
              </div> */}

              <div className="flex flex-col gap-2">
                <h4 className="text-lg font-semibold text-primary-dark">
                  Get in Touch with Us
                </h4>
                <p>
                  Whether you need legal consultation, representation, or
                  advisory support, Innerwork Legal Services is here to assist
                  you. Our goal is to simplify legal complexities and deliver
                  the best possible legal outcome to protect your rights and
                  interests. Contact us today to discuss your legal needs and
                  explore how we can assist you.
                </p>
              </div>
            </div>

            <div className="w-full text-center">
              <button
                onClick={() => setIsReadMore(false)}
                className="self-center rounded-md bg-red-600 px-4 py-2 text-white"
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      </Container>
    </article>
  );
};

export default About;
