import React, { useState } from "react";
import classNames from "classnames";

import { Modal, Section, Container } from "../../components";

import css from "./About.module.css";
import { AboutUsImage, WhoWeAreImage } from "../../assets";

const About = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Section
        id="about"
        className={css.root}
        style={{
          backgroundImage: `url(${WhoWeAreImage})`,
        }}
        title={"About Us"}
        label={"Who We Are"}
        description={
          "We are a team of seasoned attorneys of various fields, retired police officers and experienced private investigators who are bringing a wealth of knowledge and also succeeding every case."
        }
      >
        <div className="flex flex-col items-start gap-4 py-10 lg:flex-row">
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-4 lg:w-[50%] lg:flex-auto"
          >
            <h3 className={classNames(css.subHeading)}>
              From legal counsel to detective work: our multifaceted approach
            </h3>

            <p>
              As we look to the future, Innerwork Advisors LLP remains dedicated
              to innovation, growth, and continued excellence. We are committed
              to staying at the forefront of legal and investigative practices,
              ensuring that we can meet the evolving needs of our clients in
              Kolkata and beyond.
            </p>
          </div>

          <div data-aos="fade-up" className="w-full lg:w-[50%] lg:flex-auto">
            <h3 className={classNames(css.subHeading, "mb-4")}>
              Why Choose Us?
            </h3>

            <ul className={classNames(css.list, "mb-4")}>
              <li>
                <i className="fa-solid fa-circle-check text-secondary"></i>
                <span>Upholding justice</span>
              </li>
              <li>
                <i className="fa-solid fa-circle-check text-secondary"></i>
                <span>Navigating laws</span>
              </li>
              <li>
                <i className="fa-solid fa-circle-check text-secondary"></i>
                <span>Safeguarding rights</span>
              </li>
              <li>
                <i className="fa-solid fa-circle-check text-secondary"></i>
                <span>Ensuring fairness and accountability</span>
              </li>
            </ul>

            <div className="flex flex-col gap-4">
              <p>
                Integrity and professionalism are the cornerstones of our
                practice. We adhere to the highest ethical standards in all our
                dealings, ensuring confidentiality, transparency and unwavering
                dedication to your case.
              </p>
              <p>
                With a history of successful outcomes and satisfied clients, we
                have earned a reputation for excellence in Kolkata’s legal and
                investigative circles. Our commitment to achieving justice for
                our clients is unwavering, and we are proud to be a trusted ally
                in their pursuit of truth.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start gap-4 border-2 border-transparent bg-gray-200 lg:flex-row lg:bg-white">
          <div
            data-aos="fade-up"
            className="flex w-full flex-col gap-4 lg:w-[50%] lg:flex-auto"
          >
            <img className="" src={AboutUsImage} alt="About Us" />
          </div>

          <div
            data-aos="fade-up"
            className="flex w-full flex-col justify-between gap-6 self-stretch px-[45px] py-[30px] lg:w-[50%] lg:flex-auto"
          >
            <h3 className={classNames(css.subHeading)}>
              Local Knowledge, Global Reach:
            </h3>

            <p>
              Based in the heart of Kolkata, our firm combines local insight
              with a global perspective. We leverage our deep roots in the
              community to navigate complex legal matters and conduct thorough
              investigations, ensuring that our clients receive the highest
              caliber of service.
            </p>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full rounded-md border-2 border-transparent bg-primary-light py-3 uppercase text-white duration-200 hover:bg-primary-dark sm:w-44"
            >
              Know More
            </button>
          </div>
        </div>
      </Section>

      <Modal
        title="About Us"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <div className="">
          <p className="mb-6 text-justify">
            Encountering unexpected legal challenges can be both bewildering and
            draining. In a world where legal issues are common, having a skilled
            team to assist is crucial. Many individuals lack the time or
            expertise to handle legal matters independently, making the support
            of a knowledgeable team invaluable. Our team not only helps resolve
            current legal issues but also takes proactive measures to prevent
            future ones. In Kolkata, Innerwork Advisors LLP stands out as a
            dependable choice for top-quality legal and investigative
            assistance. Since 2020, we have consistently delivered excellent
            service to our clients. Our team comprises of experienced advocates,
            retired police officers, and investigative experts dedicated to
            achieving the best outcomes for our clients’ legal needs.
            Additionally, Innerwork Advisors LLP also handles policy making,
            planning, and management. We have a team of experts in Forensic
            Science, Detective Services, Cyber Crime, and retired officers from
            various agencies. Over the years, we have earned a strong reputation
            as one of Kolkata’s respected law firm as well as a leading private
            investigation and detective agency. We take pride in offering
            thorough, reliable, and timely legal and private investigation
            services to our clients. Our experienced private investigators offer
            a range of dependable services, including pre-marriage
            investigations, post-marriage investigations and surveillance,
            finding missing persons, handling brand name issues, and background
            checks. Whether you require a reliable law firm or a top detective
            agency in Kolkata , Innerwork Advisors LLP is committed to
            delivering excellent results and ensuring client satisfaction.
          </p>

          <Section
            className="m-0"
            label="Our Mission"
            description={
              "Our mission is to offer unparalleled legal guidance and representation, driven by our core values of integrity, professionalism, and unwavering commitment to serve our clients' utmost interests."
            }
          />

          <Section
            className="m-0"
            label="Our Vision"
            description={
              "Our vision is to emerge as a prominent authority in the legal sphere, celebrated for our legal acumen, unwavering dedication to justice, and transformative influence on the well-being of our clients."
            }
          />

          <Section
            className="m-0"
            label="Our Values"
            description={
              "Our firm's values are central to who we are, influencing how we work with clients, colleagues, and the community. Integrity is key for us, meaning we prioritize honesty, transparency, and ethical behaviour in everything we do."
            }
          />

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
    </Container>
  );
};

export default About;
