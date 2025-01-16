// // // 
// // import React, { useEffect, useState } from "react";
// // import axios from "axios";
// // import Aos from "aos";
// // import "aos/dist/aos.css";
// // import RecentEvent from "./Moving";
// // import Upcoming from "./UpcomingEvent";
// // import toast from "react-hot-toast";

// // const LandingPage = () => {
// //   useEffect(() => {
// //     Aos.init();
// //   }, []);

// //   const [active, setActive] = useState([]);
// //   const [excodata, setExcodata] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   // Fetching president's speech data
// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://taiwoakinpennu2.pythonanywhere.com/pres/"
// //         );
// //         setActive(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching data:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchData();
// //   }, []);

// //   // Fetching exco data
// //   useEffect(() => {
// //     const fetchExcoData = async () => {
// //       try {
// //         const response = await axios.get(
// //           "https://taiwoakinpennu2.pythonanywhere.com/port/"
// //         );
// //         setExcodata(response.data);
// //         setLoading(false);
// //       } catch (error) {
// //         console.error("Error fetching exco data:", error);
// //         setLoading(false);
// //       }
// //     };

// //     fetchExcoData();
// //   }, []);

// //   // Handle Delete request (removed delete button)
// //   const handleDelete = async (id) => {
// //     // Optimistically remove the item from the UI
// //     const updatedData = excodata.filter((el) => el.id !== id);
// //     setExcodata(updatedData);

// //     try {
// //       await axios.delete(`https://taiwoakinpennu2.pythonanywhere.com/port/${id}/`);
// //       toast.success("Exco deleted successfully!");
// //     } catch (error) {
// //       console.error("Error deleting exco:", error);
// //       alert("Failed to delete exco.");

// //       // Revert state if the deletion fails
// //       setExcodata(excodata);
// //     }
// //   };

// //   // Debugging: log the loading state and exco data
// //   // if (loading) {
// //   //   return <div>Loading...</div>;
// //   // }

// //   // if (excodata.length === 0) {
// //   //   return <div>Please wait....</div>;
// //   // }

// //   const active2 = active?.length > 0 ? active[active?.length - 1] : null;

// //   return (
// //     <div className="min-vh-100 bg-light">
// //       {loading ? "Loading..." : <div className="container mt-5">
// //         {/* President's Speech Section inside a Card */}
// //         <section className="mb-5">
// //           <div
// //             className="card shadow-sm"
// //             style={{
// //               padding: "20px",
// //               backgroundColor: "#fff",
// //               borderRadius: "10px",
// //             }}
// //           >
// //             <div className="card-body">
// //               <p
// //                 className="card-text"
// //                 style={{
// //                   fontSize: "18px",
// //                   textAlign: "justify",
// //                   marginBottom: "20px",
// //                 }}
// //               >
// //                 {active2?.text}
// //               </p>
// //               <p
// //                 className="text-success fs-5"
// //                 style={{ fontWeight: "500", marginBottom: "0" }}
// //               >
// //                 {active2?.name}
// //               </p>
// //               <p className="fs-3" style={{ marginTop: "-0.2rem", fontWeight: "500" }}>
// //                 NSU-KSU President
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Excos Section */}
// //         <section id="excopage" className="mb-5">
// //         <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "20px" }}>
// //             Meet Our Excos
// //           </h3>
// //           <div className="d-flex flex-wrap justify-content-center gap-4">
// //             {excodata.map((el) => (
// //               <div
// //                 key={el.id}
// //                 style={{
// //                   width: "300px",
// //                   border: "1px solid #ccc",
// //                   borderRadius: "10px",
// //                   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
// //                   padding: "20px",
// //                   backgroundColor: "#fff",
// //                   textAlign: "center",
// //                   marginBottom: "20px", // Consistent margin bottom
// //                 }}
// //               >
// //                 {el.photo && (
// //                   <img
// //                     src={el.photo}
// //                     alt={`${el.name}'s photo`}
// //                     style={{
// //                       width: "100%",
// //                       height: "200px",
// //                       objectFit: "cover",
// //                       borderRadius: "10px 10px 0 0",
// //                       marginBottom: "15px",
// //                     }}
// //                   />
// //                 )}
// //                 <h3 style={{ fontSize: "1.2em", color: "#333", marginBottom: "10px" }}>
// //                   {el.name}
// //                 </h3>
// //                 <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
// //                   <strong>Post:</strong> {el.exco}
// //                 </p>
// //                 <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
// //                   <strong>Department:</strong> {el.department}
// //                 </p>
// //                 <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
// //                   <strong>Degree:</strong> {el.degree}
// //                 </p>
// //                 <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
// //                   <strong>Mobile:</strong> {el.mobile}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>
// //         </section>

// //         {/* Recent Events Section */}
// //         <section className="mb-5">
// //           <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "20px" }}>
// //             Recent Events
// //           </h3>
// //           <div className="text-center">
// //             <RecentEvent />
// //           </div>
// //         </section>

// //         {/* Upcoming Events Section */}
// //         <section className="mb-5">
// //           <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "20px" }}>
// //             Upcoming Events
// //           </h3>
// //           <div className="text-center">
// //             <Upcoming />
// //           </div>
// //         </section>
// //       </div>}
// //     </div>
// //   );
// // };

// // export default LandingPage;


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

//   // Fetching president's speech data
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "https://taiwoakinpennu2.pythonanywhere.com/pres/"
//         );
//         setActive(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   // Fetching exco data
//   useEffect(() => {
//     const fetchExcoData = async () => {
//       try {
//         const response = await axios.get(
//           "https://taiwoakinpennu2.pythonanywhere.com/port/"
//         );
//         setExcodata(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error fetching exco data:", error);
//         setLoading(false);
//       }
//     };

//     fetchExcoData();
//   }, []);

//   // Handle Delete request (removed delete button)
//   const handleDelete = async (id) => {
//     const updatedData = excodata.filter((el) => el.id !== id);
//     setExcodata(updatedData);

//     try {
//       await axios.delete(`https://taiwoakinpennu2.pythonanywhere.com/port/${id}/`);
//       toast.success("Exco deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting exco:", error);
//       alert("Failed to delete exco.");
//       setExcodata(excodata);
//     }
//   };

//   const active2 = active?.length > 0 ? active[active?.length - 1] : null;

//   return (
//     <div className="min-vh-100 bg-light">
//       {loading ? (
//         "Loading..."
//       ) : (
//         <div className="container mt-5">
//           {/* President's Speech Section inside a Card */}
//           <section className="mb-5">
//             <div
//               className="card shadow-sm"
//               style={{
//                 padding: "20px",
//                 backgroundColor: "#fff",
//                 borderRadius: "10px",
//               }}
//             >
//               <div className="card-body">
//                 <p
//                   className="card-text"
//                   style={{
//                     fontSize: "18px",
//                     textAlign: "justify",
//                     marginBottom: "20px",
//                   }}
//                 >
//                   {active2?.text}
//                 </p>
//                 <p
//                   className="text-success fs-5"
//                   style={{ fontWeight: "500", marginBottom: "0" }}
//                 >
//                   {active2?.name}
//                 </p>
//                 <p className="fs-3" style={{ marginTop: "-0.2rem", fontWeight: "500" }}>
//                   NSU-KSU President
//                 </p>
//               </div>
//             </div>
//           </section>

//           {/* Explore More Button - Placed after President's Speech */}
//           {/* <div className="text-center mt-5">
//             <Link to="/login">
//               <button className="btn btn-primary btn-lg">Join the Community</button>
//             </Link>
//           </div> */}

//           {/* Excos Section */}
//           <section id="excopage" className="mb-5">
//             <h3
//               className="text-center"
//               style={{ fontSize: "2rem", marginBottom: "20px" }}
//             >
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
//                   {el.photo && (
//                     <img
//                       src={el.photo}
//                       alt={`${el.name}'s photo`}
//                       style={{
//                         width: "100%",
//                         height: "200px",
//                         objectFit: "cover",
//                         borderRadius: "10px 10px 0 0",
//                         marginBottom: "15px",
//                       }}
//                     />
//                   )}
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
//           <section className="mb-5">
//             <h3
//               className="text-center"
//               style={{ fontSize: "2rem", marginBottom: "20px" }}
//             >
//               Recent Events
//             </h3>
//             <div className="text-center">
//               <RecentEvent />
//             </div>
//           </section>

//           {/* Upcoming Events Section */}
//           <section className="mb-5">
//             <h3
//               className="text-center"
//               style={{ fontSize: "2rem", marginBottom: "20px" }}
//             >
//               Upcoming Events
//             </h3>
//             <div className="text-center">
//               <Upcoming />
//             </div>
//           </section>
//           <div className="text-center mt-5">
//             <Link to="/home">
//               <button className="btn btn-primary btn-lg">Join the Community</button>
//             </Link>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LandingPage;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import RecentEvent from "./Moving";
import Upcoming from "./UpcomingEvent";
import toast from "react-hot-toast";
import { Link } from "react-router-dom"; // Import Link for navigation
import { LazyLoadImage } from "react-lazy-load-image-component";

const LandingPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const [active, setActive] = useState([]);
  const [excodata, setExcodata] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetching president's speech data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://taiwoakinpennu2.pythonanywhere.com/pres/"
        );
        setActive(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Fetching exco data
  useEffect(() => {
    const fetchExcoData = async () => {
      try {
        const response = await axios.get(
          "https://taiwoakinpennu2.pythonanywhere.com/port/"
        );
        setExcodata(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching exco data:", error);
        setLoading(false);
      }
    };

    fetchExcoData();
  }, []);

  const active2 = active?.length > 0 ? active[active?.length - 1] : null;

  return (
    <div className="min-vh-100 " >
      {loading ? (
        "Loading..."
      ) : (
        <div className="" style={{marginTop:"10rem"}}>
          {/* President's Speech Section inside a Card */}
          {/* <section className="mb-5">
            <div
              className="d-flex flex-row"
              
              style={{
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "10px",

                
              }}
            >
              <div >
                <div style={{marginBottom:"2rem"}}>
                  <h1><span className="text-success">NIGERIAN </span>STUDENTS</h1>
                  <h2 className="">KING SAUD <span className="text-success">UNIVERSITY</span> </h2>
                  <h3>Riyadh , Saudi Arabia</h3>
                </div>
                <p
                  className=""
                  style={{
                    fontSize: "18px",
                    textAlign: "justify",
                    marginBottom: "20px",
                  }}
                >
                  {active2?.text}
                </p>
                <p
                  className="text-success fs-5"
                  style={{ fontWeight: "500", marginBottom: "0" }}
                >
                  {active2?.name}
                </p>
                <p className="fs-3" style={{ marginTop: "-0.2rem", fontWeight: "500" }}>
                  NSU-KSU President
                </p>
              </div>
              <div>
                <img src="public\nsulogo.jpg" alt='pic' style={{width:'25rem'}}/>
              </div>
            </div>
          </section> */}

<section className=" " style={{marginTop:'-4rem', marginBottom:"-1rem"}} data-aos="zoom-in">
      <div
        className="d-flex flex-column flex-md-row justify-content-between p-4 bg-white rounded-3"
        style={{
          backgroundColor: "#fff",
          borderRadius: "10px",
        }}
      >
        <div className="flex-column mb-4 mb-md-0 w-100">
          <div className="mb-4">
            <h1>
              <span className="text-success">NIGERIAN </span>STUDENTS
            </h1>
            <h2>
              KING SAUD <span className="text-success">UNIVERSITY</span>
            </h2>
            <h3 className="fw-normal">Riyadh, Saudi Arabia</h3>
          </div>

          <p
            
            style={{
              fontSize: "18px",
              marginBottom: "20px",
               opacity: 0.9 
              
            }}
          >
            {active2?.text}
           
          </p>

          <p className="text-success fs-5" style={{ fontWeight: "500", marginBottom: "0" }}>
            {active2?.name}
          </p>
          <p className="fs-3" style={{ marginTop: "-0.2rem", fontWeight: "500" }}>
            NSU-KSU President
          </p>
        </div>

        <div className="d-flex justify-content-center align-items-center container " style={{marginTop:"-205px"}}>
        <img src="https://static.vecteezy.com/system/resources/previews/012/352/057/original/graduation-hat-illustration-in-the-flat-style-graduation-cap-isolated-on-the-transparent-background-vector.jpg" alt="NSU Logo"  style={{maxWidth: "600px", width: "100%",transition: "transform 0.3s ease-in-out",objectFit: "contain", height:"700px"}}/>
        </div>
      </div>
    </section>

          {/* Excos Section */}
          <section id="excopage" style={{marginBottom:'10rem'}} data-aos="zoom-in">
            <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "50px" }}>
              Meet Our Excos
            </h3>
            <div className="d-flex flex-wrap justify-content-center gap-4">
              {excodata.map((el) => (
                <div
                  key={el.id}
                  style={{
                    width: "300px",
                    border: "1px solid #ccc",
                    borderRadius: "10px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    padding: "20px",
                    backgroundColor: "#fff",
                    textAlign: "center",
                    marginBottom: "20px",
                  }}
                >
                  {el.photo && (
                    <LazyLoadImage
                      src={el.photo}
                      alt={`${el.name}'s photo`}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px 10px 0 0",
                        marginBottom: "15px",
                      }}
                    />
                  )}
                  <h3 style={{ fontSize: "1.2em", color: "#333", marginBottom: "10px" }}>
                    {el.name}
                  </h3>
                  <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
                    <strong>Post:</strong> {el.exco}
                  </p>
                  <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
                    <strong>Department:</strong> {el.department}
                  </p>
                  <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
                    <strong>Degree:</strong> {el.degree}
                  </p>
                  <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
                    <strong>Mobile:</strong> {el.mobile}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Events Section */}
          <section style={{marginBottom:'10rem'}} data-aos="zoom-in">
            <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "40px" }}>
              Recent Events
            </h3>
            <div className="text-center">
              <RecentEvent />
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section  style={{marginBottom:'10rem'}} data-aos="zoom-in">
            <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "40px" }}>
              Upcoming Events
            </h3>
            <div className="text-center" style={{ fontSize: "2rem", marginBottom: "40px" }}>
              <Upcoming />
            </div>
          </section>

          {/* "Join the Community" Button */}
          <div className="text-center mt-5" style={{ marginBottom: "30px" }}>
            <Link to="/home">
              <button
                className="btn btn-success btn-lg"
                style={{
                  backgroundColor: "#8bc34a", // Light green background
                  borderColor: "#8bc34a",
                  padding: "15px 30px",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                  borderRadius: "30px",
                  transition: "all 0.3s ease-in-out",
                  marginBottom: "50px", // Ensure some space between button and footer
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow = "0px 10px 20px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                Join the Community
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;

