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

        <div className="absolute right-0 top-0 z-[-1] h-full w-full bg-gradient-to-br from-black to-transparent shadow-[0_5px_12px_-2px_black]">
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
