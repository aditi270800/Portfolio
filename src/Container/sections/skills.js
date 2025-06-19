import React from "react";

const Skills = () => {
  const skills = [
    "React JS",
    "React JSS",
    "Redux",
    "HTML5",
    "CSS3",
    "Javascript",
    "Typescript",
    "Bootstrap",
    "TailwindCSS",
    "Material UI",
    "Git",
    "npm",
    "VS Code",
    "Postman",
    "JIRA",
    "Jest",
    "React Testing Library",
    "Netlify",
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col">
        <p className="text-4xl font-bold inline border-b-4 border-[#d98b19] text-[#d98b19] text-center">
          Skills
        </p>
        <p>Things I can Do..</p>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 text-center cursor-pointer">
        {skills.map((res, index) => {
          return (
            <p
              key={index}
              className="rounded-sm shadow-md shadow-[#040c16] border-[#606060] p-2 hover:shadow-md hover:shadow-[#040c16] hover:scale-110 duration-500 hover:bg-[#d98b19] hover:border-[#d98b19]"
            >
              {res}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
