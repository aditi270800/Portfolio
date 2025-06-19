import React from "react";

const MarqueeMessage = (props) => {
  //   const items = [
  //     { src: "/animation.png", label: "Animation" },
  //     { src: "/web-design.png", label: "Web Design" },
  //     { src: "/product-design.png", label: "Product Design" },
  //     { src: "/illustration.png", label: "Illustration" },
  //     { src: "/branding.png", label: "Branding" },
  //   ];
  const { items = [] } = props;

  const duplicatedItems = [...items, ...items]; // For infinite effect
  return (
    <div className="overflow-hidden relative group bg-white w-full">
      <div className="flex animate-scroll group-hover:paused">
        {duplicatedItems.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-56 mx-2 text-center">
            <span className="text-md font-semibold text-white tracking-wider">
              {item?.display}
            </span>
            {/* <div className="pt-8 text-center">
              <a>
                <button
                  onClick={openModalHandler}
                  className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-semibold text-sm"
                >
                  Project Details
                </button>
              </a>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeMessage;
