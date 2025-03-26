import React from "react";

import { Container } from "../../components";

import { HeroImage } from "../../assets";

const Hero = (props) => {
  return (
    <React.Fragment>
      <section
        id=""
        data-aos="fade-in"
        className="flex min-h-screen w-full items-center justify-center text-white"
      >
        <Container className="h-[80vh]">
          <div className="flex h-full flex-col justify-between gap-4 self-stretch pt-10 md:pt-16">
            <div className="flex flex-col items-start justify-center gap-2">
              <div data-aos="fade-up" className="flex items-center gap-2">
                <div>
                  <i className="fa-solid fa-phone text-secondary"></i>
                </div>
                <div>
                  <a href="tel:+919830232051">+91 98302 32051</a>
                  {/* <div>+91 82400 30578</div> */}
                </div>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-2">
                <div>
                  <i className="fa-solid fa-signs-post text-secondary"></i>
                </div>
                <ol>
                  <li>
                    <a
                      href={`https://www.google.com/maps?q=${"Martin Burn House, 1 R.N. Mukherjee Rd, Gr Floor, Kolkata 700001"}`}
                      target="_blank"
                    >
                      RN Mukherjee Rd
                    </a>
                  </li>
                  {/* <li>Sukeas Lane</li> */}
                </ol>
              </div>

              <div data-aos="fade-up" className="flex items-center gap-2">
                <div>
                  <i className="fa-solid fa-envelope text-secondary"></i>
                </div>
                <div>
                  <a href="mailto:info@innerworklegalservices.com">
                    info@innerworklegalservices.com
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2
                data-aos="fade-up"
                className="sm:text-xg m-0 text-lg font-bold uppercase md:text-2xl"
              >
                {/* Comprehensive Legal Solutions. Unmatched Expertise. */}
                Legal Solutions. Unmatched Expertise.
                {/* Innovate. Build. Succeed. */}
              </h2>

              <p data-aos="fade-up" className="sm:text-lg md:text-xl">
                Upholding justice, navigating laws, safeguarding rights,
                ensuring fairness and accountability.
                {/* Empowering businesses with stunning websites, seamless
                applications, and top-notch support—crafted to perfection. */}
              </p>

              <div className="mt-1 flex flex-col items-center gap-4 sm:flex-row">
                <a
                  type="button"
                  href="#contact"
                  className="w-full rounded-md border-2 border-transparent bg-white py-3 text-center font-medium text-primary-dark duration-200 hover:bg-secondary hover:text-white sm:w-44"
                >
                  Book Consultation
                </a>
                <a
                  type="button"
                  href="#contact"
                  className="w-full rounded-md border-2 border-white bg-transparent py-3 text-center font-medium duration-200 hover:border-white hover:bg-white hover:text-secondary sm:w-44"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>

        <div
          style={{
            background: `linear-gradient(-45deg, #0000004d, #0009), url(${HeroImage}) no-repeat`,
            backgroundPosition: "center",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
          className="absolute right-0 top-0 z-[-1] h-full w-full bg-gradient-to-br from-black to-transparent !bg-contain"
        >
          {/* <video
            className="h-full w-full object-cover brightness-[0.5]"
            src={HeroVideo}
            autoPlay
            loop
            muted
            playsInline
          /> */}
        </div>
      </section>

      {/* <section
        id="hero"
        data-aos="fade-in"
        className="flex min-h-screen w-full items-center justify-center text-white"
        style={{
          background: `linear-gradient(-45deg, #0000004d, #0009), url(${HeroImage}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
        }}
      >
        <Container className="flex flex-col items-center justify-center">
          <h2
            data-aos="fade-up"
            className="m-0 text-[32px] font-bold uppercase md:text-5xl"
          >
            Innovate. Build. Succeed.
          </h2>

          <p data-aos="fade-up" className="mt-[10px] text-lg md:text-2xl">
            Empowering businesses with stunning websites, seamless applications,
            and top-notch support—crafted to perfection.
          </p>
        </Container>
      </section> */}
    </React.Fragment>
  );
};

export default Hero;
