import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="  text-gray-300  w-full bg-[#0a192f] md:h-screen "
    >
      <div className="flex flex-col justify-center items-center h-full w-full ">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-yellow-400">
              About
            </p>
          </div>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-3xl  font-bold">
            <p className="">
              Hi. I'm <span className="text-yellow-300">Saichand Bandi,</span> nice to
              meet you. Please take a look around on my profile.
            </p>
          </div>

          <div className="">
            <p>
              \\\ Hi there! I'm a data scientist like a business detective who gathers
              data to solve problems and improve performance. We
              clean, analyze, and visualize data to uncover trends, identify
              opportunities, and communicate insights to stakeholders. Data
              analysts are the bridge between data and decision-making, using
              their findings to recommend solutions and track progress."
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
