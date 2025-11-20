


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import { HashLink as Link } from "react-router-hash-link";

// const UserLoginStatus = localStorage.getItem('UserLoginStatus');
// const UserLoginStatu = localStorage.getItem('UserLoginStatu');

// function NavBar() {
//   const [active, setActive] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isCollapsed, setIsCollapsed] = useState(true);  // State to track navbar collapse

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://taiwoakinpennu2.pythonanywhere.com/logo/");
//         setActive(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const active2 = active.reverse();
//   console.log(active2);

//   function LogOut() {
//     localStorage.removeItem('UserLoginStatus');
//     window.location.href = '/login';
//   }

//   function LogOutal() {
//     localStorage.removeItem('UserLoginStatu');
//     window.location.href = '/loginal';
//   }

//   // Function to handle the collapse toggle when an item is clicked
//   const handleNavItemClick = () => {
//     setIsCollapsed(true); // Close the navbar after a click
//   };

//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
//       <div className="container">
//         <div className="d-flex gap-1">
//           <div className="my-1">
//             <img src={active2[0]?.photo} width="30" className="rounded-circle" />
//           </div>
//           <Link className="navbar-brand text-white" to="/">NSU-KSU</Link>
//         </div>

//         <button
//           className="navbar-toggler bg-secondary"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarNavAltMarkup"
//           aria-controls="navbarNavAltMarkup"
//           aria-expanded={!isCollapsed}  // Collapse state
//           aria-label="Toggle navigation"
//           onClick={() => setIsCollapsed(!isCollapsed)} // Toggle navbar collapse
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className={`collapse navbar-collapse ${isCollapsed ? '' : 'show'}`} id="navbarNavAltMarkup">
//           <div className="navbar-nav ms-auto">
//             {UserLoginStatus === 'true' ? (
//               <Link className="nav-link active text-white fs-6" to="/" onClick={handleNavItemClick}>Home</Link>
//             ) : (
//               <Link className="nav-link active text-white fs-6" to="#" onClick={handleNavItemClick}>Home</Link>
//             )}

//             {UserLoginStatus === 'true' && (
//               <Link className="nav-link active text-white fs-6" to="/board" onClick={handleNavItemClick}>Dashboard</Link>
//             )}

//             {UserLoginStatus === 'true' ? "" : (
//               <Link className="nav-link active text-white fs-6" to="#excopage" onClick={handleNavItemClick}>Excos</Link>
//             )}

//             {UserLoginStatus === 'true' ? "" : (
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Events
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li><Link className="dropdown-item" to="#recentpage" onClick={handleNavItemClick}>Recent</Link></li>
//                   <li><Link className="dropdown-item" to="#upcomingpage" onClick={handleNavItemClick}>Upcoming</Link></li>
//                 </ul>
//               </li>
//             )}

//             {UserLoginStatus === 'true' ? "" : (
//               <Link className="nav-link active text-white fs-6" to="/home" onClick={handleNavItemClick}>Login</Link>
//             )}

//             {UserLoginStatus === 'true' ? (
//               <li className="nav-item dropdown">
//                 <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Active Student
//                 </a>
//                 <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                   <li onClick={() => LogOut()}><Link className="dropdown-item text-dark fs-5" href="#">LogOut</Link></li>
//                 </ul>
//               </li>
//             ) : ""}

//             {UserLoginStatu === 'true' ? (
//               <div>
//                 <li className="nav-item dropdown">
//                   <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                     Alumni
//                   </a>
//                   <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <li onClick={() => LogOutal()}><Link className="dropdown-item" href="#">LogOut</Link></li>
//                   </ul>
//                 </li>
//               </div>
//             ) : ""}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default NavBar;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// const UserLoginStatus = localStorage.getItem('UserLoginStatus');
// const UserLoginStatu = localStorage.getItem('UserLoginStatu');

// function NavBar() {
//   const [active, setActive] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hoveredDropdown, setHoveredDropdown] = useState(null);
//   const [hoveredItem, setHoveredItem] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://taiwoakinpennu2.pythonanywhere.com/logo/");
//         setActive(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const active2 = active.length > 0 ? active.reverse() : [];

//   function LogOut() {
//     localStorage.removeItem('UserLoginStatus');
//     window.location.href = '/login';
//   }

//   function LogOutal() {
//     localStorage.removeItem('UserLoginStatu');
//     window.location.href = '/loginal';
//   }

//   const handleNavItemClick = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <nav style={{
//       background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
//       padding: 0,
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000,
//       width: '100%'
//     }}>
//       <style>{`
//         @media (max-width: 768px) {
//           .nav-menu {
//             position: fixed !important;
//             top: 70px !important;
//             left: 0 !important;
//             right: 0 !important;
//             width: 100% !important;
//             flex-direction: column !important;
//             background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
//             border-top: 2px solid #fbbf24 !important;
//             box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
//           }
          
//           .nav-menu.closed {
//             display: none !important;
//           }
          
//           .nav-item {
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
//             width: 100% !important;
//           }
          
//           .dropdown-menu {
//             position: static !important;
//             background: rgba(15, 23, 42, 0.95) !important;
//             border-radius: 0 !important;
//             margin-top: 0 !important;
//             box-shadow: none !important;
//             border-left: 4px solid #fbbf24 !important;
//             padding: 10px 0 10px 20px !important;
//           }
          
//           .dropdown-menu.hidden {
//             display: none !important;
//           }
//         }
        
//         @media (min-width: 769px) {
//           .toggle-btn {
//             display: none !important;
//           }
          
//           .nav-menu {
//             display: flex !important;
//           }
          
//           .nav-menu.closed {
//             display: flex !important;
//           }
//         }
        
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       <div style={{
//         padding: '16px 20px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%',
//         maxWidth: '100%',
//         margin: '0 auto'
//       }}>
        
//         {/* Brand Logo */}
//         <Link 
//           to="/" 
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             textDecoration: 'none',
//             color: 'white',
//             fontSize: '22px',
//             fontWeight: 'bold',
//             transition: 'all 0.3s ease'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.color = '#fbbf24';
//             e.currentTarget.style.transform = 'scale(1.05)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.color = 'white';
//             e.currentTarget.style.transform = 'scale(1)';
//           }}
//         >
//           {!isLoading && active2[0] && (
//             <img 
//               src={active2[0]?.photo} 
//               alt="NSU Logo" 
//               style={{
//                 width: '40px',
//                 height: '40px',
//                 borderRadius: '50%',
//                 objectFit: 'cover',
//                 border: '2px solid #fbbf24'
//               }}
//             />
//           )}
//           <span style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>NSU-KSU</span>
//         </Link>

//         {/* Toggle Button for Mobile */}
//         <button 
//           className="toggle-btn"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           style={{
//             background: 'none',
//             border: 'none',
//             color: 'white',
//             fontSize: '28px',
//             cursor: 'pointer',
//             padding: '0 10px',
//             display: 'block',
//             transition: 'all 0.3s ease'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'}
//           onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
//         >
//           {isMenuOpen ? '✕' : '☰'}
//         </button>

//         {/* Navigation Menu */}
//         <ul 
//           className={`nav-menu ${isMenuOpen ? '' : 'closed'}`}
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             listStyle: 'none',
//             margin: 0,
//             padding: 0,
//             gap: '5px',
//             alignItems: 'center',
//             marginLeft: 'auto'
//           }}
//         >
//           {/* Home */}
//           <li className="nav-item" style={{
//             padding: '8px 0',
//             margin: '0 8px'
//           }}>
//             <Link 
//               to="/" 
//               onClick={handleNavItemClick}
//               style={{
//                 color: hoveredItem === 'home' ? '#fbbf24' : 'white',
//                 textDecoration: 'none',
//                 fontSize: 'clamp(14px, 2vw, 16px)',
//                 fontWeight: '500',
//                 display: 'inline-block',
//                 transition: 'all 0.3s ease',
//                 borderBottom: hoveredItem === 'home' ? '2px solid #fbbf24' : '2px solid transparent',
//                 paddingBottom: '4px'
//               }}
//               onMouseEnter={() => setHoveredItem('home')}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               Home
//             </Link>
//           </li>

//           {/* Dashboard */}
//           {UserLoginStatus === 'true' && (
//             <li className="nav-item" style={{
//               padding: '8px 0',
//               margin: '0 8px'
//             }}>
//               <Link 
//                 to="/board" 
//                 onClick={handleNavItemClick}
//                 style={{
//                   color: hoveredItem === 'dashboard' ? '#fbbf24' : 'white',
//                   textDecoration: 'none',
//                   fontSize: 'clamp(14px, 2vw, 16px)',
//                   fontWeight: '500',
//                   display: 'inline-block',
//                   transition: 'all 0.3s ease',
//                   borderBottom: hoveredItem === 'dashboard' ? '2px solid #fbbf24' : '2px solid transparent',
//                   paddingBottom: '4px'
//                 }}
//                 onMouseEnter={() => setHoveredItem('dashboard')}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 Dashboard
//               </Link>
//             </li>
//           )}

//           {/* Excos */}
//           {UserLoginStatus !== 'true' && (
//             <li className="nav-item" style={{
//               padding: '8px 0',
//               margin: '0 8px'
//             }}>
//               <Link 
//                 to="/#excopage" 
//                 onClick={handleNavItemClick}
//                 style={{
//                   color: hoveredItem === 'excos' ? '#fbbf24' : 'white',
//                   textDecoration: 'none',
//                   fontSize: 'clamp(14px, 2vw, 16px)',
//                   fontWeight: '500',
//                   display: 'inline-block',
//                   transition: 'all 0.3s ease',
//                   borderBottom: hoveredItem === 'excos' ? '2px solid #fbbf24' : '2px solid transparent',
//                   paddingBottom: '4px'
//                 }}
//                 onMouseEnter={() => setHoveredItem('excos')}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 Excos
//               </Link>
//             </li>
//           )}

//           {/* Events Dropdown */}
//           {UserLoginStatus !== 'true' && (
//             <li className="nav-item" style={{
//               position: 'relative',
//               padding: '8px 0',
//               margin: '0 8px'
//             }}
//             onMouseEnter={() => setHoveredDropdown('events')}
//             onMouseLeave={() => setHoveredDropdown(null)}>
//               <button
//                 style={{
//                   background: 'none',
//                   border: 'none',
//                   color: hoveredDropdown === 'events' ? '#fbbf24' : 'white',
//                   fontSize: 'clamp(14px, 2vw, 16px)',
//                   fontWeight: '500',
//                   cursor: 'pointer',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '6px',
//                   transition: 'all 0.3s ease',
//                   borderBottom: hoveredDropdown === 'events' ? '2px solid #fbbf24' : '2px solid transparent',
//                   paddingBottom: '4px'
//                 }}
//                 onClick={() => setHoveredDropdown(hoveredDropdown === 'events' ? null : 'events')}
//               >
//                 Events {hoveredDropdown === 'events' ? '▼' : '▶'}
//               </button>
              
//               <div className={hoveredDropdown === 'events' ? 'dropdown-menu' : 'dropdown-menu hidden'} style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 backgroundColor: 'rgba(15, 23, 42, 0.95)',
//                 backdropFilter: 'blur(10px)',
//                 minWidth: '160px',
//                 borderRadius: '8px',
//                 padding: '8px 0',
//                 marginTop: '8px',
//                 boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//                 display: hoveredDropdown === 'events' ? 'block' : 'none',
//                 zIndex: 1001
//               }}>
//                 <a 
//                   href="/#recentpage" 
//                   onClick={() => {
//                     handleNavItemClick();
//                     setTimeout(() => {
//                       const element = document.getElementById('recentpage');
//                       if (element) element.scrollIntoView({ behavior: 'smooth' });
//                     }, 100);
//                   }}
//                   style={{
//                     padding: '12px 16px',
//                     color: 'white',
//                     textDecoration: 'none',
//                     display: 'block',
//                     transition: 'all 0.2s ease',
//                     borderLeft: '3px solid transparent',
//                     fontSize: 'clamp(13px, 2vw, 15px)',
//                     cursor: 'pointer'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
//                     e.currentTarget.style.borderLeft = '3px solid #fbbf24';
//                     e.currentTarget.style.color = '#fbbf24';
//                     e.currentTarget.style.paddingLeft = '20px';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = 'transparent';
//                     e.currentTarget.style.borderLeft = '3px solid transparent';
//                     e.currentTarget.style.color = 'white';
//                     e.currentTarget.style.paddingLeft = '16px';
//                   }}
//                 >
//                   Recent Events
//                 </a>
//                 <a 
//                   href="/#upcomingpage" 
//                   onClick={() => {
//                     handleNavItemClick();
//                     setTimeout(() => {
//                       const element = document.getElementById('upcomingpage');
//                       if (element) element.scrollIntoView({ behavior: 'smooth' });
//                     }, 100);
//                   }}
//                   style={{
//                     padding: '12px 16px',
//                     color: 'white',
//                     textDecoration: 'none',
//                     display: 'block',
//                     transition: 'all 0.2s ease',
//                     borderLeft: '3px solid transparent',
//                     fontSize: 'clamp(13px, 2vw, 15px)',
//                     cursor: 'pointer'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
//                     e.currentTarget.style.borderLeft = '3px solid #fbbf24';
//                     e.currentTarget.style.color = '#fbbf24';
//                     e.currentTarget.style.paddingLeft = '20px';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = 'transparent';
//                     e.currentTarget.style.borderLeft = '3px solid transparent';
//                     e.currentTarget.style.color = 'white';
//                     e.currentTarget.style.paddingLeft = '16px';
//                   }}
//                 >
//                   Upcoming Events
//                 </a>
//               </div>
//             </li>
//           )}

//           {/* Login Button */}
//           {UserLoginStatus !== 'true' && (
//             <li className="nav-item" style={{
//               padding: '8px 0',
//               margin: '0 8px'
//             }}>
//               <Link 
//                 href="/home" 
//                 onClick={handleNavItemClick}
//                 style={{
//                   backgroundColor: '#fbbf24',
//                   color: '#065f46',
//                   textDecoration: 'none',
//                   padding: 'clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px)',
//                   borderRadius: '25px',
//                   fontWeight: '600',
//                   fontSize: 'clamp(13px, 2vw, 15px)',
//                   display: 'inline-block',
//                   transition: 'all 0.3s ease'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = '#fcd34d';
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = '#fbbf24';
//                   e.currentTarget.style.transform = 'scale(1)';
//                 }}
//               >
//                 Login
//               </Link>
//             </li>
//           )}
//         </ul>

//         {/* User Dropdowns (Active Student / Alumni) */}
//         {(UserLoginStatus === 'true' || UserLoginStatu === 'true') && (
//           <div style={{
//             display: 'flex',
//             gap: '0',
//             marginLeft: 'auto'
//           }}
//           onMouseEnter={() => UserLoginStatus === 'true' && setHoveredDropdown('user')}
//           onMouseLeave={() => UserLoginStatus === 'true' && setHoveredDropdown(null)}>
//             {UserLoginStatus === 'true' && (
//               <div style={{ position: 'relative' }}>
//                 <button
//                   style={{
//                     background: 'none',
//                     border: 'none',
//                     color: hoveredDropdown === 'user' ? '#fbbf24' : 'white',
//                     fontSize: 'clamp(14px, 2vw, 16px)',
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '6px',
//                     transition: 'all 0.3s ease',
//                     borderBottom: hoveredDropdown === 'user' ? '2px solid #fbbf24' : '2px solid transparent',
//                     paddingBottom: '4px',
//                     padding: '8px 12px'
//                   }}
//                   onClick={() => setHoveredDropdown(hoveredDropdown === 'user' ? null : 'user')}
//                   onMouseEnter={() => setHoveredDropdown('user')}
//                   onMouseLeave={() => setHoveredDropdown(null)}
//                 >
//                   Active Student {hoveredDropdown === 'user' ? '▼' : '▶'}
//                 </button>
                
//                 <div style={{
//                   position: 'absolute',
//                   top: '100%',
//                   right: 0,
//                   backgroundColor: 'rgba(15, 23, 42, 0.95)',
//                   backdropFilter: 'blur(10px)',
//                   minWidth: '140px',
//                   borderRadius: '8px',
//                   padding: '8px 0',
//                   marginTop: '8px',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//                   display: hoveredDropdown === 'user' ? 'block' : 'none',
//                   zIndex: 1001
//                 }}>
//                   <button
//                     onClick={() => {
//                       LogOut();
//                       handleNavItemClick();
//                     }}
//                     style={{
//                       width: '100%',
//                       padding: '12px 16px',
//                       background: 'none',
//                       border: 'none',
//                       color: 'white',
//                       textAlign: 'left',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s ease',
//                       borderLeft: '3px solid transparent',
//                       fontSize: 'clamp(13px, 2vw, 15px)',
//                       fontWeight: '500'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
//                       e.currentTarget.style.borderLeft = '3px solid #fbbf24';
//                       e.currentTarget.style.color = '#fbbf24';
//                       e.currentTarget.style.paddingLeft = '20px';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                       e.currentTarget.style.borderLeft = '3px solid transparent';
//                       e.currentTarget.style.color = 'white';
//                       e.currentTarget.style.paddingLeft = '16px';
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}

//             {UserLoginStatu === 'true' && (
//               <div style={{ position: 'relative' }}>
//                 <button
//                   style={{
//                     background: 'none',
//                     border: 'none',
//                     color: hoveredDropdown === 'alumni' ? '#fbbf24' : 'white',
//                     fontSize: 'clamp(14px, 2vw, 16px)',
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '6px',
//                     transition: 'all 0.3s ease',
//                     borderBottom: hoveredDropdown === 'alumni' ? '2px solid #fbbf24' : '2px solid transparent',
//                     paddingBottom: '4px',
//                     padding: '8px 12px'
//                   }}
//                   onClick={() => setHoveredDropdown(hoveredDropdown === 'alumni' ? null : 'alumni')}
//                   onMouseEnter={() => setHoveredDropdown('alumni')}
//                   onMouseLeave={() => setHoveredDropdown(null)}
//                 >
//                   Alumni {hoveredDropdown === 'alumni' ? '▼' : '▶'}
//                 </button>
                
//                 <div style={{
//                   position: 'absolute',
//                   top: '100%',
//                   right: 0,
//                   backgroundColor: 'rgba(15, 23, 42, 0.95)',
//                   backdropFilter: 'blur(10px)',
//                   minWidth: '140px',
//                   borderRadius: '8px',
//                   padding: '8px 0',
//                   marginTop: '8px',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//                   display: hoveredDropdown === 'alumni' ? 'block' : 'none',
//                   zIndex: 1001
//                 }}>
//                   <button
//                     onClick={() => {
//                       LogOutal();
//                       handleNavItemClick();
//                     }}
//                     style={{
//                       width: '100%',
//                       padding: '12px 16px',
//                       background: 'none',
//                       border: 'none',
//                       color: 'white',
//                       textAlign: 'left',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s ease',
//                       borderLeft: '3px solid transparent',
//                       fontSize: 'clamp(13px, 2vw, 15px)',
//                       fontWeight: '500'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
//                       e.currentTarget.style.borderLeft = '3px solid #fbbf24';
//                       e.currentTarget.style.color = '#fbbf24';
//                       e.currentTarget.style.paddingLeft = '20px';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                       e.currentTarget.style.borderLeft = '3px solid transparent';
//                       e.currentTarget.style.color = 'white';
//                       e.currentTarget.style.paddingLeft = '16px';
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default NavBar;


// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// const UserLoginStatus = localStorage.getItem('UserLoginStatus');
// const UserLoginStatu = localStorage.getItem('UserLoginStatu');

// function NavBar() {
//   const [active, setActive] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [hoveredDropdown, setHoveredDropdown] = useState(null);
//   const [hoveredItem, setHoveredItem] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://taiwoakinpennu2.pythonanywhere.com/logo/");
//         setActive(response.data);
//         setIsLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const active2 = active.length > 0 ? active.reverse() : [];

//   function LogOut() {
//     localStorage.removeItem('UserLoginStatus');
//     window.location.href = '/login';
//   }

//   function LogOutal() {
//     localStorage.removeItem('UserLoginStatu');
//     window.location.href = '/loginal';
//   }

//   const handleNavItemClick = () => {
//     setIsMenuOpen(false);
//   };

//   const handleSmoothScroll = (sectionId) => {
//     handleNavItemClick();
    
//     // Small delay to ensure the page is loaded
//     setTimeout(() => {
//       const element = document.getElementById(sectionId);
//       if (element) {
//         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
//       }
//     }, 100);
//   };

//   return (
//     <nav style={{
//       background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
//       padding: 0,
//       boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
//       position: 'sticky',
//       top: 0,
//       zIndex: 1000,
//       width: '100%'
//     }}>
//       <style>{`
//         @media (max-width: 768px) {
//           .nav-menu {
//             position: fixed !important;
//             top: 70px !important;
//             left: 0 !important;
//             right: 0 !important;
//             width: 100% !important;
//             flex-direction: column !important;
//             background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
//             border-top: 2px solid #fbbf24 !important;
//             box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
//           }
          
//           .nav-menu.closed {
//             display: none !important;
//           }
          
//           .nav-item {
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
//             width: 100% !important;
//           }
          
//           .dropdown-menu {
//             position: static !important;
//             background: rgba(15, 23, 42, 0.95) !important;
//             border-radius: 0 !important;
//             margin-top: 0 !important;
//             box-shadow: none !important;
//             border-left: 4px solid #fbbf24 !important;
//             padding: 10px 0 10px 20px !important;
//           }
          
//           .dropdown-menu.hidden {
//             display: none !important;
//           }
//         }
        
//         @media (min-width: 769px) {
//           .toggle-btn {
//             display: none !important;
//           }
          
//           .nav-menu {
//             display: flex !important;
//           }
          
//           .nav-menu.closed {
//             display: flex !important;
//           }
//         }
        
//         @keyframes slideDown {
//           from {
//             opacity: 0;
//             transform: translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
//       `}</style>

//       <div style={{
//         padding: '16px 20px',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         width: '100%',
//         maxWidth: '100%',
//         margin: '0 auto'
//       }}>
        
//         {/* Brand Logo */}
//         <Link 
//           to="/" 
//           style={{
//             display: 'flex',
//             alignItems: 'center',
//             gap: '12px',
//             textDecoration: 'none',
//             color: 'white',
//             fontSize: '22px',
//             fontWeight: 'bold',
//             transition: 'all 0.3s ease'
//           }}
//           onMouseEnter={(e) => {
//             e.currentTarget.style.color = '#fbbf24';
//             e.currentTarget.style.transform = 'scale(1.05)';
//           }}
//           onMouseLeave={(e) => {
//             e.currentTarget.style.color = 'white';
//             e.currentTarget.style.transform = 'scale(1)';
//           }}
//         >
//           {!isLoading && active2[0] && (
//             <img 
//               src={active2[0]?.photo} 
//               alt="NSU Logo" 
//               style={{
//                 width: '40px',
//                 height: '40px',
//                 borderRadius: '50%',
//                 objectFit: 'cover',
//                 border: '2px solid #fbbf24'
//               }}
//             />
//           )}
//           <span style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>NSU-KSU</span>
//         </Link>

//         {/* Toggle Button for Mobile */}
//         <button 
//           className="toggle-btn"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           style={{
//             background: 'none',
//             border: 'none',
//             color: 'white',
//             fontSize: '28px',
//             cursor: 'pointer',
//             padding: '0 10px',
//             display: 'block',
//             transition: 'all 0.3s ease'
//           }}
//           onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'}
//           onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
//         >
//           {isMenuOpen ? '✕' : '☰'}
//         </button>

//         {/* Navigation Menu */}
//         <ul 
//           className={`nav-menu ${isMenuOpen ? '' : 'closed'}`}
//           style={{
//             display: 'flex',
//             flexDirection: 'row',
//             listStyle: 'none',
//             margin: 0,
//             paddingLeft: "5px",
//             gap: '5px',
//             alignItems: 'center',
//             marginLeft: 'auto'
//           }}
//         >
//           {/* Home */}
//           <li className="nav-item" style={{
//             padding: '8px 0',
//             margin: '0 8px'
//           }}>
//             <Link 
//               to="/" 
//               onClick={handleNavItemClick}
//               style={{
//                 color: hoveredItem === 'home' ? '#fbbf24' : 'white',
//                 textDecoration: 'none',
//                 fontSize: 'clamp(14px, 2vw, 16px)',
//                 fontWeight: '500',
//                 display: 'inline-block',
//                 transition: 'all 0.3s ease',
//                 borderBottom: hoveredItem === 'home' ? '2px solid #fbbf24' : '2px solid transparent',
//                 paddingBottom: '4px'
//               }}
//               onMouseEnter={() => setHoveredItem('home')}
//               onMouseLeave={() => setHoveredItem(null)}
//             >
//               Home
//             </Link>
//           </li>

//           {/* Dashboard */}
//           {UserLoginStatus === 'true' && (
//             <li className="nav-item" style={{
//               padding: '8px 0',
//               margin: '0 8px'
//             }}>
//               <Link 
//                 to="/board" 
//                 onClick={handleNavItemClick}
//                 style={{
//                   color: hoveredItem === 'dashboard' ? '#fbbf24' : 'white',
//                   textDecoration: 'none',
//                   fontSize: 'clamp(14px, 2vw, 16px)',
//                   fontWeight: '500',
//                   display: 'inline-block',
//                   transition: 'all 0.3s ease',
//                   borderBottom: hoveredItem === 'dashboard' ? '2px solid #fbbf24' : '2px solid transparent',
//                   paddingBottom: '4px'
//                 }}
//                 onMouseEnter={() => setHoveredItem('dashboard')}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 Dashboard
//               </Link>
//             </li>
//           )}

//           {/* Excos */}
//           {UserLoginStatus !== 'true' && (
//             <li className="nav-item" style={{
//               padding: '8px 0',
//               margin: '0 8px'
//             }}>
//               <button
//                 onClick={() => handleSmoothScroll('excopage')}
//                 style={{
//                   background: 'none',
//                   border: 'none',
//                   color: hoveredItem === 'excos' ? '#fbbf24' : 'white',
//                   textDecoration: 'none',
//                   fontSize: 'clamp(14px, 2vw, 16px)',
//                   fontWeight: '500',
//                   display: 'inline-block',
//                   transition: 'all 0.3s ease',
//                   borderBottom: hoveredItem === 'excos' ? '2px solid #fbbf24' : '2px solid transparent',
//                   paddingBottom: '4px',
//                   cursor: 'pointer'
//                 }}
//                 onMouseEnter={() => setHoveredItem('excos')}
//                 onMouseLeave={() => setHoveredItem(null)}
//               >
//                 Excos
//               </button>
//             </li>
//           )}

//           {/* Events Dropdown */}
//           {UserLoginStatus !== 'true' && (
//             <li className="nav-item" style={{
//               position: 'relative',
//               padding: '8px 0',
//               margin: '0 8px'
//             }}
//             onMouseEnter={() => setHoveredDropdown('events')}
//             onMouseLeave={() => setHoveredDropdown(null)}>
//               <button
//                 style={{
//                   background: 'none',
//                   border: 'none',
//                   color: hoveredDropdown === 'events' ? '#fbbf24' : 'white',
//                   fontSize: 'clamp(14px, 2vw, 16px)',
//                   fontWeight: '500',
//                   cursor: 'pointer',
//                   display: 'inline-flex',
//                   alignItems: 'center',
//                   gap: '6px',
//                   transition: 'all 0.1s ease',
//                   borderBottom: hoveredDropdown === 'events' ? '2px solid #fbbf24' : '2px solid transparent',
//                   paddingBottom: '4px'
//                 }}
//                 onClick={() => setHoveredDropdown(hoveredDropdown === 'events' ? null : 'events')}
//               >
//                 Events {hoveredDropdown === 'events' ? '▼' : ''}
//               </button>
              
//               <div className={hoveredDropdown === 'events' ? 'dropdown-menu' : 'dropdown-menu hidden'} style={{
//                 position: 'absolute',
//                 top: '100%',
//                 left: 0,
//                 backgroundColor: 'rgba(15, 23, 42, 0.95)',
//                 backdropFilter: 'blur(10px)',
//                 minWidth: '160px',
//                 borderRadius: '8px',
//                 padding: '8px 0',
//                 marginTop: '8px',
//                 boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//                 display: hoveredDropdown === 'events' ? 'block' : 'none',
//                 zIndex: 1001
//               }}>
//                 <button 
//                   onClick={() => handleSmoothScroll('recentpage')}
                  
//                   style={{
//                     width: '100%',
//                     padding: '12px 16px',
//                     color: 'white',
//                     textDecoration: 'none',
//                     display: 'block',
//                     transition: 'all 0.2s ease',
//                     borderLeft: '3px solid transparent',
//                     fontSize: 'clamp(13px, 2vw, 15px)',
//                     cursor: 'pointer',
//                     background: 'none',
//                     border: 'none',
//                     textAlign: 'left',
//                     fontWeight: '500'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
//                     e.currentTarget.style.borderLeft = '3px solid #fbbf24';
//                     e.currentTarget.style.color = '#fbbf24';
//                     e.currentTarget.style.paddingLeft = '20px';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = 'transparent';
//                     e.currentTarget.style.borderLeft = '3px solid transparent';
//                     e.currentTarget.style.color = 'white';
//                     e.currentTarget.style.paddingLeft = '16px';
//                   }}
//                 >
//                   Recent Events
//                 </button>
//                 <button 
//                   onClick={() => handleSmoothScroll('upcomingpage')} 
//                   style={{
//                     width: '100%',
//                     padding: '12px 16px',
//                     color: 'white',
//                     textDecoration: 'none',
//                     display: 'block',
//                     transition: 'all 0.2s ease',
//                     borderLeft: '3px solid transparent',
//                     fontSize: 'clamp(13px, 2vw, 15px)',
//                     cursor: 'pointer',
//                     background: 'none',
//                     border: 'none',
//                     textAlign: 'left',
//                     fontWeight: '500'
//                   }}
//                   onMouseEnter={(e) => {
//                     e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
//                     e.currentTarget.style.borderLeft = '3px solid #fbbf24';
//                     e.currentTarget.style.color = '#fbbf24';
//                     e.currentTarget.style.paddingLeft = '20px';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.currentTarget.style.backgroundColor = 'transparent';
//                     e.currentTarget.style.borderLeft = '3px solid transparent';
//                     e.currentTarget.style.color = 'white';
//                     e.currentTarget.style.paddingLeft = '16px';
//                   }}
//                 >
//                   Upcoming Events
//                 </button>
//               </div>
//             </li>
//           )}

//           {/* Login Button */}
//           {UserLoginStatus !== 'true' && (
//             <li className="nav-item" style={{
//               padding: '8px 0',
//               margin: '0 8px'
//             }}>
//               <Link 
//                 to="/home" 
//                 onClick={handleNavItemClick}
//                 style={{
//                   backgroundColor: '#fbbf24',
//                   color: '#065f46',
//                   textDecoration: 'none',
//                   padding: 'clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px)',
//                   borderRadius: '25px',
//                   fontWeight: '600',
//                   fontSize: 'clamp(13px, 2vw, 15px)',
//                   display: 'inline-block',
//                   transition: 'all 0.3s ease'
//                 }}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.backgroundColor = '#fcd34d';
//                   e.currentTarget.style.transform = 'scale(1.05)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.backgroundColor = '#fbbf24';
//                   e.currentTarget.style.transform = 'scale(1)';
//                 }}
//               >
//                 Login
//               </Link>
//             </li>
//           )}
//         </ul>

//         {/* User Dropdowns (Active Student / Alumni) */}
//         {(UserLoginStatus === 'true' || UserLoginStatu === 'true') && (
//           <div style={{
//             display: 'flex',
//             gap: '0',
//             marginLeft: 'auto'
//           }}
//           onMouseEnter={() => UserLoginStatus === 'true' && setHoveredDropdown('user')}
//           onMouseLeave={() => UserLoginStatus === 'true' && setHoveredDropdown(null)}>
//             {UserLoginStatus === 'true' && (
//               <div style={{ position: 'relative' }}>
//                 <button
//                   style={{
//                     background: 'none',
//                     border: 'none',
//                     color: hoveredDropdown === 'user' ? '#fbbf24' : 'white',
//                     fontSize: 'clamp(14px, 2vw, 16px)',
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '6px',
//                     transition: 'all 0.3s ease',
//                     borderBottom: hoveredDropdown === 'user' ? '2px solid #fbbf24' : '2px solid transparent',
//                     paddingBottom: '4px',
//                     padding: '8px 12px'
//                   }}
//                   onClick={() => setHoveredDropdown(hoveredDropdown === 'user' ? null : 'user')}
//                   onMouseEnter={() => setHoveredDropdown('user')}
//                   onMouseLeave={() => setHoveredDropdown(null)}
//                 >
//                   Active Student {hoveredDropdown === 'user' ? '▼' : '▶'}
//                 </button>
                
//                 <div style={{
//                   position: 'absolute',
//                   top: '100%',
//                   right: 0,
//                   backgroundColor: 'rgba(15, 23, 42, 0.95)',
//                   backdropFilter: 'blur(10px)',
//                   minWidth: '140px',
//                   borderRadius: '8px',
//                   padding: '8px 0',
//                   marginTop: '8px',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//                   display: hoveredDropdown === 'user' ? 'block' : 'none',
//                   zIndex: 1001
//                 }}>
//                   <button
//                     onClick={() => {
//                       LogOut();
//                       handleNavItemClick();
//                     }}
//                     style={{
//                       width: '100%',
//                       padding: '12px 16px',
//                       background: 'none',
//                       border: 'none',
//                       color: 'white',
//                       textAlign: 'left',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s ease',
//                       borderLeft: '3px solid transparent',
//                       fontSize: 'clamp(13px, 2vw, 15px)',
//                       fontWeight: '500'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
//                       e.currentTarget.style.borderLeft = '3px solid #fbbf24';
//                       e.currentTarget.style.color = '#fbbf24';
//                       e.currentTarget.style.paddingLeft = '20px';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                       e.currentTarget.style.borderLeft = '3px solid transparent';
//                       e.currentTarget.style.color = 'white';
//                       e.currentTarget.style.paddingLeft = '16px';
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}

//             {UserLoginStatu === 'true' && (
//               <div style={{ position: 'relative' }}>
//                 <button
//                   style={{
//                     background: 'none',
//                     border: 'none',
//                     color: hoveredDropdown === 'alumni' ? '#fbbf24' : 'white',
//                     fontSize: 'clamp(14px, 2vw, 16px)',
//                     fontWeight: '500',
//                     cursor: 'pointer',
//                     display: 'inline-flex',
//                     alignItems: 'center',
//                     gap: '6px',
//                     transition: 'all 0.3s ease',
//                     borderBottom: hoveredDropdown === 'alumni' ? '2px solid #fbbf24' : '2px solid transparent',
//                     paddingBottom: '4px',
//                     padding: '8px 12px'
//                   }}
//                   onClick={() => setHoveredDropdown(hoveredDropdown === 'alumni' ? null : 'alumni')}
//                   onMouseEnter={() => setHoveredDropdown('alumni')}
//                   onMouseLeave={() => setHoveredDropdown(null)}
//                 >
//                   Alumni {hoveredDropdown === 'alumni' ? '▼' : '▶'}
//                 </button>
                
//                 <div style={{
//                   position: 'absolute',
//                   top: '100%',
//                   right: 0,
//                   backgroundColor: 'rgba(15, 23, 42, 0.95)',
//                   backdropFilter: 'blur(10px)',
//                   minWidth: '140px',
//                   borderRadius: '8px',
//                   padding: '8px 0',
//                   marginTop: '8px',
//                   boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
//                   display: hoveredDropdown === 'alumni' ? 'block' : 'none',
//                   zIndex: 1001
//                 }}>
//                   <button
//                     onClick={() => {
//                       LogOutal();
//                       handleNavItemClick();
//                     }}
//                     style={{
//                       width: '100%',
//                       padding: '12px 16px',
//                       background: 'none',
//                       border: 'none',
//                       color: 'white',
//                       textAlign: 'left',
//                       cursor: 'pointer',
//                       transition: 'all 0.2s ease',
//                       borderLeft: '3px solid transparent',
//                       fontSize: 'clamp(13px, 2vw, 15px)',
//                       fontWeight: '500'
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
//                       e.currentTarget.style.borderLeft = '3px solid #fbbf24';
//                       e.currentTarget.style.color = '#fbbf24';
//                       e.currentTarget.style.paddingLeft = '20px';
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.backgroundColor = 'transparent';
//                       e.currentTarget.style.borderLeft = '3px solid transparent';
//                       e.currentTarget.style.color = 'white';
//                       e.currentTarget.style.paddingLeft = '16px';
//                     }}
//                   >
//                     Logout
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// }

// export default NavBar;


import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const UserLoginStatus = localStorage.getItem('UserLoginStatus');
const UserLoginStatu = localStorage.getItem('UserLoginStatu');

function NavBar() {
  const [active, setActive] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const active2 = active.length > 0 ? active.reverse() : [];

  function LogOut() {
    localStorage.removeItem('UserLoginStatus');
    window.location.href = '/login';
  }

  function LogOutal() {
    localStorage.removeItem('UserLoginStatu');
    window.location.href = '/loginal';
  }

  const handleNavItemClick = () => {
    setIsMenuOpen(false);
  };

  const handleSmoothScroll = (sectionId) => {
    handleNavItemClick();
    setOpenDropdown(null);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  return (
    <nav style={{
      background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
      padding: 0,
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      width: '100%'
    }}>
      <style>{`
        @media (max-width: 768px) {
          .nav-menu {
            position: fixed !important;
            top: 70px !important;
            left: 0 !important;
            right: 0 !important;
            width: 100% !important;
            flex-direction: column !important;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%) !important;
            border-top: 2px solid #fbbf24 !important;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3) !important;
          }
          
          .nav-menu.closed {
            display: none !important;
          }
          
          .nav-item {
            border-bottom: 1px solid rgba(255, 255, 255, 0.1) !important;
            width: 100% !important;
          }
          
          .dropdown-menu {
            position: static !important;
            background: rgba(15, 23, 42, 0.95) !important;
            border-radius: 0 !important;
            margin-top: 0 !important;
            box-shadow: none !important;
            border-left: 4px solid #fbbf24 !important;
            padding: 10px 0 10px 20px !important;
            display: block !important;
            max-height: 1000px !important;
            transition: all 0.3s ease !important;
          }
          
          .dropdown-menu.hidden {
            display: none !important;
            max-height: 0 !important;
          }
        }
        
        @media (min-width: 769px) {
          .toggle-btn {
            display: none !important;
          }
          
          .nav-menu {
            display: flex !important;
          }
          
          .nav-menu.closed {
            display: flex !important;
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      <div style={{
        padding: '16px 20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        maxWidth: '100%',
        margin: '0 auto'
      }}>
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            textDecoration: 'none',
            color: 'white',
            fontSize: '22px',
            fontWeight: 'bold',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#fbbf24';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'white';
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          {!isLoading && active2[0] && (
            <img 
              src={active2[0]?.photo} 
              alt="NSU Logo" 
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #fbbf24'
              }}
            />
          )}
          <span style={{ fontSize: 'clamp(18px, 5vw, 24px)' }}>NSU-KSU</span>
        </Link>

        {/* Toggle Button for Mobile */}
        <button 
          className="toggle-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '28px',
            cursor: 'pointer',
            padding: '0 10px',
            display: 'block',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#fbbf24'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Navigation Menu */}
        <ul 
          className={`nav-menu ${isMenuOpen ? '' : 'closed'}`}
          style={{
            display: 'flex',
            flexDirection: 'row',
            listStyle: 'none',
            margin: 0,
            paddingLeft: "5px",
            gap: '5px',
            alignItems: 'center',
            marginLeft: 'auto'
          }}
        >
          {/* Home */}
          <li className="nav-item" style={{
            padding: '8px 0',
            margin: '0 8px'
          }}>
            <Link 
              to="/" 
              onClick={handleNavItemClick}
              style={{
                color: hoveredItem === 'home' ? '#fbbf24' : 'white',
                textDecoration: 'none',
                fontSize: 'clamp(14px, 2vw, 16px)',
                fontWeight: '500',
                display: 'inline-block',
                transition: 'all 0.3s ease',
                borderBottom: hoveredItem === 'home' ? '2px solid #fbbf24' : '2px solid transparent',
                paddingBottom: '4px'
              }}
              onMouseEnter={() => setHoveredItem('home')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              Home
            </Link>
          </li>

          {/* Dashboard */}
          {UserLoginStatus === 'true' && (
            <li className="nav-item" style={{
              padding: '8px 0',
              margin: '0 8px'
            }}>
              <Link 
                to="/board" 
                onClick={handleNavItemClick}
                style={{
                  color: hoveredItem === 'dashboard' ? '#fbbf24' : 'white',
                  textDecoration: 'none',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '500',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  borderBottom: hoveredItem === 'dashboard' ? '2px solid #fbbf24' : '2px solid transparent',
                  paddingBottom: '4px'
                }}
                onMouseEnter={() => setHoveredItem('dashboard')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Dashboard
              </Link>
            </li>
          )}

          {/* Excos */}
          {UserLoginStatus !== 'true' && (
            <li className="nav-item" style={{
              padding: '8px 0',
              margin: '0 8px'
            }}>
              <button
                onClick={() => handleSmoothScroll('excopage')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: hoveredItem === 'excos' ? '#fbbf24' : 'white',
                  textDecoration: 'none',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '500',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
                  borderBottom: hoveredItem === 'excos' ? '2px solid #fbbf24' : '2px solid transparent',
                  paddingBottom: '4px',
                  cursor: 'pointer'
                }}
                onMouseEnter={() => setHoveredItem('excos')}
                onMouseLeave={() => setHoveredItem(null)}
              >
                Excos
              </button>
            </li>
          )}

          {/* Events Dropdown */}
          {UserLoginStatus !== 'true' && (
            <li 
              className="nav-item" 
              ref={dropdownRef}
              style={{
                position: 'relative',
                padding: '8px 0',
                margin: '0 8px'
              }}
              onMouseEnter={() => setHoveredDropdown('events')}
              onMouseLeave={() => setHoveredDropdown(null)}
            >
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  color: (hoveredDropdown === 'events' || openDropdown === 'events') ? '#fbbf24' : 'white',
                  fontSize: 'clamp(14px, 2vw, 16px)',
                  fontWeight: '500',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.1s ease',
                  borderBottom: (hoveredDropdown === 'events' || openDropdown === 'events') ? '2px solid #fbbf24' : '2px solid transparent',
                  paddingBottom: '4px'
                }}
                onClick={() => setOpenDropdown(openDropdown === 'events' ? null : 'events')}
              >
                Events {(hoveredDropdown === 'events' || openDropdown === 'events') ? '▼' : ''}
              </button>
              
              <div 
                className={openDropdown === 'events' ? 'dropdown-menu' : 'dropdown-menu hidden'} 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(10px)',
                  minWidth: '160px',
                  borderRadius: '8px',
                  padding: '8px 0',
                  marginTop: '8px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                  display: openDropdown === 'events' ? 'block' : 'none',
                  zIndex: 1001
                }}
              >
                <button 
                  onClick={() => handleSmoothScroll('recentpage')}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.2s ease',
                    borderLeft: '3px solid transparent',
                    fontSize: 'clamp(13px, 2vw, 15px)',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
                    e.currentTarget.style.borderLeft = '3px solid #fbbf24';
                    e.currentTarget.style.color = '#fbbf24';
                    e.currentTarget.style.paddingLeft = '20px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderLeft = '3px solid transparent';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '16px';
                  }}
                >
                  Recent Events
                </button>
                <button 
                  onClick={() => handleSmoothScroll('upcomingpage')} 
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'block',
                    transition: 'all 0.2s ease',
                    borderLeft: '3px solid transparent',
                    fontSize: 'clamp(13px, 2vw, 15px)',
                    cursor: 'pointer',
                    background: 'none',
                    border: 'none',
                    textAlign: 'left',
                    fontWeight: '500'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
                    e.currentTarget.style.borderLeft = '3px solid #fbbf24';
                    e.currentTarget.style.color = '#fbbf24';
                    e.currentTarget.style.paddingLeft = '20px';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderLeft = '3px solid transparent';
                    e.currentTarget.style.color = 'white';
                    e.currentTarget.style.paddingLeft = '16px';
                  }}
                >
                  Upcoming Events
                </button>
              </div>
            </li>
          )}

          {/* Login Button */}
          {UserLoginStatus !== 'true' && (
            <li className="nav-item" style={{
              padding: '8px 0',
              margin: '0 8px'
            }}>
              <Link 
                to="/home" 
                onClick={handleNavItemClick}
                style={{
                  backgroundColor: '#fbbf24',
                  color: '#065f46',
                  textDecoration: 'none',
                  padding: 'clamp(8px, 2vw, 12px) clamp(16px, 3vw, 24px)',
                  borderRadius: '25px',
                  fontWeight: '600',
                  fontSize: 'clamp(13px, 2vw, 15px)',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#fcd34d';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#fbbf24';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Login
              </Link>
            </li>
          )}
        </ul>

        {/* User Dropdowns (Active Student / Alumni) */}
        {(UserLoginStatus === 'true' || UserLoginStatu === 'true') && (
          <div style={{
            display: 'flex',
            gap: '0',
            marginLeft: 'auto'
          }}>
            {UserLoginStatus === 'true' && (
              <div style={{ position: 'relative' }}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: hoveredDropdown === 'user' ? '#fbbf24' : 'white',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.3s ease',
                    borderBottom: hoveredDropdown === 'user' ? '2px solid #fbbf24' : '2px solid transparent',
                    paddingBottom: '4px',
                    padding: '8px 12px'
                  }}
                  onClick={() => setHoveredDropdown(hoveredDropdown === 'user' ? null : 'user')}
                  onMouseEnter={() => setHoveredDropdown('user')}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  Active Student {hoveredDropdown === 'user' ? '▼' : '▶'}
                </button>
                
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(10px)',
                  minWidth: '140px',
                  borderRadius: '8px',
                  padding: '8px 0',
                  marginTop: '8px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                  display: hoveredDropdown === 'user' ? 'block' : 'none',
                  zIndex: 1001
                }}>
                  <button
                    onClick={() => {
                      LogOut();
                      handleNavItemClick();
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      borderLeft: '3px solid transparent',
                      fontSize: 'clamp(13px, 2vw, 15px)',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
                      e.currentTarget.style.borderLeft = '3px solid #fbbf24';
                      e.currentTarget.style.color = '#fbbf24';
                      e.currentTarget.style.paddingLeft = '20px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderLeft = '3px solid transparent';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.paddingLeft = '16px';
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}

            {UserLoginStatu === 'true' && (
              <div style={{ position: 'relative' }}>
                <button
                  style={{
                    background: 'none',
                    border: 'none',
                    color: hoveredDropdown === 'alumni' ? '#fbbf24' : 'white',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                    fontWeight: '500',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    transition: 'all 0.3s ease',
                    borderBottom: hoveredDropdown === 'alumni' ? '2px solid #fbbf24' : '2px solid transparent',
                    paddingBottom: '4px',
                    padding: '8px 12px'
                  }}
                  onClick={() => setHoveredDropdown(hoveredDropdown === 'alumni' ? null : 'alumni')}
                  onMouseEnter={() => setHoveredDropdown('alumni')}
                  onMouseLeave={() => setHoveredDropdown(null)}
                >
                  Alumni {hoveredDropdown === 'alumni' ? '▼' : '▶'}
                </button>
                
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  right: 0,
                  backgroundColor: 'rgba(15, 23, 42, 0.95)',
                  backdropFilter: 'blur(10px)',
                  minWidth: '140px',
                  borderRadius: '8px',
                  padding: '8px 0',
                  marginTop: '8px',
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)',
                  display: hoveredDropdown === 'alumni' ? 'block' : 'none',
                  zIndex: 1001
                }}>
                  <button
                    onClick={() => {
                      LogOutal();
                      handleNavItemClick();
                    }}
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'none',
                      border: 'none',
                      color: 'white',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      borderLeft: '3px solid transparent',
                      fontSize: 'clamp(13px, 2vw, 15px)',
                      fontWeight: '500'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(251, 191, 36, 0.1)';
                      e.currentTarget.style.borderLeft = '3px solid #fbbf24';
                      e.currentTarget.style.color = '#fbbf24';
                      e.currentTarget.style.paddingLeft = '20px';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderLeft = '3px solid transparent';
                      e.currentTarget.style.color = 'white';
                      e.currentTarget.style.paddingLeft = '16px';
                    }}
                  >
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;

