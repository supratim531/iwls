import React, { useState } from "react";

import {
  Modal,
  Section,
  Container,
  TeamSwiper,
  // AnimatedCounter,
} from "../../components";

const Team = () => {
  const [member, setMember] = useState(null);
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <Container>
      <Section
        title={"Our Team"}
        label={"Experts At Work"}
        description={
          "For years, we have built a legacy of success based on integrity, dedication, and relentless advocacy. Our proven track record is a testament to our ability to navigate complex legal challenges and achieve favourable results for our clients."
        }
      >
        <div className="flex flex-col justify-between gap-x-10 gap-y-10 py-10 lg:flex-row lg:gap-y-0">
          <div
            data-aos="fade-up"
            className="custom-scrollbar flex w-full flex-col overflow-y-scroll lg:h-[360px] lg:w-[30%]"
          >
            <h3 className="text-[18px] font-semibold leading-6 text-primary-dark lg:text-[24px] lg:leading-8">
              {member?.name}
            </h3>

            <div className="text-secondary">
              {typeof member?.experience === "number" ? (
                // <span>
                //   has{" "}
                //   <AnimatedCounter
                //     from={0}
                //     to={member?.experience}
                //     once={true}
                //     animationOptions={{
                //       duration: 2,
                //     }}
                //   />
                //   + year of experience
                // </span>
                <span>has {member?.experience}+ year of experience</span>
              ) : (
                <span>{member?.experience}</span>
              )}
            </div>

            {/* <div className="text-sm text-primary-light">has</div>

            <h3 className="w-[80%] truncate text-secondary">
              {typeof member?.experience === "number" ? (
                <span>
                  <strong className="text-3xl">
                    <AnimatedCounter
                      from={0}
                      to={member?.experience}
                      once={true}
                      animationOptions={{
                        duration: 2,
                      }}
                    />
                    {"+"}
                  </strong>{" "}
                  year of experience
                </span>
              ) : (
                <span>{member?.experience}</span>
              )}
            </h3> */}

            <p className="mt-4 pr-4 text-primary-light">
              {member?.description}
            </p>
          </div>

          <div className="w-full lg:w-[70%]">
            <TeamSwiper
              setMember={setMember}
              setSelectedMember={setSelectedMember}
            />
          </div>
        </div>
      </Section>

      <Modal
        title="Team Member Information"
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
      >
        <div className="text-center">
          <h2 className="mb-2 text-xl font-semibold capitalize text-primary-light">
            {selectedMember?.name}
          </h2>
          <img
            src={selectedMember?.image}
            alt={selectedMember?.name}
            className="mx-auto mb-3 h-24 w-24 rounded-full"
          />
          <p className="mt-2 text-sm font-semibold text-secondary">
            {selectedMember?.details}
          </p>
          <p className="mt-2 text-justify text-sm text-gray-600">
            {selectedMember?.extra}
          </p>
          <button
            onClick={() => setSelectedMember(null)}
            className="mt-4 rounded-md bg-red-600 px-4 py-2 text-white"
          >
            Close
          </button>
        </div>
      </Modal>
    </Container>
  );
};

export default Team;
