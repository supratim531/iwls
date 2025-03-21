import React from "react";

import { Container } from "../../components";

import { HeroVideo } from "../../assets";

const Hero = (props) => {
  return (
    <React.Fragment>
      <section
        id="hero"
        data-aos="fade-in"
        className="flex min-h-screen w-full items-center justify-center text-white"
      >
        <Container className="flex flex-col justify-center gap-4">
          <h2
            data-aos="fade-up"
            className="m-0 text-[32px] font-bold uppercase md:text-5xl"
          >
            Innovate. Build. Succeed.
          </h2>

          <p data-aos="fade-up" className="text-lg md:text-2xl">
            Empowering businesses with stunning websites, seamless applications,
            and top-notch support—crafted to perfection.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row">
            <button className="bg-primary-light hover:bg-primary-dark w-full rounded-md border-2 border-transparent py-3 duration-200 sm:w-44">
              Book Consultation
            </button>

            <button className="hover:text-secondary w-full rounded-md border-2 border-white bg-transparent py-3 duration-200 hover:border-white hover:bg-white sm:w-44">
              Contact Us
            </button>
          </div>
        </Container>

        <div className="absolute right-0 top-0 z-[-1] h-full w-full bg-gradient-to-br from-black to-transparent">
          <video
            className="h-full w-full object-cover brightness-[0.5]"
            src={HeroVideo}
            autoPlay
            loop
            muted
            playsInline
          />
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
