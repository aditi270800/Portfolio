import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import DeviceObserver from "../Hooks/deviceDetect"; // Assuming this path is correct

const Header = () => {
  const { isMobile } = DeviceObserver();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // Define navigation options for the header
  const leftNavOption = [
    { path: "home", label: "Home" },
    { path: "about", label: "About" },
    { path: "skills", label: "Skills" },
    { path: "project", label: "Project" },
    { path: "resume", label: "Resume" }, // Path for the resume link
    // { path: "contact", label: "Contact" }, // Commented out as in original
  ];

  // Function to scroll to a section based on URL hash
  const scrollToHash = () => {
    const hash = window.location.hash.slice(1); // Remove the "#" symbol from the URL hash
    if (hash) {
      // Set the hash to '#home' to prevent unintended scrolling if the hash doesn't match a section
      window.location.hash = "#home";
      scroller.scrollTo(hash, {
        duration: 800, // Smooth scroll duration
        delay: 0,
        smooth: "easeInOutQuart", // Easing function for smooth scroll
        offset: -80, // Offset to account for fixed header height
      });
    }
  };

  // useEffect hook to handle initial scroll and hash changes
  useEffect(() => {
    // Scroll to the section on initial load
    scrollToHash();

    // Listen for hash changes and scroll to the section
    window.addEventListener("hashchange", scrollToHash);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []); // Empty dependency array ensures this runs only once on mount

  // Callback function for react-scroll's onSetActive
  const handleSetActive = (section) => {
    // Update the hash in the URL to reflect the active section
    setNav(false); // Close mobile navigation when a link is clicked
    window.history.replaceState(null, "", `#${section}`);
  };

  // Function to handle resume download
  const handleResumeDownload = (e) => {
    // Prevent default scroll behavior of react-scroll if on mobile
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
    }
    // Open the resume PDF in a new tab, which typically prompts a download
    window.open(
      process.env.PUBLIC_URL + "/assets/Aditi_Saxena_Resume.pdf",
      "_blank"
    );
    // Ensure mobile nav closes after clicking resume
    setNav(false);
  };

  return (
    <div className="fixed w-full h-[80px] bg-[#343434] flex justify-between items-center p-4 text-white z-50">
      {/* Company Logo */}
      <img
        src={process.env.PUBLIC_URL + "/assets/myLogo.png"}
        className="w-[100px] h-[100px]"
        alt="company_logo"
      />

      {/* Mobile Navigation */}
      {isMobile ? (
        <>
          <div onClick={handleClick} className="z-10 cursor-pointer">
            {!nav ? <FaBars size={20} /> : <FaTimes color="black" size={20} />}
          </div>
          <div
            className={
              !nav
                ? "hidden"
                : "absolute top-0 left-0 w-full h-screen bg-[#f6f5f3] flex flex-col justify-center items-center"
            }
          >
            {leftNavOption.map((res, key) => (
              <div className="py-6 text-4xl" key={key}>
                {res.path === "resume" ? (
                  // Render a regular anchor tag for resume download
                  <a
                    href={
                      process.env.PUBLIC_URL + "/Assets/Aditi_saxena_resume.pdf"
                    }
                    download="Aditi_Saxena_Resume.pdf" // Suggests a filename for download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black no-underline cursor-pointer hover:text-gray-900"
                    onClick={handleResumeDownload}
                  >
                    {res.label}
                  </a>
                ) : (
                  // Render react-scroll Link for other sections
                  <Link
                    to={res.path}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-80}
                    className="text-black no-underline cursor-pointer hover:text-gray-900"
                    onSetActive={handleSetActive}
                    onClick={() => setNav(false)} // Close mobile nav on click
                  >
                    {res.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </>
      ) : (
        // Desktop Navigation
        <div className="flex gap-[30px] flex-row">
          {leftNavOption.map((res, key) => (
            <div className="self-center hidden sm:flex gap-x-8" key={key}>
              {res.path === "resume" ? (
                // Render a regular anchor tag for resume download
                <a
                  href={
                    process.env.PUBLIC_URL + "/Assets/Aditi_saxena_resume.pdf"
                  }
                  download="Aditi_Saxena_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white no-underline cursor-pointer hover:text-gray-900"
                  onClick={handleResumeDownload}
                >
                  {res.label}
                </a>
              ) : (
                // Render react-scroll Link for other sections
                <Link
                  to={res.path}
                  smooth={true}
                  spy={true}
                  duration={500}
                  offset={-80}
                  className="text-white no-underline cursor-pointer hover:text-gray-900"
                  onSetActive={handleSetActive}
                >
                  {res.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Social Media Links (Fixed on Left) */}
      <div className="flex lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 rounded-md">
            <a
              href="https://www.linkedin.com/in/aditi-saxena-a781a51a0/"
              className="flex justify-between items-center w-full text-gray-300 px-4 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#293136] rounded-md">
            <a
              href="https://github.com/aditi270800"
              className="flex justify-between items-center w-full text-gray-300 px-4 cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#90EE90] rounded-md">
            <a
              href="mailto:adirak2708@gmail.com"
              className="flex justify-between items-center w-full text-black px-4 cursor-pointer"
            >
              Gmail <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-40 h-14 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#fad7d7] rounded-md">
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
              Phone <BsFillPersonLinesFill size={30} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
