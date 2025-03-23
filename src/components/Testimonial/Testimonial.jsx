import React from "react";
import classNames from "classnames";

import { Section, Container } from "../../components";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import css from "./Testimonial.module.css";
import { testimonials, QuoteImage, LargeQuoteImage } from "../../assets";

const Testimonial = () => {
  return (
    <article
      className={css.root}
      style={{
        backgroundImage: `url(${LargeQuoteImage})`,
      }}
    >
      <Container>
        <Section
          className="!my-0 py-8 md:py-16"
          title={"What they Say"}
          label={"Testimonials"}
          description={
            "With numerous successful outcomes and satisfied clients, we have established ourselves as a beacon of excellence in Kolkata's legal and investigative communities."
          }
        >
          <div
            className="py-10"
            // className={classNames(css.root, "py-10")}
            // style={{
            //   backgroundImage: `url(${LargeQuoteImage})`,
            // }}
          >
            <div data-aos="fade-up">
              <Swiper
                loop
                navigation={true}
                className={classNames(css.customSwiper, "flex items-center")}
                autoplay={{
                  delay: 6000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay, Navigation]}
              >
                {testimonials.map((testimonial) => (
                  <SwiperSlide key={testimonial.name}>
                    <article className="mx-auto flex w-[80%] flex-col gap-y-2">
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-400">
                        {testimonial.image ? (
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="h-24 w-24 rounded-full"
                          />
                        ) : (
                          <i className="fa-solid fa-user text-3xl"></i>
                        )}
                      </div>

                      <div>
                        <div className="text-2xl font-semibold text-primary-dark">
                          {testimonial.name}
                        </div>
                        <div className="font-semibold text-secondary">
                          {testimonial.business}
                        </div>
                      </div>

                      <p className="mt-4 text-xl italic">
                        <img
                          alt={`"`}
                          src={QuoteImage}
                          className="relative -top-2.5 inline w-4"
                        />
                        <span>{testimonial.quote}</span>
                        <img
                          alt={`"`}
                          src={QuoteImage}
                          className="relative -top-2.5 inline w-4 rotate-180"
                        />
                      </p>
                    </article>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </Section>
      </Container>
    </article>
  );
};

export default Testimonial;
