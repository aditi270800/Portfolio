import React, { useEffect, useState } from "react";
import { Link, scroller } from "react-scroll";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import DeviceObserver from "../Hooks/deviceDetect";

const Header = () => {
  const { isMobile } = DeviceObserver();
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setNav(!nav);

  const leftNavOption = [
    { path: "home", label: "Home" },
    { path: "about", label: "About" },
    { path: "skills", label: "Skills" },
    { path: "project", label: "Project" },
    { path: "resume", label: "Resume" },
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToHash = () => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      window.location.hash = "#home";
      scroller.scrollTo(hash, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    }
  };

  useEffect(() => {
    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  const handleSetActive = (section) => {
    setNav(false);
    window.history.replaceState(null, "", `#${section}`);
  };

  const handleResumeDownload = (e) => {
    if (isMobile) {
      e.preventDefault();
      e.stopPropagation();
    }
    window.open(
      process.env.PUBLIC_URL + "/assets/Aditi_Saxena_Resume.pdf",
      "_blank"
    );
    setNav(false);
  };

  const handlePhoneClick = (e) => {
    e.preventDefault();
    const phoneNumber = "+91-8630381537";
    navigator.clipboard.writeText(phoneNumber).then(() => {
      setTimeout(() => {
        window.location.href = `tel:${phoneNumber}`;
      }, 100);
    });
  };

  return (
    <>
      {/* Main Header */}
      <header
        className={`fixed w-full h-20 flex justify-between items-center px-4 lg:px-8 text-white z-50 transition-all duration-300 ${
          !scrolled
            ? "bg-gradient-to-r from-[#272727] via-[#343434] to-[#4e4e4e]"
            : "bg-gradient-to-r from-[#272727] via-[#343434] to-[#4e4e4e]"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={process.env.PUBLIC_URL + "/assets/myLogo.png"}
            className="hover:cursor-pointer w-12 h-12 lg:w-16 lg:h-16 rounded-full border-2 transition-colors duration-300"
            alt="Aditi Saxena Logo"
          />
        </div>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="hidden md:flex items-center space-x-8">
            {leftNavOption.map((item, index) => (
              <div key={index} className="relative group">
                {item.path === "resume" ? (
                  <a
                    href={
                      process.env.PUBLIC_URL + "/Assets/Aditi_saxena_resume.pdf"
                    }
                    download="Aditi_Saxena_Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#d98b19] transition-colors duration-300 font-medium relative py-2"
                    onClick={handleResumeDownload}
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d98b19] transition-all duration-300 group-hover:w-full"></span>
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    smooth={true}
                    spy={true}
                    duration={500}
                    offset={-80}
                    className="text-white hover:text-[#d98b19] transition-colors duration-300 font-medium relative py-2 cursor-pointer"
                    onSetActive={handleSetActive}
                    activeClass="text-[#d98b19]"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d98b19] transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </nav>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={handleClick}
            className="z-50 p-2 rounded-lg bg-gray-700 hover:bg-gray-600 transition-colors duration-300"
          >
            {!nav ? (
              <FaBars size={20} className="text-white" />
            ) : (
              <FaTimes size={20} className="text-white" />
            )}
          </button>
        )}

        {/* Mobile Navigation Menu */}
        {isMobile && (
          <div
            className={`fixed inset-0 bg-gradient-to-br from-[#272727] via-[#343434] to-[#4e4e4e] transform transition-transform duration-500 ease-in-out ${
              nav ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col justify-center items-center h-full space-y-8">
              {leftNavOption.map((item, index) => (
                <div
                  key={index}
                  className={`transform transition-all duration-500 ease-out ${
                    nav
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {item.path === "resume" ? (
                    <a
                      href={
                        process.env.PUBLIC_URL +
                        "/Assets/Aditi_saxena_resume.pdf"
                      }
                      download="Aditi_Saxena_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white text-3xl font-light hover:text-[#d98b19] transition-colors duration-300"
                      onClick={handleResumeDownload}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      smooth={true}
                      spy={true}
                      duration={500}
                      offset={-80}
                      className="text-white text-3xl font-light hover:text-[#d98b19] transition-colors duration-300 cursor-pointer"
                      onSetActive={handleSetActive}
                      onClick={() => setNav(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </header>
      {!isMobile && (
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
                onClick={handlePhoneClick}
                className="flex justify-between items-center w-full text-black px-4 cursor-pointer"
              >
                Phone <BsFillPersonLinesFill size={30} />
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Header;
