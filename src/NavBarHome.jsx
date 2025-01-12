import axios from "axios";
import React, { useEffect, useState } from "react";


import { HashLink as Link } from "react-router-hash-link";


function NavBarHome() {
  const [active, setActive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/logo/");
        setActive(response.data);
        setIsLoading(false);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const active2 = active.reverse();
  console.log(active2);

  
  

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark  sticky-top">
      <div className="container">
        <div className=" d-flex gap-1">
          <div className="my-1">
            <img
              src={active2[0]?.photo}
              width="30"
              className="rounded-circle"
            />
          </div>
          <Link className="navbar-brand text-white" to="/">
            {" "}
            NSU-KSU{" "}
          </Link>
        </div>

        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            <Link
              className="nav-link active text-white fs-6 "
              aria-current="page"
              to="/"
            >
              <a id="index.html">Home</a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBarHome;
