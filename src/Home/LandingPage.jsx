// // 
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Aos from "aos";
// import "aos/dist/aos.css";
// import RecentEvent from "./Moving";
// import Upcoming from "./UpcomingEvent";
// import toast from "react-hot-toast";

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
//     // Optimistically remove the item from the UI
//     const updatedData = excodata.filter((el) => el.id !== id);
//     setExcodata(updatedData);

//     try {
//       await axios.delete(`https://taiwoakinpennu2.pythonanywhere.com/port/${id}/`);
//       toast.success("Exco deleted successfully!");
//     } catch (error) {
//       console.error("Error deleting exco:", error);
//       alert("Failed to delete exco.");

//       // Revert state if the deletion fails
//       setExcodata(excodata);
//     }
//   };

//   // Debugging: log the loading state and exco data
//   // if (loading) {
//   //   return <div>Loading...</div>;
//   // }

//   // if (excodata.length === 0) {
//   //   return <div>Please wait....</div>;
//   // }

//   const active2 = active?.length > 0 ? active[active?.length - 1] : null;

//   return (
//     <div className="min-vh-100 bg-light">
//       {loading ? "Loading..." : <div className="container mt-5">
//         {/* President's Speech Section inside a Card */}
//         <section className="mb-5">
//           <div
//             className="card shadow-sm"
//             style={{
//               padding: "20px",
//               backgroundColor: "#fff",
//               borderRadius: "10px",
//             }}
//           >
//             <div className="card-body">
//               <p
//                 className="card-text"
//                 style={{
//                   fontSize: "18px",
//                   textAlign: "justify",
//                   marginBottom: "20px",
//                 }}
//               >
//                 {active2?.text}
//               </p>
//               <p
//                 className="text-success fs-5"
//                 style={{ fontWeight: "500", marginBottom: "0" }}
//               >
//                 {active2?.name}
//               </p>
//               <p className="fs-3" style={{ marginTop: "-0.2rem", fontWeight: "500" }}>
//                 NSU-KSU President
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Excos Section */}
//         <section id="excopage" className="mb-5">
//         <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "20px" }}>
//             Meet Our Excos
//           </h3>
//           <div className="d-flex flex-wrap justify-content-center gap-4">
//             {excodata.map((el) => (
//               <div
//                 key={el.id}
//                 style={{
//                   width: "300px",
//                   border: "1px solid #ccc",
//                   borderRadius: "10px",
//                   boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                   padding: "20px",
//                   backgroundColor: "#fff",
//                   textAlign: "center",
//                   marginBottom: "20px", // Consistent margin bottom
//                 }}
//               >
//                 {el.photo && (
//                   <img
//                     src={el.photo}
//                     alt={`${el.name}'s photo`}
//                     style={{
//                       width: "100%",
//                       height: "200px",
//                       objectFit: "cover",
//                       borderRadius: "10px 10px 0 0",
//                       marginBottom: "15px",
//                     }}
//                   />
//                 )}
//                 <h3 style={{ fontSize: "1.2em", color: "#333", marginBottom: "10px" }}>
//                   {el.name}
//                 </h3>
//                 <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
//                   <strong>Post:</strong> {el.exco}
//                 </p>
//                 <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
//                   <strong>Department:</strong> {el.department}
//                 </p>
//                 <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
//                   <strong>Degree:</strong> {el.degree}
//                 </p>
//                 <p style={{ fontSize: "0.9em", color: "#555", margin: "5px 0" }}>
//                   <strong>Mobile:</strong> {el.mobile}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Recent Events Section */}
//         <section className="mb-5">
//           <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "20px" }}>
//             Recent Events
//           </h3>
//           <div className="text-center">
//             <RecentEvent />
//           </div>
//         </section>

//         {/* Upcoming Events Section */}
//         <section className="mb-5">
//           <h3 className="text-center" style={{ fontSize: "2rem", marginBottom: "20px" }}>
//             Upcoming Events
//           </h3>
//           <div className="text-center">
//             <Upcoming />
//           </div>
//         </section>
//       </div>}
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

  // Handle Delete request (removed delete button)
  const handleDelete = async (id) => {
    const updatedData = excodata.filter((el) => el.id !== id);
    setExcodata(updatedData);

    try {
      await axios.delete(`https://taiwoakinpennu2.pythonanywhere.com/port/${id}/`);
      toast.success("Exco deleted successfully!");
    } catch (error) {
      console.error("Error deleting exco:", error);
      alert("Failed to delete exco.");
      setExcodata(excodata);
    }
  };

  const active2 = active?.length > 0 ? active[active?.length - 1] : null;

  return (
    <div className="min-vh-100 bg-light">
      {loading ? (
        "Loading..."
      ) : (
        <div className="container mt-5">
          {/* President's Speech Section inside a Card */}
          <section className="mb-5">
            <div
              className="card shadow-sm"
              style={{
                padding: "20px",
                backgroundColor: "#fff",
                borderRadius: "10px",
              }}
            >
              <div className="card-body">
                <p
                  className="card-text"
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
            </div>
          </section>

          {/* Explore More Button - Placed after President's Speech */}
          {/* <div className="text-center mt-5">
            <Link to="/login">
              <button className="btn btn-primary btn-lg">Join the Community</button>
            </Link>
          </div> */}

          {/* Excos Section */}
          <section id="excopage" className="mb-5">
            <h3
              className="text-center"
              style={{ fontSize: "2rem", marginBottom: "20px" }}
            >
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
                    <img
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
          <section className="mb-5">
            <h3
              className="text-center"
              style={{ fontSize: "2rem", marginBottom: "20px" }}
            >
              Recent Events
            </h3>
            <div className="text-center">
              <RecentEvent />
            </div>
          </section>

          {/* Upcoming Events Section */}
          <section className="mb-5">
            <h3
              className="text-center"
              style={{ fontSize: "2rem", marginBottom: "20px" }}
            >
              Upcoming Events
            </h3>
            <div className="text-center">
              <Upcoming />
            </div>
          </section>
          <div className="text-center mt-5">
            <Link to="/home">
              <button className="btn btn-primary btn-lg">Join the Community</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default LandingPage;



