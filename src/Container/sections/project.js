import { FaReact, FaCss3Alt, FaVial, FaMobileAlt, FaNetworkWired, FaRoute, FaWpforms } from "react-icons/fa";

const iconMap = {
  "React JS": <FaReact className="text-[#61dafb]" />, // light blue
  "React TS": <FaReact className="text-[#007acc]" />, // typescript
  "Styling": <FaCss3Alt className="text-[#264de4]" />,
  "Unit Testing": <FaVial className="text-[#facc15]" />,
  "Responsiveness": <FaMobileAlt className="text-[#22c55e]" />,
  "Data Fetching": <FaNetworkWired className="text-[#38bdf8]" />,
  "State Management": <FaNetworkWired className="text-[#f97316]" />,
  "Routing": <FaRoute className="text-[#8b5cf6]" />,
  "Forms and Validation": <FaWpforms className="text-[#ef4444]" />,
};

const Project = () => {
    const projectsOverview = [
    {
      display: "Portfolio",
      value: "portfolio",
      description:
        "A personal portfolio website showcasing professional experience, projects, and skills using modern frontend technologies.",
      requirements: [
        {
          name: "React JS",
          discription:
            "Uses modern JavaScript (ES6+) features to create efficient and reusable UI components.",
        },
        {
          name: "Styling",
          discription: "Used tailwind css for styling purposes",
        },
        {
          name: "Unit Testing",
          discription:
            "Used react-testing-library and jest for writing unit test cases",
        },
        {
          name: "Responsiveness",
          discription: "Mobile, Tab and Desktop Responsive",
        },
        {
          name: "State Management",
          discription: "Used useState hook for local state management",
        },
        {
          name: "Routing",
          discription: "Used react-scroll for moving between screens",
        },
      ],
    },
    {
      display: "Orange Retailer Portal (Ivory Coast and Burkina Faso)",
      value: "oci",
      description:
        "A retailer management portal for Orange, tailored for Ivory Coast and Burkina Faso, enabling user onboarding and transaction workflows.",
      requirements: [
        {
          name: "React JS",
          discription:
            "Uses modern JavaScript (ES6+) features to create efficient and reusable UI components.",
        },
        {
          name: "Styling",
          discription: "Used React JSS for styling purposes",
        },
        {
          name: "Unit Testing",
          discription:
            "Used react-testing-library and jest for writing unit test cases",
        },
        {
          name: "Responsiveness",
          discription: "Mobile, Tab and Desktop Responsive",
        },
        {
          name: "Data Fetching",
          discription: "Used axios for rendering data dynamically from APIs",
        },
        {
          name: "State Management",
          discription:
            "Used useState hook for local state management and Context API for small global state",
        },
        {
          name: "Routing",
          discription: "Used react-router-dom for routing between screens",
        },
        {
          name: "Forms and Validation",
          discription: "Used formik for form handling and validation",
        },
      ],
    },
    {
      display: "Orange Retailer Portal (Jordan)",
      value: "ojo",
      description:
        "A React-based portal for Orange retailers in Jordan, providing interfaces for account management, forms, and transactional workflows.",
      requirements: [
        {
          name: "React JS",
          discription:
            "Uses modern JavaScript (ES6+) features to create efficient and reusable UI components.",
        },
        {
          name: "Styling",
          discription: "Used React JSS for styling purposes",
        },
        {
          name: "Unit Testing",
          discription:
            "Used react-testing-library and jest for writing unit test cases",
        },
        {
          name: "Responsiveness",
          discription: "Mobile, Tab and Desktop Responsive",
        },
        {
          name: "Data Fetching",
          discription: "Used axios for rendering data dynamically from APIs",
        },
        {
          name: "State Management",
          discription:
            "Used useState hook for local state management and Redux for small global state",
        },
        {
          name: "Routing",
          discription: "Used react-router-dom for routing between screens",
        },
        {
          name: "Forms and Validation",
          discription: "Used formik for form handling and validation",
        },
      ],
    },
    {
      display: "Collection Portal",
      value: "collection",
      description:
        "A portal designed to manage and monitor collection processes, featuring dynamic forms and integrated workflows.",
      requirements: [
        {
          name: "React TS",
          discription:
            "Uses Typescript features to create efficient, maintainable and reusable UI components.",
        },
        {
          name: "Styling",
          discription: "Used React JSS for styling purposes",
        },
        {
          name: "Unit Testing",
          discription:
            "Used react-testing-library and jest for writing unit test cases",
        },
        {
          name: "Responsiveness",
          discription: "Mobile, Tab and Desktop Responsive",
        },
        {
          name: "Data Fetching",
          discription: "Used axios for rendering data dynamically from APIs",
        },
        {
          name: "State Management",
          discription:
            "Used useState hook for local state management and Context API for small global state",
        },
        {
          name: "Routing",
          discription: "Used react-router-dom for routing between screens",
        },
        {
          name: "Forms and Validation",
          discription: "Used formik for form handling and validation",
        },
      ],
    },
    {
      display: "KYC Portal",
      value: "kyc",
      description:
        "A Know Your Customer (KYC) web platform enabling user verification, onboarding, and secure data handling for compliance purposes.",
      requirements: [
        {
          name: "React JS",
          discription:
            "Uses modern JavaScript (ES6+) features to create efficient and reusable UI components.",
        },
        {
          name: "Styling",
          discription: "Used React JSS for styling purposes",
        },
        {
          name: "Unit Testing",
          discription:
            "Used react-testing-library and jest for writing unit test cases",
        },
        {
          name: "Responsiveness",
          discription: "Mobile, Tab and Desktop Responsive",
        },
        {
          name: "Data Fetching",
          discription: "Used axios for rendering data dynamically from APIs",
        },
        {
          name: "State Management",
          discription:
            "Used useState hook for local state management and Redux for small global state",
        },
        {
          name: "Routing",
          discription: "Used react-router-dom for routing between screens",
        },
        {
          name: "Forms and Validation",
          discription: "Used formik for form handling and validation",
        },
      ],
    },
    {
      display: "Workflow",
      value: "workflow",
      description:
        "A business workflow automation system built to manage user tasks, statuses, and approvals in a streamlined UI.",
      requirements: [
        {
          name: "React JS",
          discription:
            "Uses modern JavaScript (ES6+) features to create efficient and reusable UI components.",
        },
        {
          name: "Styling",
          discription: "Used React JSS for styling purposes",
        },
        {
          name: "Unit Testing",
          discription:
            "Used react-testing-library and jest for writing unit test cases",
        },
        {
          name: "Responsiveness",
          discription: "Mobile, Tab and Desktop Responsive",
        },
        {
          name: "Data Fetching",
          discription: "Used axios for rendering data dynamically from APIs",
        },
        {
          name: "State Management",
          discription:
            "Used useState hook for local state management and Context API for small global state",
        },
        {
          name: "Routing",
          discription: "Used react-router-dom for routing between screens",
        },
        {
          name: "Forms and Validation",
          discription: "Used formik for form handling and validation",
        },
      ],
    },
  ];

  return (
    <div name="work" className="w-full text-[#d98b19] mb-10 px-4">
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #2a2a2a;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #555;
          border-radius: 2px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #666;
        }
      `}</style>
      <div className="max-w-[1000px] mx-auto flex flex-col w-full h-full gap-10">
        <div className="w-full flex justify-center items-center flex-col">
          <p className="text-4xl font-bold inline border-b-4 text-[#d98b19] border-[#d98b19]">
            Projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsOverview.map((res, index) => {
            return (
              <div
                key={index}
                className="scale-100 z-10 hover:scale-[1.02] hover:z-10 p-6 shadow-lg border-l-4 border-[#d98b19] shadow-[#040c16] rounded-md flex flex-col cursor-pointer text-white bg-[#1e1e1e] transition-all duration-300 ease-in-out transform"
                style={{ transformOrigin: "center center" }}
              >
                <span className="text-md font-semibold tracking-wide mb-2 text-[#d98b19] text-center">
                  {res.display}
                </span>

                <span className="text-xs font-normal tracking-wider text-gray-300 text-center mb-4 leading-relaxed">
                  {res.description}
                </span>

                <div className="flex flex-wrap gap-2 mt-2 justify-center">
                  {res?.requirements?.map((req, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 bg-[#2c2c2c] text-white px-3 py-1 rounded-full text-xs border border-[#3d3d3d] hover:bg-[#3a3a3a] transition"
                      title={req.discription}
                    >
                      {iconMap[req.name] || null}
                      <span className="whitespace-nowrap">{req.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Project;
