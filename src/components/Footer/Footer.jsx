import React from "react";
import classNames from "classnames";

import { Container } from "../../components";

import css from "./Footer.module.css";
import { BrandLogo } from "../../assets";

const Footer = (props) => {
  return (
    <footer className="bg-primary-dark flex items-center justify-center">
      <Container>
        <div className="flex w-full flex-wrap py-8 text-white">
          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <img
              src={BrandLogo}
              alt="INNERWORK LEGAL SERVICES"
              className="md:w-[80%]"
            />

            <p data-aos="fade-up" className="mb-4 mt-5 text-white md:w-[80%]">
              Feel free to submit your query to Kolkata's most trusted provider
              of legal services, private investigation and man power provider
              solutions in Kolkata.
            </p>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">
              Quick Links
            </h3>

            <ul data-aos="fade-up" className={css.quickLinks}>
              <li>About Us</li>
              <li>Our Services</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">Others</h3>

            <ul data-aos="fade-up" className={css.others}>
              <li>Disclaimer</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>

          <div className="w-full flex-auto md:w-[50%] lg:w-[25%]">
            <h3 className="mb-5 text-[20px] font-semibold uppercase">
              Contact Details
            </h3>

            <div data-aos="fade-up" className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <span>22, Sukeas Lane, 5th Floor, Kolkata 700001</span>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-signs-post text-secondary"></i>
                <span>
                  Ground Floor, Martin Burn Building 1 No, RN Mukherjee Rd,
                  Kolkata 700001
                </span>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-secondary"></i>
                <span>(+91) 98302 32051</span>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-secondary"></i>
                <span>(+91) 82400 30578</span>
              </div>

              <div className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-secondary"></i>
                <span>innerworkadvisors@gmail.com</span>
              </div>

              <ul
                className={classNames(
                  css.socialIcon,
                  "mt-8 flex items-center justify-center gap-6 text-white md:mt-0 md:justify-start",
                )}
              >
                <a href="https://github.com/supratim531">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
                <a href="https://github.com/supratim531">
                  <i className="fa-brands fa-twitter"></i>
                </a>
                <a href="https://github.com/supratim531">
                  <i className="fa-brands fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/supratim531">
                  <i className="fa-brands fa-instagram text-lg"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>

        <div></div>
      </Container>
    </footer>
  );
};

export default Footer;
