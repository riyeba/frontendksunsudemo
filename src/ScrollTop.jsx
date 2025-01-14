import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const location = useLocation(); // This will track route changes

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, [location]); // This runs whenever the location changes (i.e., route change)

  return null; // This component doesn't render anything
};

export default ScrollTop;
