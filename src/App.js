import React, { lazy } from "react";
import Header from "./Components/header";
const HomeSection = lazy(() => import("./Container/sections/home"));
const AboutSection = lazy(() => import("./Container/sections/about"));
const SkillsSection = lazy(() => import("./Container/sections/skills"));
const ProjectSection = lazy(() => import("./Container/sections/project"));
// const ContactSection = lazy(() => import("./Container/sections/contact"));

const App = () => {
  // const classes = useStyles();
  return (
    <div className="flex flex-col bg-[#343434] text-white">
      <Header />
      <div className="flex flex-col m-10 gap-56 pt-12">
        <section id="home" className="h-[max-content]">
          <HomeSection />
        </section>
        <section id="about" className="h-[max-content]">
          <AboutSection />
        </section>
        <section id="skills" className="h-[max-content]">
          <SkillsSection />
        </section>
        <section id="project" className="h-[max-content]">
          <ProjectSection />
        </section>
        {/* <section
          id="contact"
          style={{
            // height: "100vh",
            padding: "20px",
            backgroundColor: "#343434",
          }}
        >
          <ContactSection />
        </section> */}
      </div>
    </div>
  );
};

export default App;
