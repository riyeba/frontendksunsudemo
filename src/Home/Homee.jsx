

import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos"; // Import AOS library
import "aos/dist/aos.css"; // Import AOS CSS

function Homee() {
  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({ duration: 800 }); // Adjust duration for quicker animation
  }, []);

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="text-center">
        {/* Welcome Text */}
        <h1
          className="mb-4 text-dark"
          data-aos="fade-up"
          data-aos-delay="100" // Reduced delay for quicker animation
        >
          Welcome to the Nigerian Students and Alumni Platform
        </h1>

        {/* University Text */}
        <h2
          className="mb-4 text-dark"
          data-aos="fade-up"
          data-aos-delay="200" // Slightly quicker delay for this one
        >
          King Saud University Chapter
        </h2>

        {/* Sign In Buttons with Dropping Effect */}
        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <Link to="/login">
              <button
                className="btn btn-success btn-lg btn-block"
                data-aos="fade-up"
                data-aos-delay="400" // Shorter delay
              >
                Student
              </button>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/loginal">
              <button
                className="btn btn-secondary btn-lg btn-block"
                data-aos="fade-up"
                data-aos-delay="500" // Slightly after the first button
              >
                Alumni
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homee;

