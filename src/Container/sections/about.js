import React from "react";

const About = () => {
  return (
    <div className="flex items-center justify-center">
      {/* <h3>About</h3> */}
      <div className="flex flex-col bg-[#606060] p-10 justify-center items-center gap-5 rounded-md">
        <h2 className="text-2xl font-bold">About</h2>
        <div className="flex flex-col lg:flex-row items-center sm-gap-16 gap-10">
          <h1 className="text-4xl font-bold text-[#d98b19]">Holaa, A little intro about myself..</h1>
          {/* <h1 className="text-4xl font-bold"></h1> */}
          <h5>
            I am a dedicated Frontend Developer with over 3+ years of experience
            specializing in React.JS and modern development practices. My
            passion for solving complex problems and delivering seamless user
            experiences drives my focus on team collaboration and project
            leadership. I excel at enhancing user engagement through innovative
            solutions while maintaining high coding standards.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default About;
