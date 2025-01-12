import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link, NavLink } from "react-router-dom";

function SiteAdmin() {
  const [activeal, setActiveal] = useState([]);
  
  const [isLoadingal, setIsLoadingal] = useState(true);

  const [activemale, setActive] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [activef, setActivef] = useState([]);
  
  const [isLoadingf, setIsLoadingf] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://taiwoakinpennu2.pythonanywhere.com/nsu/");
        setActive(response.data);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);


  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://taiwoakinpennu2.pythonanywhere.com/female/");
        setActivef(response.data);
        setIsLoadingf(false);
        console.log(response);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://taiwoakinpennu2.pythonanywhere.com/nsual/");
        setActiveal(response.data);
        setIsLoadingal(false);
        console.log(response);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="container-fluid mt-4 min-vh-100">
      <div className="d-flex gap-1">
        <aside
          className="card fs-7 "
          style={{ height: "40rem", width: "21rem" }}
        >
          <div>
            <div className="list-group list-group-flush ">
              <div className="list-group-item list-group-item-action  d-flex gap-2  ">
                <i className="bi bi-house-door-fill"></i>
                <Link href="#" className="text-black text-decoration-none ">
                  Dashboard
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-mic-fill"></i>
                <Link to="/speech" className="text-black text-decoration-none">
                  President Speech
                </Link>
              </div>

              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-people-fill"></i>
                <Link to="/exco" className="text-black text-decoration-none">
                  Register Excos
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-clock-history"></i>
                <Link to="/event" className="text-black text-decoration-none">
                  Recent Events
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-calendar-event"></i>
                <Link
                  to="/upcomings"
                  className="text-black text-decoration-none"
                >
                  Upcoming Event
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-clipboard-check"></i>
                <Link
                  to="/attendance"
                  className="text-black text-decoration-none"
                >
                  Mark Attendance
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-cloud-upload"></i>
                <Link to="/logo" className="text-black text-decoration-none">
                  Upload Logo
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-search"></i>
                <Link
                  to="/searchattend"
                  className="text-black text-decoration-none"
                >
                  Search Attendance
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-trash"></i>
                <Link
                  to="/deletexco"
                  className="text-black text-decoration-none"
                >
                  Delete Excos
                </Link>
              </div>

              <Link className="list-group-item list-group-item-action text-danger mt-4 d-flex gap-2 fw-bold fs-6 position-absolute bottom-0 end-0 border-top">
                <i className="bi bi-box-arrow-right text-danger "></i>
                Sign Out
              </Link>
            </div>
          </div>
        </aside>

        <section className="container-fluid">
          <div
            className="d-flex justify-content-center flex-wrap gap-2"
            style={{ marginRight: "-1rem" }}
          >
            <div className="card" style={{ width: "12rem", height: "9rem" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Male Students</h5>
                <p className="card-text" style={{  color:"red" }}>{activemale?.length}</p>
                <NavLink to="/activeadmin" className="btn btn-success">
                  Check
                </NavLink>
              </div>
            </div>

            <div className="card" style={{ width: "12rem", height: "9rem" }}>
              <div className="card-body text-center">
                <h5 className="card-title">Female Students</h5>
                <p className="card-text" style={{ color:"red" }}>{activef?.length}</p>
                <Link to="/femaleb" className="btn btn-success">
                  Check
                </Link>
              </div>
            </div>

            <div className="card" style={{ width: "12rem", height: "9rem" }}>
              <div className="card-body text-center">
                <h5 className="card-title ">Alumni</h5>
                <p className="card-text" style={{ color:"red" }}>{activeal.length}</p>
                <Link to="/alumniinfo" className="btn btn-success">
                  Check
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SiteAdmin;
