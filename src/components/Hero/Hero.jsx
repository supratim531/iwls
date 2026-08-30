import React from "react";

import { Container } from "../../components";



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
            <div className="flex flex-col gap-2">
              <h1
                data-aos="fade-up"
                className="sm:text-xg m-0 text-lg font-bold capitalize md:hidden md:text-2xl"
              >
                Best Legal Service Provider in Kolkata
              </h1>

              <span
                data-aos="fade-up"
                className="sm:text-xl md:hidden md:text-xl"
              >
                Innerwork Legal Services is a leading law firm in Kolkata
                dedicated to upholding justice and providing comprehensive legal
                support.
              </span>
            </div>

            <div className="flex flex-col-reverse gap-4 md:flex-row md:justify-between md:gap-10">
              <div className="flex flex-col gap-2">
                <h1
                  data-aos="fade-up"
                  className="sm:text-xg m-0 hidden text-lg font-bold capitalize md:block md:text-2xl"
                >
                  Best Legal Service Provider in Kolkata
                </h1>

                <span
                  data-aos="fade-up"
                  className="hidden sm:text-lg md:block md:text-xl"
                >
                  Innerwork Legal Services is a leading law firm in Kolkata
                  dedicated to upholding justice and providing comprehensive
                  legal support.
                </span>

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
                    href="#footer"
                    className="w-full rounded-md border-2 border-white bg-transparent py-3 text-center font-medium duration-200 hover:border-white hover:bg-white hover:text-secondary sm:w-44"
                  >
                    Contact Us
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-start justify-center gap-2">
                <div data-aos="fade-up" className="flex items-center gap-2">
                  <div>
                    <i className="fa-solid fa-phone text-secondary"></i>
                  </div>
                  <div>
                    <a href="tel:+919830232051">+91 98302 32051 </a>
                    <div> 
                    <a href="tel:+919073932051">+91 90739 32051 </a>
                    </div>
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
                        target="noopener"
                      >
                        1 R.N. Mukherjee Rd
                      </a>
                    </li>
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
            </div>
          </div>
        </Container>

        <div
          style={{
            background: `linear-gradient(-45deg, #0000004d, #0009), url(https://www.innerworklegalservices.com/images/hero.webp) no-repeat center / cover`,
            backgroundColor: "rgba(0, 0, 0, 0.3)",
          }}
          className="absolute right-0 top-0 z-[-1] h-full w-full"
        ></div>
      </section>
    </React.Fragment>
  );
};

export default Hero;
