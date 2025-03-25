import React from "react";
import classNames from "classnames";

import { Container, Odometer } from "../../components";

import css from "./CaseStatistics.module.css";
import { CaseStatisticsImage } from "../../assets";

const CaseStatistics = () => {
  return (
    <article
      className={css.root}
      style={{
        backgroundImage: `url(${CaseStatisticsImage})`,
      }}
    >
      <Container>
        <div className="flex w-full items-center py-8 md:py-16">
          <div className={classNames(css.grid, "flex-grow")}>
            <div className="flex h-[150px] flex-col items-center justify-center gap-2 rounded bg-[#c0b59633] px-4 sm:h-[160px] md:h-[240px]">
              <h4 className="flex items-center text-center text-2xl font-semibold text-white sm:text-4xl">
                <Odometer number={90} />%
              </h4>
              <p className="text-center font-medium text-secondary sm:text-xl">
                Cases Won
              </p>
            </div>
            <div className="flex h-[150px] flex-col items-center justify-center gap-2 rounded bg-[#c0b59633] px-4 sm:h-[160px] md:h-[240px]">
              <h4 className="flex items-center text-center text-2xl font-semibold text-white sm:text-4xl">
                <Odometer number={70} />+
              </h4>
              <p className="text-center font-medium text-secondary sm:text-xl">
                Trusted Client
              </p>
            </div>
            <div className="flex h-[150px] flex-col items-center justify-center gap-2 rounded bg-[#c0b59633] px-4 sm:h-[160px] md:h-[240px]">
              <h4 className="flex items-center text-center text-2xl font-semibold text-white sm:text-4xl">
                <Odometer number={25} />+
              </h4>
              <p className="text-center font-medium text-secondary sm:text-xl">
                Dedicated Lawyer
              </p>
            </div>
            <div className="flex h-[150px] flex-col items-center justify-center gap-2 rounded bg-[#c0b59633] px-4 sm:h-[160px] md:h-[240px]">
              <h4 className="flex items-center text-center text-2xl font-semibold text-white sm:text-4xl">
                <Odometer number={30} />%
              </h4>
              <p className="text-center font-medium text-secondary sm:text-xl">
                Case Dismissed
              </p>
            </div>
          </div>
          <div className="hidden lg:block lg:w-[50%]"></div>
        </div>
      </Container>
    </article>
  );
};

export default CaseStatistics;
