import { useLayoutEffect, useState } from "react";

function useWindowSize() {
  const [size, setSize] = useState([0, 0]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}

const DeviceObserver = () => {
  const [width] = useWindowSize();
  return {
    isDesktop: width >= 1080,
    isMobile: width <= 720,
    isTab: width < 1080 && width >= 768,
  };
};

export default DeviceObserver;
