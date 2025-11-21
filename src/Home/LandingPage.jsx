


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import RecentEvent from "./Moving";
// import Upcoming from "./UpcomingEvent";
// import toast from "react-hot-toast";
// import { Link } from "react-router-dom"; // Import Link for navigation



// const LandingPage = () => {
//   useEffect(() => {
//     Aos.init();
//   }, []);

//   const [active, setActive] = useState([]);
//   const [excodata, setExcodata] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const[error,setError]=useState(null)
//   const [loading1, setLoading1] = useState(true);
//   const[error1,setError1]=useState(null)

 

  



//   useEffect(()=>{
//    axios("https://taiwoakinpennu2.pythonanywhere.com/pres/").then((res)=>{
//     setActive(res.data)
//    }).catch((error)=>{
//     setError1(error)
//    }).finally(()=>{
//     setLoading1(false)
//    })
//   })

//   useEffect(()=>{
//     axios("https://taiwoakinpennu2.pythonanywhere.com/port/").then((response)=>{
//       setExcodata(response.data)
//     }).catch((error)=>{
//       setError(error)
//     }).finally(()=>{
//       setLoading(false)
//     })

//   },[])

//   const active2 = active?.length > 0 ? active[active?.length - 1] : null;

//   return (
//     <div className="min-vh-100 "  style={{ scrollBehavior: 'smooth', overflow: 'auto' }}>
//       {loading && loading1 ? (
//         <h1 style={{ display: 'grid', height: '100vh', placeItems: 'center' }} className="text-success">Welcome to NSU-KSU</h1>
//       ) : (
//         <div className="" style={{marginTop:"10rem"}}>
// <section className=" " style={{marginTop:'-4rem', marginBottom:""}} data-aos="zoom-in">
//       <div
//         className="d-flex flex-column flex-md-row justify-content-between p-4 bg-white rounded-3"
//         style={{
//           backgroundColor: "#fff",
//           borderRadius: "10px",
//         }}
//       >
//         <div className="flex-column mb-4 mb-md-0 w-100">
//           <div className="mb-4">
//             <h1>
//               <span className="text-success">NIGERIAN </span>STUDENTS
//             </h1>
//             <h2>
//               KING SAUD <span className="text-success">UNIVERSITY</span>
//             </h2>
//             <h3 className="fw-normal">Riyadh, Saudi Arabia</h3>
//           </div>

//           <p
            
//             style={{
//               fontSize: "18px",
//               marginBottom: "20px",
//                opacity: 0.9 
              
//             }}
//           >
//             {active2?.text}
           
//           </p>

//           <p className="text-success fs-5" style={{ fontWeight: "500", marginBottom: "0" }}>
//             {active2?.name}
//           </p>
//           <p className="fs-3" style={{ marginTop: "-0.2rem", fontWeight: "500" }}>
//             NSU-KSU President
//           </p>
//         </div>

//         <div className="d-flex justify-content-center align-items-center container " style={{marginTop:"-205px"}}>
//         <img src="https://static.vecteezy.com/system/resources/previews/012/352/057/original/graduation-hat-illustration-in-the-flat-style-graduation-cap-isolated-on-the-transparent-background-vector.jpg" alt="NSU Logo"  style={{maxWidth: "600px", width: "100%",transition: "transform 0.3s ease-in-out",objectFit: "contain", height:"700px"}}/>
//         </div>
//       </div>
//     </section>

//           {/* Excos Section */}
//           <section id="excopage" style={{marginBottom:'10rem'}} >
//             <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "50px" }}>
//               Meet Our Excos
//             </h3>
//             <div className="d-flex flex-wrap justify-content-center gap-4">
//               {excodata.map((el) => (
//                 <div
//                   key={el.id}
//                   style={{
//                     width: "300px",
//                     border: "1px solid #ccc",
//                     borderRadius: "10px",
//                     boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                     padding: "20px",
//                     backgroundColor: "#fff",
//                     textAlign: "center",
//                     marginBottom: "20px",
//                   }}
//                 >
                  
//                     <img
//                       src={el?.photo}
//                       alt={el.name}
//                       style={{
//                         width: "100%",
//                         height: "200px",
//                         objectFit: "cover",
//                         borderRadius: "10px 10px 0 0",
//                         marginBottom: "15px",
//                       }}
//                     />
                  
//                   <h3 style={{ fontSize: "1.2em", color: "#333", marginBottom: "10px" }}>
//                     {el.name}
//                   </h3>
//                   <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
//                     <strong>Post:</strong> {el.exco}
//                   </p>
//                   <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
//                     <strong>Department:</strong> {el.department}
//                   </p>
//                   <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
//                     <strong>Degree:</strong> {el.degree}
//                   </p>
//                   <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
//                     <strong>Mobile:</strong> {el.mobile}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Recent Events Section */}
//           <section style={{marginBottom:'10rem'}} data-aos="zoom-in">
//             <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "40px" }}>
//               Recent Events
//             </h3>
//             <div className="text-center">
//               <RecentEvent />
//             </div>
//           </section>

//           {/* Upcoming Events Section */}
//           <section  style={{marginBottom:'10rem'}} data-aos="zoom-in">
//             <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "40px" }}>
//               Upcoming Events
//             </h3>
//             <div className="text-center" style={{ fontSize: "2rem", marginBottom: "40px" }}>
//               <Upcoming />
//             </div>
//           </section>

//           {/* "Join the Community" Button */}
//           <div className="text-center mt-5" style={{ marginBottom: "30px" }}>
//             <Link to="/home">
//               <button
//                 className="btn btn-success btn-lg"
//                 style={{
//                   backgroundColor: "#8bc34a", // Light green background
//                   borderColor: "#8bc34a",
//                   padding: "15px 30px",
//                   fontSize: "1.25rem",
//                   fontWeight: "600",
//                   borderRadius: "30px",
//                   transition: "all 0.3s ease-in-out",
//                   marginBottom: "50px", // Ensure some space between button and footer
//                 }}
//                 onMouseEnter={(e) => {
//                   e.target.style.transform = "scale(1.05)";
//                   e.target.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.1)";
//                 }}
//                 onMouseLeave={(e) => {
//                   e.target.style.transform = "scale(1)";
//                   e.target.style.boxShadow = "none";
//                 }}
//               >
//                 Join the Community
//               </button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import RecentEvent from "./Moving";
// import Upcoming from "./UpcomingEvent";
// import { MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   const [active, setActive] = useState([]);
//   const [excodata, setExcodata] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [loading1, setLoading1] = useState(true);
//   const [error1, setError1] = useState(null);

//   useEffect(() => {
//     axios("https://taiwoakinpennu2.pythonanywhere.com/pres/")
//       .then((res) => setActive(res.data))
//       .catch((error) => setError1(error))
//       .finally(() => setLoading1(false));
//   }, []);

//   useEffect(() => {
//     axios("https://taiwoakinpennu2.pythonanywhere.com/port/")
//       .then((response) => setExcodata(response.data))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, []);

//   const active2 = active?.length > 0 ? active[active?.length - 1] : null;

//   const styles = {
//     heroSection: {
//       background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #14b8a6 100%)',
//       minHeight: '100vh',
//       position: 'relative',
//       overflow: 'hidden',
//       color: 'white',
//       paddingTop: '100px',
//       paddingBottom: '80px'
//     },
//     heroPattern: {
//       position: 'absolute',
//       inset: 0,
//       backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
//       zIndex: 1
//     },
//     badge: {
//       display: 'inline-block',
//       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//       backdropFilter: 'blur(10px)',
//       padding: '8px 20px',
//       borderRadius: '50px',
//       fontSize: '14px',
//       fontWeight: '500',
//       marginBottom: '20px'
//     },
//     ctaButton: {
//       backgroundColor: '#fbbf24',
//       color: '#065f46',
//       padding: '16px 40px',
//       borderRadius: '50px',
//       fontWeight: '600',
//       fontSize: '18px',
//       border: 'none',
//       cursor: 'pointer',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//       transition: 'all 0.3s ease',
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '10px'
//     },
//     statsSection: {
//       background: 'linear-gradient(to right, #059669, #10b981)',
//       padding: '80px 20px',
//       color: 'white'
//     },
//     statCard: {
//       textAlign: 'center',
//       padding: '20px'
//     },
//     excoCard: {
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       overflow: 'hidden',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//       transition: 'all 0.3s ease',
//       border: '1px solid #f0f0f0'
//     },
//     excoImage: {
//       height: '280px',
//       width: '100%',
//       objectFit: 'cover',
//       background: 'linear-gradient(135deg, #10b981, #059669)'
//     },
//     presidentCard: {
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       padding: '50px',
//       boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
//       border: '1px solid #d1fae5',
//       margin: '60px auto',
//       maxWidth: '900px'
//     },
//     waveDivider: {
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       zIndex: 2
//     },
//     eventsSection: {
//       padding: '80px 20px',
//       backgroundColor: '#ffffff'
//     },
//     sectionTitle: {
//       fontSize: 'clamp(2rem, 4vw, 3rem)',
//       fontWeight: 'bold',
//       color: '#1f2937',
//       marginBottom: '15px',
//       textAlign: 'center'
//     },
//     sectionSubtitle: {
//       fontSize: '18px',
//       color: '#6b7280',
//       maxWidth: '700px',
//       margin: '0 auto 50px',
//       textAlign: 'center'
//     }
//   };

//   if (loading && loading1) {
//     return (
//       <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)' }}>
//         <div style={{ textAlign: 'center' }}>
//           <div style={{
//             width: '64px',
//             height: '64px',
//             border: '4px solid #059669',
//             borderTopColor: 'transparent',
//             borderRadius: '50%',
//             animation: 'spin 1s linear infinite',
//             margin: '0 auto 20px'
//           }}></div>
//           <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#047857' }}>Welcome to NSU-KSU</h1>
//         </div>
//         <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//       </div>
//     );
//   }

//   return (
//     <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ffffff, #f0fdf4)' }}>
//       {/* Hero Section */}
//       <section style={styles.heroSection}>
//         <div style={styles.heroPattern}></div>
        
//         <div className="container" style={{ position: 'relative', zIndex: 10 }}>
//           <div className="row align-items-center">
//             <div className="col-lg-6 mb-5 mb-lg-0">
//               <div style={styles.badge}>🎓 Student Community</div>
              
//               <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '20px' }}>
//                 <span style={{ color: 'white' }}>NIGERIAN</span><br />
//                 <span style={{ color: '#fbbf24' }}>STUDENTS</span>
//               </h1>
              
//               <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '600', marginBottom: '20px' }}>
//                 King Saud <span style={{ color: '#fbbf24' }}>University</span>
//               </h2>
              
//               <p style={{ fontSize: '18px', color: '#d1fae5', marginBottom: '15px',display: 'flex', gap:"" }}>
//                 <MapPin className="w-5 h-5" />
//                 Riyadh, Saudi Arabia
//               </p>
              
//               <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#ecfdf5', lineHeight: '1.8', marginBottom: '30px', maxWidth: '600px' }}>
//                 Join our vibrant community of Nigerian students pursuing academic excellence at King Saud University.
//               </p>
              
//               <Link to="/home" style={{ textDecoration: 'none' }}>
//                 <button 
//                   style={styles.ctaButton}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = 'scale(1.05)';
//                     e.target.style.backgroundColor = '#fcd34d';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = 'scale(1)';
//                     e.target.style.backgroundColor = '#fbbf24';
//                   }}
//                 >
//                   Join the Community
//                   <span>→</span>
//                 </button>
//               </Link>
//             </div>
            
//             <div className="col-lg-6 d-none d-lg-block">
//               <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
//                 <div style={{
//                   position: 'absolute',
//                   inset: 0,
//                   background: '#fbbf24',
//                   borderRadius: '50%',
//                   filter: 'blur(100px)',
//                   opacity: 0.2,
//                   animation: 'pulse 3s ease-in-out infinite'
//                 }}></div>
//                 <img 
//                   src="https://static.vecteezy.com/system/resources/previews/012/352/057/original/graduation-hat-illustration-in-the-flat-style-graduation-cap-isolated-on-the-transparent-background-vector.jpg"
//                   alt="Graduation Cap"
//                   style={{ position: 'relative', zIndex: 10, width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
        
//         <svg style={styles.waveDivider} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
//         </svg>
//       </section>

//       {/* President's Message */}
//       {active2 && (
//         <section className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
//           <div style={styles.presidentCard}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
//               <div style={{
//                 width: '50px',
//                 height: '50px',
//                 backgroundColor: '#d1fae5',
//                 borderRadius: '50%',
//                 display: 'flex',
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 fontSize: '24px'
//               }}>
//                 🏆
//               </div>
//               <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>President's Message</h3>
//             </div>
            
//             <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.8', marginBottom: '30px' }}>
//               {active2.text}
//             </p>
            
//             <div style={{ borderTop: '2px solid #d1fae5', paddingTop: '25px' }}>
//               <p style={{ color: '#059669', fontWeight: '600', fontSize: '20px', marginBottom: '5px' }}>{active2.name}</p>
//               <p style={{ color: '#9ca3af', margin: 0 }}>NSU-KSU President</p>
//             </div>
//           </div>
//         </section>
//       )}

//       {/* Stats Section */}
//       <section style={styles.statsSection}>
//         <div className="container">
//           <div className="row">
//             {[
//               { label: "Active Members", value: "500+", icon: "👥" },
//               { label: "Events Yearly", value: "50+", icon: "📅" },
//               { label: "Departments", value: "20+", icon: "🏆" },
//               { label: "Years Active", value: "10+", icon: "⭐" }
//             ].map((stat, idx) => (
//               <div key={idx} className="col-6 col-md-3 mb-4 mb-md-0">
//                 <div style={styles.statCard}>
//                   <div style={{ fontSize: '40px', marginBottom: '15px' }}>{stat.icon}</div>
//                   <p style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>{stat.value}</p>
//                   <p style={{ color: '#d1fae5', fontSize: '16px', margin: 0 }}>{stat.label}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Excos Section */}
//       <section id="excopage" className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
//         <div className="text-center" style={{ marginBottom: '60px' }}>
//           <h3 style={styles.sectionTitle}>
//             Meet Our Executive Team
//           </h3>
//           <p style={styles.sectionSubtitle}>
//             Dedicated leaders committed to serving our community
//           </p>
//         </div>
        
//         <div className="row g-4">
//           {excodata.map((el) => (
//             <div key={el.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
//               <div 
//                 style={styles.excoCard}
//                 onMouseEnter={(e) => {
//                   e.currentTarget.style.transform = 'translateY(-10px)';
//                   e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
//                 }}
//                 onMouseLeave={(e) => {
//                   e.currentTarget.style.transform = 'translateY(0)';
//                   e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
//                 }}
//               >
//                 <div style={{ position: 'relative', overflow: 'hidden' }}>
//                   <img
//                     src={el?.photo}
//                     alt={el.name}
//                     style={styles.excoImage}
//                   />
//                   <div style={{
//                     position: 'absolute',
//                     inset: 0,
//                     background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
//                   }}></div>
//                 </div>
                
//                 <div style={{ padding: '25px' }}>
//                   <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
//                     {el.name}
//                   </h4>
                  
//                   <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
//                     <p style={{ marginBottom: '8px' }}>
//                       <span style={{ fontWeight: '600', color: '#374151' }}>Position: </span>
//                       <span style={{ color: '#6b7280' }}>{el.exco}</span>
//                     </p>
//                     <p style={{ marginBottom: '8px' }}>
//                       <span style={{ fontWeight: '600', color: '#374151' }}>Department: </span>
//                       <span style={{ color: '#6b7280' }}>{el.department}</span>
//                     </p>
//                     <p style={{ marginBottom: '8px' }}>
//                       <span style={{ fontWeight: '600', color: '#374151' }}>Degree: </span>
//                       <span style={{ color: '#6b7280' }}>{el.degree}</span>
//                     </p>
//                     <p style={{ marginBottom: 0 }}>
//                       <span style={{ fontWeight: '600', color: '#374151' }}>Mobile: </span>
//                       <span style={{ color: '#6b7280' }}>{el.mobile}</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Recent Events Section */}
//       <section id="recentpage" style={styles.eventsSection}>
//         <div className="container">
//           <h3 style={styles.sectionTitle}>Recent Events</h3>
//           <p style={styles.sectionSubtitle}>
//             Check out our latest activities and memorable moments
//           </p>
//           <div className="text-center">
//             <RecentEvent />
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section style={{ ...styles.eventsSection, backgroundColor: '#f9fafb' }} id="upcomingpage">
//         <div className="container">
//           <h3 style={styles.sectionTitle}>Upcoming Events</h3>
//           <p style={styles.sectionSubtitle}>
//             Don't miss out on our exciting upcoming programs and gatherings
//           </p>
//           <div className="text-center">
//             <Upcoming />
//           </div>
//         </div>
//       </section>

//       {/* Final CTA */}
//       <section style={{
//         background: 'linear-gradient(135deg, #059669, #10b981, #14b8a6)',
//         padding: '80px 20px',
//         position: 'relative',
//         overflow: 'hidden'
//       }}>
//         <div style={styles.heroPattern}></div>
//         <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
//           <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
//             Ready to Join Us?
//           </h2>
//           <p style={{ fontSize: '20px', color: '#d1fae5', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
//             Become part of a thriving community of Nigerian students at King Saud University
//           </p>
//           <Link to="/home" style={{ textDecoration: 'none' }}>
//             <button 
//               style={styles.ctaButton}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = 'scale(1.05)';
//                 e.target.style.backgroundColor = '#fcd34d';
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = 'scale(1)';
//                 e.target.style.backgroundColor = '#fbbf24';
//               }}
//             >
//               Get Started Today
//               <span>→</span>
//             </button>
//           </Link>
//         </div>
//       </section>

//       {/* Footer */}
//       {/* <footer style={{ backgroundColor: '#111827', color: '#9ca3af', padding: '50px 20px' }}>
//         <div className="container text-center">
//           <div style={{ marginBottom: '25px' }}>
//             <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: 'white', marginBottom: '10px' }}>NSU-KSU</h3>
//             <p style={{ color: '#6b7280' }}>Nigerian Students Union - King Saud University</p>
//           </div>
          
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '30px', marginBottom: '25px', fontSize: '24px' }}>
//             <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}>📧</span>
//             <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}>📱</span>
//             <span style={{ cursor: 'pointer', transition: 'color 0.3s' }}>📍</span>
//           </div>
          
//           <p style={{ fontSize: '14px', color: '#6b7280', margin: 0 }}>
//             © 2024 NSU-KSU. All rights reserved.
//           </p>
//         </div>
//       </footer> */}

//       <style>{`
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.3; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import RecentEvent from "./Moving";
// import Upcoming from "./UpcomingEvent";
// import { MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   const [active, setActive] = useState([]);
//   const [excodata, setExcodata] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [loading1, setLoading1] = useState(true);
//   const [error1, setError1] = useState(null);

//   useEffect(() => {
//     axios("https://taiwoakinpennu2.pythonanywhere.com/pres/")
//       .then((res) => setActive(res.data))
//       .catch((error) => setError1(error))
//       .finally(() => setLoading1(false));
//   }, []);

//   useEffect(() => {
//     axios("https://taiwoakinpennu2.pythonanywhere.com/port/")
//       .then((response) => setExcodata(response.data))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, []);

//   const active2 = active?.length > 0 ? active[active?.length - 1] : null;

//   const styles = {
//     heroSection: {
//       background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #14b8a6 100%)',
//       minHeight: '100vh',
//       position: 'relative',
//       overflow: 'hidden',
//       color: 'white',
//       paddingTop: '100px',
//       paddingBottom: '80px'
//     },
//     heroPattern: {
//       position: 'absolute',
//       inset: 0,
//       backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
//       zIndex: 1
//     },
//     badge: {
//       display: 'inline-block',
//       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//       backdropFilter: 'blur(10px)',
//       padding: '8px 20px',
//       borderRadius: '50px',
//       fontSize: '14px',
//       fontWeight: '500',
//       marginBottom: '20px'
//     },
//     ctaButton: {
//       backgroundColor: '#fbbf24',
//       color: '#065f46',
//       padding: '16px 40px',
//       borderRadius: '50px',
//       fontWeight: '600',
//       fontSize: '18px',
//       border: 'none',
//       cursor: 'pointer',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//       transition: 'all 0.3s ease',
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '10px'
//     },
//     statsSection: {
//       background: 'linear-gradient(to right, #059669, #10b981)',
//       padding: '80px 20px',
//       color: 'white'
//     },
//     statCard: {
//       textAlign: 'center',
//       padding: '20px'
//     },
//     excoCard: {
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       overflow: 'hidden',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//       transition: 'all 0.3s ease',
//       border: '1px solid #f0f0f0'
//     },
//     excoImage: {
//       height: '280px',
//       width: '100%',
//       objectFit: 'cover',
//       background: 'linear-gradient(135deg, #10b981, #059669)'
//     },
//     presidentCard: {
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       padding: '50px',
//       boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
//       border: '1px solid #d1fae5',
//       margin: '60px auto',
//       maxWidth: '900px'
//     },
//     waveDivider: {
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       zIndex: 2
//     },
//     eventsSection: {
//       padding: '80px 20px',
//       backgroundColor: '#ffffff'
//     },
//     sectionTitle: {
//       fontSize: 'clamp(2rem, 4vw, 3rem)',
//       fontWeight: 'bold',
//       color: '#1f2937',
//       marginBottom: '15px',
//       textAlign: 'center'
//     },
//     sectionSubtitle: {
//       fontSize: '18px',
//       color: '#6b7280',
//       maxWidth: '700px',
//       margin: '0 auto 50px',
//       textAlign: 'center'
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ffffff, #f0fdf4)' }}>
//       {/* Loading State - Minimum Height to Prevent Blank Page */}
//       {loading && loading1 && (
//         <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)' }}>
//           <div style={{ textAlign: 'center' }}>
//             <div style={{
//               width: '64px',
//               height: '64px',
//               border: '4px solid #059669',
//               borderTopColor: 'transparent',
//               borderRadius: '50%',
//               animation: 'spin 1s linear infinite',
//               margin: '0 auto 20px'
//             }}></div>
//             <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#047857' }}>Welcome to NSU-KSU</h1>
//           </div>
//         </div>
//       )}

//       {/* Only render content if NOT loading */}
//       {!(loading && loading1) && (
//         <>
//           {/* Hero Section */}
//           <section style={styles.heroSection}>
//             <div style={styles.heroPattern}></div>
            
//             <div className="container" style={{ position: 'relative', zIndex: 10 }}>
//               <div className="row align-items-center">
//                 <div className="col-lg-6 mb-5 mb-lg-0">
//                   <div style={styles.badge}>🎓 Student Community</div>
                  
//                   <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '20px' }}>
//                     <span style={{ color: 'white' }}>NIGERIAN</span><br />
//                     <span style={{ color: '#fbbf24' }}>STUDENTS</span>
//                   </h1>
                  
//                   <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '600', marginBottom: '20px' }}>
//                     King Saud <span style={{ color: '#fbbf24' }}>University</span>
//                   </h2>
                  
//                   <p style={{ fontSize: '18px', color: '#d1fae5', marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
//                     <MapPin className="w-5 h-5" />
//                     Riyadh, Saudi Arabia
//                   </p>
                  
//                   <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#ecfdf5', lineHeight: '1.8', marginBottom: '30px', maxWidth: '600px' }}>
//                     Join our vibrant community of Nigerian students pursuing academic excellence at King Saud University.
//                   </p>
                  
//                   <Link to="/home" style={{ textDecoration: 'none' }}>
//                     <button 
//                       style={styles.ctaButton}
//                       onMouseEnter={(e) => {
//                         e.target.style.transform = 'scale(1.05)';
//                         e.target.style.backgroundColor = '#fcd34d';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.transform = 'scale(1)';
//                         e.target.style.backgroundColor = '#fbbf24';
//                       }}
//                     >
//                       Join the Community
//                       <span>→</span>
//                     </button>
//                   </Link>
//                 </div>
                
//                 <div className="col-lg-6 d-none d-lg-block">
//                   <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
//                     <div style={{
//                       position: 'absolute',
//                       inset: 0,
//                       background: '#fbbf24',
//                       borderRadius: '50%',
//                       filter: 'blur(100px)',
//                       opacity: 0.2,
//                       animation: 'pulse 3s ease-in-out infinite'
//                     }}></div>
//                     <img 
//                       src="https://static.vecteezy.com/system/resources/previews/012/352/057/original/graduation-hat-illustration-in-the-flat-style-graduation-cap-isolated-on-the-transparent-background-vector.jpg"
//                       alt="Graduation Cap"
//                       style={{ position: 'relative', zIndex: 10, width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <svg style={styles.waveDivider} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
//             </svg>
//           </section>

//           {/* President's Message */}
//           {active2 && (
//             <section className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
//               <div style={styles.presidentCard}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
//                   <div style={{
//                     width: '50px',
//                     height: '50px',
//                     backgroundColor: '#d1fae5',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '24px'
//                   }}>
//                     🏆
//                   </div>
//                   <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>President's Message</h3>
//                 </div>
                
//                 <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.8', marginBottom: '30px' }}>
//                   {active2.text}
//                 </p>
                
//                 <div style={{ borderTop: '2px solid #d1fae5', paddingTop: '25px' }}>
//                   <p style={{ color: '#059669', fontWeight: '600', fontSize: '20px', marginBottom: '5px' }}>{active2.name}</p>
//                   <p style={{ color: '#9ca3af', margin: 0 }}>NSU-KSU President</p>
//                 </div>
//               </div>
//             </section>
//           )}

//           {/* Stats Section */}
//           <section style={styles.statsSection}>
//             <div className="container">
//               <div className="row">
//                 {[
//                   { label: "Active Members", value: "500+", icon: "👥" },
//                   { label: "Events Yearly", value: "50+", icon: "📅" },
//                   { label: "Departments", value: "20+", icon: "🏆" },
//                   { label: "Years Active", value: "10+", icon: "⭐" }
//                 ].map((stat, idx) => (
//                   <div key={idx} className="col-6 col-md-3 mb-4 mb-md-0">
//                     <div style={styles.statCard}>
//                       <div style={{ fontSize: '40px', marginBottom: '15px' }}>{stat.icon}</div>
//                       <p style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>{stat.value}</p>
//                       <p style={{ color: '#d1fae5', fontSize: '16px', margin: 0 }}>{stat.label}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Excos Section */}
//           <section id="excopage" className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
//             <div className="text-center" style={{ marginBottom: '60px' }}>
//               <h3 style={styles.sectionTitle}>
//                 Meet Our Executive Team
//               </h3>
//               <p style={styles.sectionSubtitle}>
//                 Dedicated leaders committed to serving our community
//               </p>
//             </div>
            
//             {excodata.length > 0 ? (
//               <div className="row g-4">
//                 {excodata.map((el) => (
//                   <div key={el.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
//                     <div 
//                       style={styles.excoCard}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = 'translateY(-10px)';
//                         e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = 'translateY(0)';
//                         e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
//                       }}
//                     >
//                       <div style={{ position: 'relative', overflow: 'hidden' }}>
//                         <img
//                           src={el?.photo}
//                           alt={el.name}
//                           style={styles.excoImage}
//                         />
//                         <div style={{
//                           position: 'absolute',
//                           inset: 0,
//                           background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
//                         }}></div>
//                       </div>
                      
//                       <div style={{ padding: '25px' }}>
//                         <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
//                           {el.name}
//                         </h4>
                        
//                         <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
//                           <p style={{ marginBottom: '8px' }}>
//                             <span style={{ fontWeight: '600', color: '#374151' }}>Position: </span>
//                             <span style={{ color: '#6b7280' }}>{el.exco}</span>
//                           </p>
//                           <p style={{ marginBottom: '8px' }}>
//                             <span style={{ fontWeight: '600', color: '#374151' }}>Department: </span>
//                             <span style={{ color: '#6b7280' }}>{el.department}</span>
//                           </p>
//                           <p style={{ marginBottom: '8px' }}>
//                             <span style={{ fontWeight: '600', color: '#374151' }}>Degree: </span>
//                             <span style={{ color: '#6b7280' }}>{el.degree}</span>
//                           </p>
//                           <p style={{ marginBottom: 0 }}>
//                             <span style={{ fontWeight: '600', color: '#374151' }}>Mobile: </span>
//                             <span style={{ color: '#6b7280' }}>{el.mobile}</span>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
//                 <p>Loading executive team...</p>
//               </div>
//             )}
//           </section>

//           {/* Recent Events Section */}
//           <section id="recentpage" style={styles.eventsSection}>
//             <div className="container">
//               <h3 style={styles.sectionTitle}>Recent Events</h3>
//               <p style={styles.sectionSubtitle}>
//                 Check out our latest activities and memorable moments
//               </p>
//               <div className="text-center">
//                 <RecentEvent />
//               </div>
//             </div>
//           </section>

//           {/* Upcoming Events Section */}
//           <section style={{ ...styles.eventsSection, backgroundColor: '#f9fafb' }} id="upcomingpage">
//             <div className="container">
//               <h3 style={styles.sectionTitle}>Upcoming Events</h3>
//               <p style={styles.sectionSubtitle}>
//                 Don't miss out on our exciting upcoming programs and gatherings
//               </p>
//               <div className="text-center">
//                 <Upcoming />
//               </div>
//             </div>
//           </section>

//           {/* Final CTA */}
//           <section style={{
//             background: 'linear-gradient(135deg, #059669, #10b981, #14b8a6)',
//             padding: '80px 20px',
//             position: 'relative',
//             overflow: 'hidden'
//           }}>
//             <div style={styles.heroPattern}></div>
//             <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
//               <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
//                 Ready to Join Us?
//               </h2>
//               <p style={{ fontSize: '20px', color: '#d1fae5', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
//                 Become part of a thriving community of Nigerian students at King Saud University
//               </p>
//               <Link to="/home" style={{ textDecoration: 'none' }}>
//                 <button 
//                   style={styles.ctaButton}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = 'scale(1.05)';
//                     e.target.style.backgroundColor = '#fcd34d';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = 'scale(1)';
//                     e.target.style.backgroundColor = '#fbbf24';
//                   }}
//                 >
//                   Get Started Today
//                   <span>→</span>
//                 </button>
//               </Link>
//             </div>
//           </section>
//         </>
//       )}

//       <style>{`
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.3; }
//         }
//         * {
//           box-sizing: border-box;
//         }
//         html, body {
//           margin: 0;
//           padding: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import RecentEvent from "./Moving";
// import Upcoming from "./UpcomingEvent";
// import { MapPin } from "lucide-react";
// import { Link } from "react-router-dom";

// const LandingPage = () => {
//   const [active, setActive] = useState([]);
//   const [excodata, setExcodata] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [loading1, setLoading1] = useState(true);
//   const [error1, setError1] = useState(null);

//   useEffect(() => {
//     axios("https://taiwoakinpennu2.pythonanywhere.com/pres/")
//       .then((res) => setActive(res.data))
//       .catch((error) => setError1(error))
//       .finally(() => setLoading1(false));
//   }, []);

//   useEffect(() => {
//     axios("https://taiwoakinpennu2.pythonanywhere.com/port/")
//       .then((response) => setExcodata(response.data))
//       .catch((error) => setError(error))
//       .finally(() => setLoading(false));
//   }, []);

//   const active2 = active?.length > 0 ? active[active?.length - 1] : null;

//   // Show loading if EITHER is still loading
//   const isLoading = loading || loading1;

//   const styles = {
//     heroSection: {
//       background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #14b8a6 100%)',
//       minHeight: '100vh',
//       position: 'relative',
//       overflow: 'hidden',
//       color: 'white',
//       paddingTop: '100px',
//       paddingBottom: '80px'
//     },
//     heroPattern: {
//       position: 'absolute',
//       inset: 0,
//       backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
//       zIndex: 1
//     },
//     badge: {
//       display: 'inline-block',
//       backgroundColor: 'rgba(255, 255, 255, 0.2)',
//       backdropFilter: 'blur(10px)',
//       padding: '8px 20px',
//       borderRadius: '50px',
//       fontSize: '14px',
//       fontWeight: '500',
//       marginBottom: '20px'
//     },
//     ctaButton: {
//       backgroundColor: '#fbbf24',
//       color: '#065f46',
//       padding: '16px 40px',
//       borderRadius: '50px',
//       fontWeight: '600',
//       fontSize: '18px',
//       border: 'none',
//       cursor: 'pointer',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
//       transition: 'all 0.3s ease',
//       display: 'inline-flex',
//       alignItems: 'center',
//       gap: '10px'
//     },
//     statsSection: {
//       background: 'linear-gradient(to right, #059669, #10b981)',
//       padding: '80px 20px',
//       color: 'white'
//     },
//     statCard: {
//       textAlign: 'center',
//       padding: '20px'
//     },
//     excoCard: {
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       overflow: 'hidden',
//       boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
//       transition: 'all 0.3s ease',
//       border: '1px solid #f0f0f0'
//     },
//     excoImage: {
//       height: '280px',
//       width: '100%',
//       objectFit: 'cover',
//       background: 'linear-gradient(135deg, #10b981, #059669)'
//     },
//     presidentCard: {
//       backgroundColor: 'white',
//       borderRadius: '20px',
//       padding: '50px',
//       boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
//       border: '1px solid #d1fae5',
//       margin: '60px auto',
//       maxWidth: '900px'
//     },
//     waveDivider: {
//       position: 'absolute',
//       bottom: 0,
//       left: 0,
//       right: 0,
//       zIndex: 2
//     },
//     eventsSection: {
//       padding: '80px 20px',
//       backgroundColor: '#ffffff'
//     },
//     sectionTitle: {
//       fontSize: 'clamp(2rem, 4vw, 3rem)',
//       fontWeight: 'bold',
//       color: '#1f2937',
//       marginBottom: '15px',
//       textAlign: 'center'
//     },
//     sectionSubtitle: {
//       fontSize: '18px',
//       color: '#6b7280',
//       maxWidth: '700px',
//       margin: '0 auto 50px',
//       textAlign: 'center'
//     }
//   };

//   return (
//     <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ffffff, #f0fdf4)' }}>
//       {/* Loading State - Shows while either API call is pending */}
//       {isLoading && (
//         <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #d1fae5, #a7f3d0)' }}>
//           <div style={{ textAlign: 'center' }}>
//             <div style={{
//               width: '64px',
//               height: '64px',
//               border: '4px solid #059669',
//               borderTopColor: 'transparent',
//               borderRadius: '50%',
//               animation: 'spin 1s linear infinite',
//               margin: '0 auto 20px'
//             }}></div>
//             <h1 style={{ fontSize: '28px', fontWeight: 'bold', color: '#047857' }}>Welcome to NSU-KSU</h1>
//           </div>
//         </div>
//       )}

//       {/* Only render content if NOT loading */}
//       {!isLoading && (
//         <>
//           {/* Hero Section */}
//           <section style={styles.heroSection}>
//             <div style={styles.heroPattern}></div>
            
//             <div className="container" style={{ position: 'relative', zIndex: 10 }}>
//               <div className="row align-items-center">
//                 <div className="col-lg-6 mb-5 mb-lg-0">
//                   <div style={styles.badge}>🎓 Student Community</div>
                  
//                   <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '20px' }}>
//                     <span style={{ color: 'white' }}>NIGERIAN</span><br />
//                     <span style={{ color: '#fbbf24' }}>STUDENTS</span>
//                   </h1>
                  
//                   <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '600', marginBottom: '20px' }}>
//                     King Saud <span style={{ color: '#fbbf24' }}>University</span>
//                   </h2>
                  
//                   <p style={{ fontSize: '18px', color: '#d1fae5', marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
//                     <MapPin className="w-5 h-5" />
//                     Riyadh, Saudi Arabia
//                   </p>
                  
//                   <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#ecfdf5', lineHeight: '1.8', marginBottom: '30px', maxWidth: '600px' }}>
//                     Join our vibrant community of Nigerian students pursuing academic excellence at King Saud University.
//                   </p>
                  
//                   <Link to="/home" style={{ textDecoration: 'none' }}>
//                     <button 
//                       style={styles.ctaButton}
//                       onMouseEnter={(e) => {
//                         e.target.style.transform = 'scale(1.05)';
//                         e.target.style.backgroundColor = '#fcd34d';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.target.style.transform = 'scale(1)';
//                         e.target.style.backgroundColor = '#fbbf24';
//                       }}
//                     >
//                       Join the Community
//                       <span>→</span>
//                     </button>
//                   </Link>
//                 </div>
                
//                 <div className="col-lg-6 d-none d-lg-block">
//                   <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
//                     <div style={{
//                       position: 'absolute',
//                       inset: 0,
//                       background: '#fbbf24',
//                       borderRadius: '50%',
//                       filter: 'blur(100px)',
//                       opacity: 0.2,
//                       animation: 'pulse 3s ease-in-out infinite'
//                     }}></div>
//                     <img 
//                       src="https://static.vecteezy.com/system/resources/previews/012/352/057/original/graduation-hat-illustration-in-the-flat-style-graduation-cap-isolated-on-the-transparent-background-vector.jpg"
//                       alt="Graduation Cap"
//                       style={{ position: 'relative', zIndex: 10, width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
            
//             <svg style={styles.waveDivider} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//               <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
//             </svg>
//           </section>

//           {/* President's Message */}
//           {active2 && (
//             <section className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
//               <div style={styles.presidentCard}>
//                 <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
//                   <div style={{
//                     width: '50px',
//                     height: '50px',
//                     backgroundColor: '#d1fae5',
//                     borderRadius: '50%',
//                     display: 'flex',
//                     alignItems: 'center',
//                     justifyContent: 'center',
//                     fontSize: '24px'
//                   }}>
//                     🏆
//                   </div>
//                   <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>President's Message</h3>
//                 </div>
                
//                 <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.8', marginBottom: '30px' }}>
//                   {active2.text}
//                 </p>
                
//                 <div style={{ borderTop: '2px solid #d1fae5', paddingTop: '25px' }}>
//                   <p style={{ color: '#059669', fontWeight: '600', fontSize: '20px', marginBottom: '5px' }}>{active2.name}</p>
//                   <p style={{ color: '#9ca3af', margin: 0 }}>NSU-KSU President</p>
//                 </div>
//               </div>
//             </section>
//           )}

//           {/* Stats Section */}
//           <section style={styles.statsSection}>
//             <div className="container">
//               <div className="row">
//                 {[
//                   { label: "Active Members", value: "500+", icon: "👥" },
//                   { label: "Events Yearly", value: "50+", icon: "📅" },
//                   { label: "Departments", value: "20+", icon: "🏆" },
//                   { label: "Years Active", value: "10+", icon: "⭐" }
//                 ].map((stat, idx) => (
//                   <div key={idx} className="col-6 col-md-3 mb-4 mb-md-0">
//                     <div style={styles.statCard}>
//                       <div style={{ fontSize: '40px', marginBottom: '15px' }}>{stat.icon}</div>
//                       <p style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>{stat.value}</p>
//                       <p style={{ color: '#d1fae5', fontSize: '16px', margin: 0 }}>{stat.label}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </section>

//           {/* Excos Section */}
//           <section id="excopage" className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
//             <div className="text-center" style={{ marginBottom: '60px' }}>
//               <h3 style={styles.sectionTitle}>
//                 Meet Our Executive Team
//               </h3>
//               <p style={styles.sectionSubtitle}>
//                 Dedicated leaders committed to serving our community
//               </p>
//             </div>
            
//             {excodata.length > 0 ? (
//               <div className="row g-4">
//                 {excodata.map((el) => (
//                   <div key={el.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
//                     <div 
//                       style={styles.excoCard}
//                       onMouseEnter={(e) => {
//                         e.currentTarget.style.transform = 'translateY(-10px)';
//                         e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
//                       }}
//                       onMouseLeave={(e) => {
//                         e.currentTarget.style.transform = 'translateY(0)';
//                         e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
//                       }}
//                     >
//                       <div style={{ position: 'relative', overflow: 'hidden' }}>
//                         <img
//                           src={el?.photo}
//                           alt={el.name}
//                           style={styles.excoImage}
//                         />
//                         <div style={{
//                           position: 'absolute',
//                           inset: 0,
//                           background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
//                         }}></div>
//                       </div>
                      
//                       <div style={{ padding: '25px' }}>
//                         <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
//                           {el.name}
//                         </h4>
                        
//                         <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
//                           <p style={{ marginBottom: '8px' }}>
//                             <span style={{ fontWeight: '600', color: '#374151' }}>Position: </span>
//                             <span style={{ color: '#6b7280' }}>{el.exco}</span>
//                           </p>
//                           <p style={{ marginBottom: '8px' }}>
//                             <span style={{ fontWeight: '600', color: '#374151' }}>Department: </span>
//                             <span style={{ color: '#6b7280' }}>{el.department}</span>
//                           </p>
//                           <p style={{ marginBottom: '8px' }}>
//                             <span style={{ fontWeight: '600', color: '#374151' }}>Degree: </span>
//                             <span style={{ color: '#6b7280' }}>{el.degree}</span>
//                           </p>
//                           <p style={{ marginBottom: 0 }}>
//                             <span style={{ fontWeight: '600', color: '#374151' }}>Mobile: </span>
//                             <span style={{ color: '#6b7280' }}>{el.mobile}</span>
//                           </p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             ) : (
//               <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280' }}>
//                 <p>Loading executive team...</p>
//               </div>
//             )}
//           </section>

//           {/* Recent Events Section */}
//           <section id="recentpage" style={styles.eventsSection}>
//             <div className="container">
//               <h3 style={styles.sectionTitle}>Recent Events</h3>
//               <p style={styles.sectionSubtitle}>
//                 Check out our latest activities and memorable moments
//               </p>
//               <div className="text-center">
//                 <RecentEvent />
//               </div>
//             </div>
//           </section>

//           {/* Upcoming Events Section */}
//           <section style={{ ...styles.eventsSection, backgroundColor: '#f9fafb' }} id="upcomingpage">
//             <div className="container">
//               <h3 style={styles.sectionTitle}>Upcoming Events</h3>
//               <p style={styles.sectionSubtitle}>
//                 Don't miss out on our exciting upcoming programs and gatherings
//               </p>
//               <div className="text-center">
//                 <Upcoming />
//               </div>
//             </div>
//           </section>

//           {/* Final CTA */}
//           <section style={{
//             background: 'linear-gradient(135deg, #059669, #10b981, #14b8a6)',
//             padding: '80px 20px',
//             position: 'relative',
//             overflow: 'hidden'
//           }}>
//             <div style={styles.heroPattern}></div>
//             <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
//               <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
//                 Ready to Join Us?
//               </h2>
//               <p style={{ fontSize: '20px', color: '#d1fae5', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
//                 Become part of a thriving community of Nigerian students at King Saud University
//               </p>
//               <Link to="/home" style={{ textDecoration: 'none' }}>
//                 <button 
//                   style={styles.ctaButton}
//                   onMouseEnter={(e) => {
//                     e.target.style.transform = 'scale(1.05)';
//                     e.target.style.backgroundColor = '#fcd34d';
//                   }}
//                   onMouseLeave={(e) => {
//                     e.target.style.transform = 'scale(1)';
//                     e.target.style.backgroundColor = '#fbbf24';
//                   }}
//                 >
//                   Get Started Today
//                   <span>→</span>
//                 </button>
//               </Link>
//             </div>
//           </section>
//         </>
//       )}

//       <style>{`
//         @keyframes spin {
//           to { transform: rotate(360deg); }
//         }
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.3; }
//         }
//         * {
//           box-sizing: border-box;
//         }
//         html, body {
//           margin: 0;
//           padding: 0;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default LandingPage;


import React, { useEffect, useState } from "react";
import axios from "axios";
import RecentEvent from "./Moving";
import Upcoming from "./UpcomingEvent";
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [active, setActive] = useState([]);
  const [excodata, setExcodata] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [loading1, setLoading1] = useState(false);
  const [error1, setError1] = useState(null);

  useEffect(() => {
    setLoading1(true);
    axios("https://taiwoakinpennu2.pythonanywhere.com/pres/")
      .then((res) => setActive(res.data))
      .catch((error) => setError1(error))
      .finally(() => setLoading1(false));
  }, []);

  useEffect(() => {
    setLoading(true);
    axios("https://taiwoakinpennu2.pythonanywhere.com/port/")
      .then((response) => setExcodata(response.data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  const active2 = active?.length > 0 ? active[active?.length - 1] : null;

  const styles = {
    heroSection: {
      background: 'linear-gradient(135deg, #059669 0%, #10b981 50%, #14b8a6 100%)',
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
      color: 'white',
      paddingTop: '100px',
      paddingBottom: '80px'
    },
    heroPattern: {
      position: 'absolute',
      inset: 0,
      backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
      zIndex: 1
    },
    badge: {
      display: 'inline-block',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      padding: '8px 20px',
      borderRadius: '50px',
      fontSize: '14px',
      fontWeight: '500',
      marginBottom: '20px'
    },
    ctaButton: {
      backgroundColor: '#fbbf24',
      color: '#065f46',
      padding: '16px 40px',
      borderRadius: '50px',
      fontWeight: '600',
      fontSize: '18px',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
      transition: 'all 0.3s ease',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px'
    },
    statsSection: {
      background: 'linear-gradient(to right, #059669, #10b981)',
      padding: '80px 20px',
      color: 'white'
    },
    statCard: {
      textAlign: 'center',
      padding: '20px'
    },
    excoCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      overflow: 'hidden',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
      transition: 'all 0.3s ease',
      border: '1px solid #f0f0f0'
    },
    excoImage: {
      height: '280px',
      width: '100%',
      objectFit: 'cover',
      background: 'linear-gradient(135deg, #10b981, #059669)'
    },
    presidentCard: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '50px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      border: '1px solid #d1fae5',
      margin: '60px auto',
      maxWidth: '900px',
      minHeight: '200px'
    },
    presidentCardSkeleton: {
      backgroundColor: 'white',
      borderRadius: '20px',
      padding: '50px',
      boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
      border: '1px solid #d1fae5',
      margin: '60px auto',
      maxWidth: '900px',
      minHeight: '200px',
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'loading 1.5s infinite'
    },
    waveDivider: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 2
    },
    eventsSection: {
      padding: '80px 20px',
      backgroundColor: '#ffffff'
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 'bold',
      color: '#1f2937',
      marginBottom: '15px',
      textAlign: 'center'
    },
    sectionSubtitle: {
      fontSize: '18px',
      color: '#6b7280',
      maxWidth: '700px',
      margin: '0 auto 50px',
      textAlign: 'center'
    }
  };

  // Skeleton loader for exco card
  const SkeletonCard = () => (
    <div style={{
      ...styles.excoCard,
      background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
      backgroundSize: '200% 100%',
      animation: 'loading 1.5s infinite'
    }}>
      <div style={{ height: '280px', backgroundColor: '#e0e0e0' }}></div>
      <div style={{ padding: '25px' }}>
        <div style={{ height: '20px', backgroundColor: '#e0e0e0', marginBottom: '15px', borderRadius: '4px' }}></div>
        <div style={{ height: '16px', backgroundColor: '#e0e0e0', marginBottom: '10px', borderRadius: '4px' }}></div>
        <div style={{ height: '16px', backgroundColor: '#e0e0e0', marginBottom: '10px', borderRadius: '4px' }}></div>
      </div>
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to bottom, #ffffff, #f0fdf4)' }}>
      {/* Hero Section - Always visible */}
      <section style={styles.heroSection}>
        <div style={styles.heroPattern}></div>
        
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div style={styles.badge}>🎓 Student Community</div>
              
              <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '20px' }}>
                <span style={{ color: 'white' }}>NIGERIAN</span><br />
                <span style={{ color: '#fbbf24' }}>STUDENTS</span>
              </h1>
              
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.5rem)', fontWeight: '600', marginBottom: '20px' }}>
                King Saud <span style={{ color: '#fbbf24' }}>University</span>
              </h2>
              
              <p style={{ fontSize: '18px', color: '#d1fae5', marginBottom: '15px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                <MapPin className="w-5 h-5" />
                Riyadh, Saudi Arabia
              </p>
              
              <p style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)', color: '#ecfdf5', lineHeight: '1.8', marginBottom: '30px', maxWidth: '600px' }}>
                Join our vibrant community of Nigerian students pursuing academic excellence at King Saud University.
              </p>
              
              <Link to="/home" style={{ textDecoration: 'none' }}>
                <button 
                  style={styles.ctaButton}
                  onMouseEnter={(e) => {
                    e.target.style.transform = 'scale(1.05)';
                    e.target.style.backgroundColor = '#fcd34d';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.transform = 'scale(1)';
                    e.target.style.backgroundColor = '#fbbf24';
                  }}
                >
                  Join the Community
                  <span>→</span>
                </button>
              </Link>
            </div>
            
            <div className="col-lg-6 d-none d-lg-block">
              <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto' }}>
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: '#fbbf24',
                  borderRadius: '50%',
                  filter: 'blur(100px)',
                  opacity: 0.2,
                  animation: 'pulse 3s ease-in-out infinite'
                }}></div>
                <img 
                  src="https://static.vecteezy.com/system/resources/previews/012/352/057/original/graduation-hat-illustration-in-the-flat-style-graduation-cap-isolated-on-the-transparent-background-vector.jpg"
                  alt="Graduation Cap"
                  style={{ position: 'relative', zIndex: 10, width: '100%', height: 'auto', filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))' }}
                />
              </div>
            </div>
          </div>
        </div>
        
        <svg style={styles.waveDivider} viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </section>

      {/* President's Message - Show skeleton while loading */}
      <section className="container" style={{ marginTop: '40px', marginBottom: '60px' }}>
        {loading1 ? (
          <div style={styles.presidentCardSkeleton}></div>
        ) : active2 ? (
          <div style={styles.presidentCard}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                backgroundColor: '#d1fae5',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '24px'
              }}>
                🏆
              </div>
              <h3 style={{ fontSize: '28px', fontWeight: 'bold', color: '#1f2937', margin: 0 }}>President's Message</h3>
            </div>
            
            <p style={{ fontSize: '18px', color: '#6b7280', lineHeight: '1.8', marginBottom: '30px' }}>
              {active2.text}
            </p>
            
            <div style={{ borderTop: '2px solid #d1fae5', paddingTop: '25px' }}>
              <p style={{ color: '#059669', fontWeight: '600', fontSize: '20px', marginBottom: '5px' }}>{active2.name}</p>
              <p style={{ color: '#9ca3af', margin: 0 }}>NSU-KSU President</p>
            </div>
          </div>
        ) : null}
      </section>

      {/* Stats Section */}
      <section style={styles.statsSection}>
        <div className="container">
          <div className="row">
            {[
              { label: "Active Members", value: "500+", icon: "👥" },
              { label: "Events Yearly", value: "30+", icon: "📅" },
              { label: "Departments", value: "20+", icon: "🏆" },
              { label: "Years Active", value: "10+", icon: "⭐" }
            ].map((stat, idx) => (
              <div key={idx} className="col-6 col-md-3 mb-4 mb-md-0">
                <div style={styles.statCard}>
                  <div style={{ fontSize: '40px', marginBottom: '15px' }}>{stat.icon}</div>
                  <p style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '10px', color: 'white' }}>{stat.value}</p>
                  <p style={{ color: '#d1fae5', fontSize: '16px', margin: 0 }}>{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Excos Section - Show skeletons while loading */}
      <section id="excopage" className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
        <div className="text-center" style={{ marginBottom: '60px' }}>
          <h3 style={styles.sectionTitle}>
            Meet Our Executive Team
          </h3>
          <p style={styles.sectionSubtitle}>
            Dedicated leaders committed to serving our community
          </p>
        </div>
        
        <div className="row g-4">
          {loading ? (
            // Show skeleton loaders while fetching
            Array(8).fill(0).map((_, idx) => (
              <div key={idx} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <SkeletonCard />
              </div>
            ))
          ) : excodata.length > 0 ? (
            excodata.map((el) => (
              <div key={el.id} className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div 
                  style={styles.excoCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-10px)';
                    e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{ position: 'relative', overflow: 'hidden' }}>
                    <img
                      src={el?.photo}
                      alt={el.name}
                      style={styles.excoImage}
                      loading="lazy"
                    />
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)'
                    }}></div>
                  </div>
                  
                  <div style={{ padding: '25px' }}>
                    <h4 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1f2937', marginBottom: '15px' }}>
                      {el.name}
                    </h4>
                    
                    <div style={{ fontSize: '14px', lineHeight: '1.8' }}>
                      <p style={{ marginBottom: '8px' }}>
                        <span style={{ fontWeight: '600', color: '#374151' }}>Position: </span>
                        <span style={{ color: '#6b7280' }}>{el.exco}</span>
                      </p>
                      {/* <p style={{ marginBottom: '8px' }}>
                        <span style={{ fontWeight: '600', color: '#374151' }}>Department: </span>
                        <span style={{ color: '#6b7280' }}>{el.department}</span>
                      </p> */}
                      {/* <p style={{ marginBottom: '8px' }}>
                        <span style={{ fontWeight: '600', color: '#374151' }}>Degree: </span>
                        <span style={{ color: '#6b7280' }}>{el.degree}</span>
                      </p> */}
                      <p style={{ marginBottom: 0 }}>
                        <span style={{ fontWeight: '600', color: '#374151' }}>Email: </span>
                        <span style={{ color: '#6b7280' }}>{el.mobile}</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: 'center', padding: '40px', color: '#6b7280', width: '100%' }}>
              <p>No executive team members available</p>
            </div>
          )}
        </div>
      </section>

      {/* Recent Events Section */}
      <section id="recentpage" style={styles.eventsSection}>
        <div className="container">
          <h3 style={styles.sectionTitle}>Recent Events</h3>
          <p style={styles.sectionSubtitle}>
            Check out our latest activities and memorable moments
          </p>
          <div className="text-center">
            <RecentEvent />
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section style={{ ...styles.eventsSection, backgroundColor: '#f9fafb' }} id="upcomingpage">
        <div className="container">
          <h3 style={styles.sectionTitle}>Upcoming Events</h3>
          <p style={styles.sectionSubtitle}>
            Don't miss out on our exciting upcoming programs and gatherings
          </p>
          <div className="text-center">
            <Upcoming />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{
        background: 'linear-gradient(135deg, #059669, #10b981, #14b8a6)',
        padding: '80px 20px',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={styles.heroPattern}></div>
        <div className="container text-center" style={{ position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
            Ready to Join Us?
          </h2>
          <p style={{ fontSize: '20px', color: '#d1fae5', marginBottom: '40px', maxWidth: '700px', margin: '0 auto 40px' }}>
            Become part of a thriving community of Nigerian students at King Saud University
          </p>
          <Link to="/home" style={{ textDecoration: 'none' }}>
            <button 
              style={styles.ctaButton}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.backgroundColor = '#fcd34d';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.backgroundColor = '#fbbf24';
              }}
            >
              Get Started Today
              <span>→</span>
            </button>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.3; }
        }
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
        * {
          box-sizing: border-box;
        }
        html, body {
          margin: 0;
          padding: 0;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
