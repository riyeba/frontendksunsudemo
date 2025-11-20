


import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNavigate } from "react-router";
import { HashLink as Link } from "react-router-hash-link";



function NavBar() {
  const [active, setActive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isCollapsed, setIsCollapsed] = useState(true);  
   const [userLoginStatus, setUserLoginStatus] = useState(null);
  const [userLoginStatu, setUserLoginStatu] = useState(null);
// const UserLoginStatus = localStorage.getItem('UserLoginStatus');
// const UserLoginStatu = localStorage.getItem('UserLoginStatu');
const navigate=useNavigate()

  useEffect(() => {
    
    const userLoginStatus = localStorage.getItem('UserLoginStatus');
    const userLoginStatu = localStorage.getItem('UserLoginStatu');
    
    // Update state with localStorage values after the component mounts
    setUserLoginStatus(userLoginStatus);
    setUserLoginStatu(userLoginStatu);

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
    navigate('/login');
  }

  function LogOutal() {
    localStorage.removeItem('userLoginStatu');
   navigate('/loginal');
  }

  const handleSmoothScroll = (sectionId) => {
  setTimeout(() => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
};


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
            {userLoginStatus === 'true' ? (
              <Link className="nav-link active text-white fs-6" to="/" onClick={handleNavItemClick}>Home</Link>
            ) : (
              <Link className="nav-link active text-white fs-6" to="#" onClick={handleNavItemClick}>Home</Link>
            )}

            {userLoginStatus === 'true' && (
              <Link className="nav-link active text-white fs-6" to="/board" onClick={handleNavItemClick}>Dashboard</Link>
            )}

            {userLoginStatus === 'true' ? "" : (
              <li><button className="nav-link active text-white fs-6" onClick={() => handleSmoothScroll('excopage')}>Excos</button></li>
            )}

            {userLoginStatus === 'true' ? "" : (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Events
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <button className="dropdown-item" onClick={() => handleSmoothScroll('recentpage')}>Recent</button>
                  <button className="dropdown-item"  onClick={() => handleSmoothScroll('upcomingpage')}>Upcoming</button>
                </ul>
              </li>
            )}

            {userLoginStatus === 'true' ? "" : (
              <Link className="nav-link active text-white fs-6" to="/home" onClick={handleNavItemClick}>Login</Link>
            )}

            {userLoginStatus === 'true' ? (
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Active Student
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li onClick={() => LogOut()}><Link className="dropdown-item text-dark fs-5" href="#">LogOut</Link></li>
                </ul>
              </li>
            ) : ""}

            {userLoginStatu === 'true' ? (
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

