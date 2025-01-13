// import React, { useEffect, useState } from "react";



// import RecentEvent from "./Moving";
// import Upcoming from "./UpcomingEvent";
// import axios from "axios";
// import Aos from "aos"
// import 'aos/dist/aos.css'

// function LandingPage() {

//   useEffect(()=>{
//      Aos.init();
//   },[])

//   const [active, setActive] = useState([]);
//   const [excodata, setExcodata] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   // const [active2, setActive2] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get("https://taiwoakinpennu2.pythonanywhere.com/pres/");
//         setActive(response.data);
//         setIsLoading(false);
        
//       } catch (error) {
//         // Handle errors if needed
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

  

// const active2 = active?.length > 0 ? active[active?.length - 1] : null;

// console.log(active2)
// console.log(active)

//   useEffect(() => {
//     const fetchDataExco = async () => {
//       try {
//         const response = await axios.get("https://taiwoakinpennu2.pythonanywhere.com/port/");
//         setExcodata(response.data);
//         setIsLoading(false);
        
//       } catch (error) {
//         // Handle errors if needed
//         console.error("Error fetching data:", error);
//         setIsLoading(false);
//       }
//     };

//     fetchDataExco();
//   }, []);


  

  
  
  
//   return (
//     <div className="min-vh-100 bg-white">
//       <div
//         className="container mt-5  container-fluid "
//         style={{ width: "100%" }}
//       >
//         <h3 className="" style={{ fontSize: "2rem" }}>
//           President Speech
//         </h3>
//         <div className="card ">
//           {/* <h5 className="card-header">Featured</h5> */}
//           <div className="card-body ">
//             {/* <h5 className="card-title">Special title treatment</h5> */}
//             <p
//               className="card-text  "
//               style={{ fontSize: "18px", textAlign: "justify" }}
//             >
//              {active2?.text}
//             </p>
//             <p className="text-success fs-5  " >
//               {active2?.name}
//             </p>
//             <p className="fs-5 " style={{marginTop:"-1rem", fontWeight:'500'}}>NSU-KSU President</p>
//           </div>
//         </div>

//         <div id="excopage">
//           <h3
//             className="text-center "
//             style={{ marginTop: "5rem", fontSize: "2rem" }}
//           >
//             Meet Our Excos
//           </h3>
//         </div>

      
//         <section className="container-fluid text-nowrap " >
//           <div
//             className="d-flex justify-content-center container-fluid flex-wrap "
//             style={{ width: "70%" }}
//           >
//            {excodata.map((el)=><div className="text-center m-4 p-2 card  shadow-lg border-0" key={el.id}  style={{width:"18rem"}} data-aos='zoom-in'>
//               <img
//                 src={el.photo}
//                 className="mx-auto"
//                 alt="..."
//                 style={{ width: "8rem", height:'10rem'}}
//               />
//               <div className=" fs-6">
//                 <h5
//                   className="mt-2 text-success text-uppercase"
//                   style={{ marginBottom: "0.1rem" }}
//                 >
//                   {el.exco}
//                 </h5>
//                 <p className=" " style={{ marginBottom: "0.1rem" }}>
//                   {el.name}
//                 </p>
//                 {/* <p className="" style={{marginBottom:'0.1rem'}}>College : language sciences</p> */}
//                 <p className="" style={{ marginBottom: "0.1rem" }}>
//                   Department : {el.department}
//                 </p>
//                 <p className="" style={{ marginBottom: "0.1rem" }}>
//                   Program : {el.degree}
//                 </p>
//                 <p className="">Mobile: {el.mobile}</p>
//                 {/* <a href="#" className="btn btn-primary">Go somewhere</a> */}
//               </div>
//             </div>)}
            

            
           
            
//           </div>
//         </section>
        



//             <section >
//             <div id="recentpage">
//                 <h3
//                   className="text-center "
                  
//                   style={{ marginTop: "5rem", fontSize: "2rem" }}
//                 >
//                   Recent Events
//                 </h3>
//               </div>
//               <div className="text-center"  style={{marginTop:"3.5rem"}} data-aos='zoom-in'>
//                 <div > <RecentEvent/></div>
//               </div>
//             </section>

//             <section>
//             <div id="upcomingpage">
//                 <h3
//                   className="text-center "
//                   style={{ marginTop: "4rem", fontSize: "2rem" }}
//                 >
//                   Upcoming Event
//                 </h3>
//               </div>
//               <div className="text-center "  >
//                 <div ><Upcoming/></div>
//               </div>
//             </section>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;


import React, { useEffect, useState } from "react";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import RecentEvent from "./Moving";
import Upcoming from "./UpcomingEvent";

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
    // Optimistically remove the item from the UI
    const updatedData = excodata.filter((el) => el.id !== id);
    setExcodata(updatedData);

    try {
      await axios.delete(`https://taiwoakinpennu2.pythonanywhere.com/port/${id}/`);
      alert("Exco deleted successfully!");
    } catch (error) {
      console.error("Error deleting exco:", error);
      alert("Failed to delete exco.");

      // Revert state if the deletion fails
      setExcodata(excodata);
    }
  };

  // Debugging: log the loading state and exco data
  if (loading) {
    return <div>Loading...</div>;
  }

  if (excodata.length === 0) {
    return <div>No Exco data available.</div>;
  }

  const active2 = active?.length > 0 ? active[active?.length - 1] : null;

  return (
    <div className="min-vh-100 bg-light">
      <div className="container mt-5">
        {/* President's Speech Section inside a Card (removed title) */}
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
              <p className="fs-5" style={{ marginTop: "-0.5rem", fontWeight: "500" }}>
                NSU-KSU President
              </p>
            </div>
          </div>
        </section>

        {/* Excos Section */}
        <section id="excopage" className="mb-5">
          <div
            className="d-flex flex-wrap justify-content-center gap-4"
            data-aos="zoom-in"
          >
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
        <section>
          <h3 className="text-center mb-4" style={{ fontSize: "2rem" }}>
            Recent Events
          </h3>
          <div className="text-center" data-aos="zoom-in">
            <RecentEvent />
          </div>
        </section>

        {/* Upcoming Events Section */}
        <section>
          <h3 className="text-center mb-4" style={{ fontSize: "2rem" }}>
            Upcoming Events
          </h3>
          <div className="text-center">
            <Upcoming />
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;

