import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollTop = () => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);

    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, [location]);

  return null;
};

export default ScrollTop;
