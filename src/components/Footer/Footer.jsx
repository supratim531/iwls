import React, { useState } from "react";
import classNames from "classnames";
import { HashLink } from "react-router-hash-link";

import { Modal, Container } from "../../components";

import css from "./Footer.module.css";
import { BrandLogo } from "../../assets";

const Footer = (props) => {
  const [isDisclaimer, setIsDisclaimer] = useState(false);
  const [isTermsConditions, setIsTermsConditions] = useState(false);

  return (
    <footer
      id="footer"
      className="flex items-center justify-center bg-primary-light"
    >
      <Container>
        <div className="map-container-2 flex w-full flex-col items-start gap-4 pt-8 lg:h-[280px] lg:flex-row">
          <div className="flex h-full w-full flex-col-reverse gap-2 text-secondary">
            <h3
              onClick={(e) => {
                e.stopPropagation();

                if (window) {
                  window.open(
                    `https://www.google.com/maps?q=${"Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor, Kolkata 700001"}`,
                    "_blank",
                  );
                }
              }}
              className="flex cursor-pointer items-start gap-2"
            >
              <i className="fa-solid fa-location-dot mt-1"></i>
              <span>
                Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor, Kolkata 700001
              </span>
            </h3>

            <iframe
              loading="lazy"
              title="my-gmap-frame"
              className="h-full w-full"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.180487303129!2d88.34892027405944!3d22.572351932981803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277a5baabca5f%3A0xbe43dc306dbe663b!2sMartin%20Burn%20House!5e0!3m2!1sen!2sin!4v1742936965216!5m2!1sen!2sin"
            >
              <a href="https://www.maps.ie/distance-area-calculator.html">
                measure distance on map
              </a>
            </iframe>
          </div>

          {/* <div className="flex flex-col-reverse w-full h-full gap-2 text-secondary">
            <h3 className="flex items-start gap-2">
              <i className="mt-1 fa-solid fa-location-dot"></i>
              <span>22, Sukeas Lane, Kolkata 700001</span>
            </h3>

            <iframe
              loading="lazy"
              title="my-gmap-frame"
              className="w-full h-full"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.074709657532!2d88.34893107405951!3d22.57630893283673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0277bacf3b34eb%3A0x2d3edbfdf3b15e74!2s22%2C%20Sukeas%20Ln%2C%20Murgighata%2C%20Barabazar%20Market%2C%20Kolkata%2C%20West%20Bengal%20700001!5e0!3m2!1sen!2sin!4v1742754929548!5m2!1sen!2sin"
            ></iframe>
          </div> */}
        </div>

        <div className="flex w-full flex-wrap py-8 text-white">
          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <HashLink smooth to={"/#"}>
              <img
                src={BrandLogo}
                alt="INNERWORK LEGAL SERVICES"
                className="md:w-[80%]"
              />
            </HashLink>

            <p className="mb-4 mt-5 text-white md:w-[80%]">
              Feel free to submit your query to Kolkata's most trusted provider
              of legal services, private investigation and man power provider
              solutions in Kolkata.
            </p>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">
              Quick Links
            </h3>

            <ul className={css.quickLinks}>
              <li>
                <HashLink smooth to={"/#about"}>
                  About Us
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={"/#services"}>
                  Our Services
                </HashLink>
              </li>
              <li>
                <HashLink smooth to={"/#contact"}>
                  Contact Us
                </HashLink>
              </li>
            </ul>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">Others</h3>

            <ul className={css.others}>
              <li
                className="cursor-pointer"
                onClick={() => setIsDisclaimer(true)}
              >
                Disclaimer
              </li>
              <li
                className="cursor-pointer"
                onClick={() => setIsTermsConditions(true)}
              >
                Terms & Conditions
              </li>
            </ul>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">
              Contact Details
            </h3>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <a
                  href={`https://www.google.com/maps/place/Innerwork+Advisors+Limited/@53.4403866,-2.2365731,13.37z/data=!4m15!1m8!3m7!1s0x487bb23d1b061ecd:0x601dafcb617b92db!2s139+Wilbraham+Rd,+Fallowfield,+Manchester+M14+7DS,+UK!3b1!8m2!3d53.4435365!4d-2.2326841!16s%2Fg%2F11bzznpd61!3m5!1s0x487bb1d6def91729:0xf5d3bff6d903b4bc!8m2!3d53.4435365!4d-2.2326841!16s%2Fg%2F11myzncdgy?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  139 Wilbraham Road, Manchester, England M14 7DS, United Kingdom
                </a>
              </div>
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <a
                  href={`https://www.google.com/maps/place/Innerwork+Legal+Services/@22.5721802,88.3490724,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277fbfce91995:0xb2fec491ace6014!8m2!3d22.5721753!4d88.3516473!16s%2Fg%2F11x84szqlw?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor, Kolkata
                  700001 (Working Office)
                </a>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <a
                  href={`https://www.google.com/maps/place/Innerwork+Advisors+LLP/@22.5920516,88.4245678,17z/data=!3m1!4b1!4m6!3m5!1s0x3a02756337d170af:0xc673d796705545b!8m2!3d22.5920516!4d88.4245678!16s%2Fg%2F11yv0w0tbx?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BJ-74, Salt Lake City, Sector II, Kolkata 700091 (Near Araksha
                  Bhawan)
                </a>
              </div>

              <div className="relative flex items-center justify-between gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <a
                  href={`https://www.google.com/maps/place/Innerwork+Advisors+LLP+%7C+Security+Guard+Company+%7C+Best+Security+Agency+in+Kolkata/@22.5770291,88.3490538,17z/data=!3m1!4b1!4m6!3m5!1s0x3a0277bac19f3641:0x165b6efe9eaeba59!8m2!3d22.5770242!4d88.3516287!16s%2Fg%2F11rglqpyvz?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  22, Sukeas Lane, 5th Floor, Kolkata 700001 (Registered Office
                  )
                </a>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <a
                  href={`https://www.google.com/maps?q=CC-165+Street+No+197+New+Town+Kolkata+700156`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CC-165, Street No. 197, New Town, Kolkata – 700156 (Near
                  Fairfield & Biswa Bangla Gate)
                </a>
              </div>

              <div className="flex items-center gap-4">
                <div className="">
                  <i className="fa-solid fa-phone text-secondary"></i>
                </div>
                <div className="">
                  <div>
                    <a href="tel:+919830232051">(+91) 98302 32051</a>
                  </div>
                  <div>
                    <a href="tel:+919830232051">(+91) 90739 32051</a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-secondary"></i>
                <a href="mailto:info@innerworklegalservices.com">
                  info@innerworklegalservices.com
                </a>
              </div>

              <ul
                className={classNames(
                  css.socialIcon,
                  "mt-8 flex items-center justify-center gap-2 text-white md:mt-0 md:justify-start md:gap-6",
                )}
              >
                <li>
                  <a
                    href="https://www.linkedin.com/in/innerwork-legal-services-18507035b"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin-in duration-200 md:hover:text-secondary"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <Modal
          title={"Disclaimer"}
          isOpen={isDisclaimer}
          onClose={() => setIsDisclaimer(false)}
        >
          <div className="flex flex-col gap-4">
            <p>
              <strong className="text-primary-light">
                Acceptance of conditions of the agreement
              </strong>
              <br />
              www.innerworklegalservices.com provides private investigation
              service to the clients based on their request against the
              conditions of this agreement, and by clicking on the “I accept”
              form signifies, your acceptance of all the conditions of this
              agreement.
            </p>

            <p>
              <strong className="text-primary-light">
                Disclaimer of warranties
              </strong>
              <br />
              Clients hereby declare that no contractual or legal liability
              arises against www.innerworklegalservices.com by hiring our
              services and sharing their personal information, the use of which
              is at the sole risk of the client. No notice or advice from any
              client to www.innerworklegalservices.com will create any liability
              whatsoever.
            </p>
          </div>
        </Modal>

        <Modal
          title={"Terms & Conditions"}
          isOpen={isTermsConditions}
          onClose={() => setIsTermsConditions(false)}
        >
          <div className="flex flex-col gap-4">
            <p>
              <strong className="text-primary-light">
                Secrecy of client's information
              </strong>
              <br />
              www.innerworklegalservices.com undertakes to handle the client's
              profile and the personal data like name, address, e-mail,
              telephone number etc. in complete secrecy and no disclosures will
              be made to anyone except where it is required to be disclosed by
              existing or future laws. The data will be used solely for the
              purpose of communicating and internal use only.
            </p>

            <p>
              <strong className="text-primary-light">
                Right to terminate the service
              </strong>
              <br />
              www.innerworklegalservices.com reserves the right to modify, alter
              or discontinue the service, with or without notice to the clients.
              Client's obligations As a client, I undertake to maintain complete
              secrecy of these consultation reports and not to divulge this
              information to anyone. Customers agree to the jurisdiction of
              disputes to Kolkata Courts only.
            </p>
          </div>
        </Modal>
      </Container>
    </footer>
  );
};

export default Footer;
