import React from "react";
import DeviceObserver from "../../Hooks/deviceDetect";

const About = () => {
  const { isMobile } = DeviceObserver();
  return isMobile ? (
    <div className="flex flex-col bg-[#606060] p-8 justify-center items-center gap-5 rounded-md mt-20">
      <h2 className="text-2xl font-bold">About</h2>
      <div className="flex flex-col lg:flex-row items-center sm-gap-16 gap-10">
        <h1 className="text-2xl font-bold text-[#d98b19]">
          Holaa, A little intro about myself..
        </h1>
        <h5>
          Frontend Developer with 3+ years of experience in React.js, passionate
          about crafting intuitive user interfaces and solving complex UI
          challenges. I thrive on building high-quality, collaborative solutions
          that elevate user experience.
        </h5>
      </div>
    </div>
  ) : (
    <div className="flex flex-col bg-[#606060] p-10 justify-center items-center gap-5 rounded-md">
      <h2 className="text-2xl font-bold">About</h2>
      <div className="flex flex-col lg:flex-row items-center sm-gap-16 gap-10">
        <h1 className="text-4xl font-bold text-[#d98b19]">
          Holaa, A little intro about myself..
        </h1>
        <h5>
          I am a dedicated Frontend Developer with over 3+ years of experience
          specializing in React.JS and modern development practices. My passion
          for solving complex problems and delivering seamless user experiences
          drives my focus on team collaboration and project leadership. I excel
          at enhancing user engagement through innovative solutions while
          maintaining high coding standards.
        </h5>
      </div>
    </div>
  );
};

export default About;
