import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";
import "./home.css";

const Home = () => {
  return (
    <div name="home" className="flex justify-around items-center">
      <div className="flex flex-col lg:flex-row items-start justify-start lg:gap-24">
        <img
          src={process.env.PUBLIC_URL + "/assets/me.jpg"}
          style={{
            width: "30%",
            height: "30%",
            borderRadius: "100%",
            marginTop: "6%",
          }}
          // className={classes.imgLogo}
          data-testid="myPic"
          alt="myPic"
        />
        <div className="flex items-start flex-col justify-start mt-30">
          <div className="flex pt-14">
            <span class="key">A</span>
            <span class="key">D</span>
            <span class="key">I</span>
            <span class="key">T</span>
            <span class="key">I</span>&nbsp; &nbsp;<span class="key">S</span>
            <span class="key">A</span>
            <span class="key">X</span>
            <span class="key">E</span>
            <span class="key">N</span>
            <span class="key">A</span>
          </div>
          <h3>
            A UI/UX Designer who turns user needs into seamless, stylish
            designs.
          </h3>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="group text-[#343434] w-fit px-4 py-2 my-2 flex items-center rounded-md bg-[#d98b19] cursor-pointer font-semibold"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
          <h5 className="lg:mt-[8%] lg:ml-[25%]">
            A Frontend Developer with 3 years of experience in React.JS, focused
            on solving problems, delivering seamless user experiences, and
            enhancing engagement through innovative solutions.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
