// import React from "react";
// import { Link } from "react-router-dom";

// function Homee() {
//   return (
//     <div className="container-fluid  min-vh-100 d-flex align-items-center justify-content-center bg-white">
//       <div className="text-center">
//         <h1 className="mb-4">Welcome to the Nigerian Students and Alumni Plaform</h1>
//         <h2 className="mb-4">King Saud University Chapter</h2>

//         <div className="row justify-content-center">
//           <div className="col-md-6 mb-3">
//             <Link to="/login">
//               <button className="btn btn-success btn-lg btn-block">
//                 Sign In (Active Student)
//               </button>
//             </Link>
//           </div>
//           <div className="col-md-6">
//            <Link to="/loginal"> <button className="btn btn-secondary btn-lg btn-block">
//               Sign In (Alumni)
//             </button></Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Homee;


import React from "react";
import { Link } from "react-router-dom";
import "aos/dist/aos.css"; // Import AOS animation library

import AOS from "aos"; // AOS (Animate On Scroll) library for animations

// Initialize AOS in a useEffect hook
import { useEffect } from "react";

function Homee() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with duration of 1000ms
  }, []);

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light" style={{ backgroundImage: 'url("your-image-url.jpg")', backgroundSize: "cover", backgroundPosition: "center" }}>
      <div className="text-center" data-aos="fade-up">
        <h1 className="mb-4 text-white" style={{ fontSize: "3rem", fontWeight: "700", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
          Welcome to the Nigerian Students and Alumni Platform
        </h1>
        <h2 className="mb-4 text-white" style={{ fontSize: "2rem", fontWeight: "500", textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)" }}>
          King Saud University Chapter
        </h2>

        <div className="row justify-content-center">
          <div className="col-md-6 mb-3" data-aos="zoom-in" data-aos-delay="200">
            <Link to="/login">
              <button className="btn btn-success btn-lg btn-block shadow-lg" style={{ padding: "15px 30px", fontSize: "1.1rem", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(0, 128, 0, 0.3)" }}>
                Sign In (Active Student)
              </button>
            </Link>
          </div>
          <div className="col-md-6" data-aos="zoom-in" data-aos-delay="400">
            <Link to="/loginal">
              <button className="btn btn-secondary btn-lg btn-block shadow-lg" style={{ padding: "15px 30px", fontSize: "1.1rem", borderRadius: "10px", boxShadow: "0px 4px 8px rgba(128, 128, 128, 0.3)" }}>
                Sign In (Alumni)
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homee;

