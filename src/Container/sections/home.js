import { Link } from "react-scroll";
import { HiArrowNarrowRight, HiOutlineMail } from "react-icons/hi";
import DeviceObserver from "../../Hooks/deviceDetect";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import "./home.css";

const Home = () => {
  const { isMobile } = DeviceObserver();
  return isMobile ? (
    <div name="home" className="flex justify-center items-center">
      <div className="flex flex-col items-center justify-start gap-10">
        <img
          src={process.env.PUBLIC_URL + "/assets/me.jpg"}
          style={{
            width: "40%",
            height: "40%",
            borderRadius: "100%",
          }}
          data-testid="myPic"
          alt="myPic"
        />
        <div className="flex gap-1">
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
        <div className="flex flex-row">
          <ul className="flex gap-3">
            <li className="scale-100 z-10 hover:scale-125 hover:z-50 w-14 h-14 flex items-center bg-blue-600 rounded-md transition-all duration-300 ease-in-out transform">
              <a
                href="https://www.linkedin.com/in/aditi-saxena-a781a51a0/"
                className="flex justify-between items-center w-full text-gray-300 px-4 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </li>
            <li className="scale-100 z-10 hover:scale-125 hover:z-50 w-14 h-14 flex items-center bg-[#293136] rounded-md transition-all duration-300 ease-in-out transform">
              <a
                href="https://github.com/aditi270800"
                className="flex justify-between items-center w-full text-gray-300 px-4 cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={30} />
              </a>
            </li>
            <li className="scale-100 z-10 hover:scale-125 hover:z-50 w-14 h-14 flex items-center bg-[#90EE90] rounded-md transition-all duration-300 ease-in-out transform">
              <a
                href="mailto:adirak2708@gmail.com"
                className="flex justify-between items-center w-full text-black px-4 cursor-pointer"
              >
                <HiOutlineMail size={30} />
              </a>
            </li>
            <li className="scale-100 z-10 hover:scale-125 hover:z-50w-14 h-14 flex items-center bg-[#fad7d7] rounded-md transition-all duration-300 ease-in-out transform">
              <button
                // href="#"
                // role="button"
                onClick={(e) => {
                  e.preventDefault();
                  const phoneNumber = "+91-8630381537";
                  const tempInput = document.createElement("input");
                  document.body.appendChild(tempInput);
                  tempInput.value = phoneNumber;
                  tempInput.select();
                  document.execCommand("copy");
                  document.body.removeChild(tempInput);
                  setTimeout(() => {
                    window.location.href = `tel:${phoneNumber}`;
                  }, 100);
                }}
                className="flex justify-between items-center w-full text-black px-4 cursor-pointer"
              >
                <BsFillPersonLinesFill size={30} />
              </button>
            </li>
          </ul>
        </div>
        <h3>
          A UI/UX Designer who turns user needs into seamless, stylish designs.
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
      </div>
    </div>
  ) : (
    <div name="home" className="flex justify-around items-center">
      <div className="flex lg:flex-row items-start justify-start lg:gap-24">
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
