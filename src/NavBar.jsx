


import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { HashLink as Link } from "react-router-hash-link";

const UserLoginStatus = localStorage.getItem('UserLoginStatus');
const UserLoginStatu = localStorage.getItem('UserLoginStatu');

function NavBar() {
  const [active, setActive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);  // State to track navbar collapse

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://taiwoakinpennu2.pythonanywhere.com/logo/");
        setActive(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const active2 = active.reverse();
  console.log(active2);

  function LogOut() {
    localStorage.removeItem('UserLoginStatus');
    window.location.href = '/login';
  }

  function LogOutal() {
    localStorage.removeItem('UserLoginStatu');
    window.location.href = '/loginal';
  }

  // Function to handle the collapse toggle when an item is clicked
  const handleNavItemClick = () => {
    setIsCollapsed(true); // Close the navbar after a click
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <div className="container">
        <div className="d-flex gap-1">
          <div className="my-1">
            <img src={active2[0]?.photo} width="30" className="rounded-circle" />
          </div>
          <Link className="navbar-brand text-white" to="/">NSU-KSU</Link>
        </div>

        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded={!isCollapsed}  // Collapse state
          aria-label="Toggle navigation"
          onClick={() => setIsCollapsed(!isCollapsed)} // Toggle navbar collapse
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">
            {UserLoginStatus === 'true' ? (
              <Link className="nav-link active text-white fs-6" to="/" onClick={handleNavItemClick}>Home</Link>
            ) : (
              <Link className="nav-link active text-white fs-6" to="#" onClick={handleNavItemClick}>Home</Link>
            )}

            {UserLoginStatus === 'true' && (
              <Link className="nav-link active text-white fs-6" to="/board" onClick={handleNavItemClick}>Dashboard</Link>
            )}

            {UserLoginStatus === 'true' ? "" : (
              <Link className="nav-link active text-white fs-6" to="#excopage" onClick={handleNavItemClick}>Excos</Link>
            )}

            {UserLoginStatus === 'true' ? "" : (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="#recentpage" onClick={handleNavItemClick}>Recent</Link></li>
                  <li><Link className="dropdown-item" to="#upcomingpage" onClick={handleNavItemClick}>Upcoming</Link></li>
                </ul>
              </li>
            )}

            {UserLoginStatus === 'true' ? "" : (
              <Link className="nav-link active text-white fs-6" to="/home" onClick={handleNavItemClick}>Login</Link>
            )}

            {UserLoginStatus === 'true' ? (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Active Student
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={() => LogOut()}><Link className="dropdown-item text-dark fs-5">LogOut</Link></li>
                </ul>
              </li>
            ) : ""}

            {UserLoginStatu === 'true' ? (
              <div>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Alumni
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li onClick={() => LogOutal()}><Link className="dropdown-item" href="#">LogOut</Link></li>
                  </ul>
                </li>
              </div>
            ) : ""}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

