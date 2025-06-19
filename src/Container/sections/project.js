// import { useAnimation, motion } from "framer-motion";
import { useState } from "react";

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

  const [hoveredCardIndex, setHoveredCardIndex] = useState(null);

  return (
    // <div name="work" className="w-full text-[#d98b19] mb-10">
    //   <div className="max-w-[1000px] mx-auto flex flex-col w-full h-full gap-10">
    //     <div className="w-full flex justify-center items-center flex-col">
    //       <p className="text-4xl font-bold inline border-b-4 text-[#d98b19] border-[#d98b19]">
    //         Projects
    //       </p>
    //     </div>

    //     <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
    //       {projectsOverview.map((res, id) => {
    //         return (
    //           <div
    //             key={id}
    //             className="p-6 shadow-lg shadow-[#040c16] group container rounded-md flex items-center justify-between mx-auto content-div flex-col cursor-pointer text-white overflow-hidden bg-[#1e1e1e] hover:scale-105"
    //           >
    //             <span className="text-md font-semibold tracking-wider mb-2">
    //               {res.display}
    //             </span>
    //             <span className="text-xs font-normal tracking-wider text-center mb-4">
    //               {res.description}
    //             </span>

    //             {/* Hidden by default, shown on hover */}
    //             <div className="max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500 ease-in-out">
    //               <div className="mt-2 text-sm text-gray-300">
    //                 <p className="font-semibold text-[#d98b19] mb-1">
    //                   Requirements:-
    //                 </p>
    //                 {res?.requirements?.map((req, index) => {
    //                   return (
    //                     <p key={index}>
    //                       {index}. {req?.name}: {req?.discription}
    //                     </p>
    //                   );
    //                 })}
    //               </div>
    //             </div>
    //           </div>
    //         );
    //       })}
    //     </div>
    //   </div>
    // </div>
    <div name="work" className="w-full text-[#d98b19] mb-10">
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

        <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projectsOverview.map((res, index) => {
            const isHovered = hoveredCardIndex === index;

            return (
              <div
                key={index}
                className={`p-6 shadow-lg shadow-[#040c16] rounded-md flex flex-col cursor-pointer text-white bg-[#1e1e1e] transition-all duration-300 ease-in-out transform ${
                  isHovered
                    ? "scale-125 z-50"
                    : "scale-100 hover:scale-105 z-10"
                }`}
                style={{
                  transformOrigin: "center center",
                }}
                onMouseEnter={() => setHoveredCardIndex(index)}
                onMouseLeave={() => setHoveredCardIndex(null)}
              >
                {isHovered ? (
                  /* Show only requirements when hovered */
                  <div className="space-y-2 max-h-60 overflow-y-auto custom-scrollbar">
                    {res?.requirements?.map((req, reqIndex) => (
                      <div key={reqIndex} className="text-sm text-gray-300">
                        <span className="font-medium text-[#d98b19]">
                          {reqIndex + 1}. {req?.name}:
                        </span>
                        <span className="ml-1">{req?.discription}</span>
                      </div>
                    )) || (
                      <p className="text-sm text-gray-400 italic">
                        No requirements specified
                      </p>
                    )}
                  </div>
                ) : (
                  /* Show normal card content when not hovered */
                  <>
                    <span className="text-md font-semibold tracking-wider mb-3 text-[#d98b19]">
                      {res.display}
                    </span>

                    <span className="text-xs font-normal tracking-wider text-center mb-4">
                      {res.description}
                    </span>

                    <div className="text-xs text-gray-400 mt-auto">
                      {res?.requirements?.length || 0} requirements
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Backdrop overlay when a card is zoomed */}
      {hoveredCardIndex !== null && (
        <div className="fixed inset-0 bg-black/20 z-40 pointer-events-none" />
      )}
    </div>
  );
};

export default Project;
