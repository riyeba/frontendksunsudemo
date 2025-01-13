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
import RecentEvent from "./Moving";
import Upcoming from "./UpcomingEvent";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";

function LandingPage() {
  useEffect(() => {
    Aos.init();
  }, []);

  const [active, setActive] = useState([]);
  const [excodata, setExcodata] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://taiwoakinpennu2.pythonanywhere.com/pres/"
        );
        setActive(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const active2 = active?.length > 0 ? active[active?.length - 1] : null;

  useEffect(() => {
    const fetchDataExco = async () => {
      try {
        const response = await axios.get(
          "https://taiwoakinpennu2.pythonanywhere.com/port/"
        );
        setExcodata(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchDataExco();
  }, []);

  return (
    <div className="min-vh-100 bg-light">
      <div className="container mt-5">
        <h3 className="text-center mb-4" style={{ fontSize: "2rem" }}>
          President's Speech
        </h3>
        <div className="card shadow-sm">
          <div className="card-body">
            <p className="card-text" style={{ fontSize: "18px", textAlign: "justify" }}>
              {active2?.text}
            </p>
            <p className="text-success fs-5">{active2?.name}</p>
            <p className="fs-5" style={{ marginTop: "-1rem", fontWeight: "500" }}>
              NSU-KSU President
            </p>
          </div>
        </div>

        <div id="excopage">
          <h3 className="text-center" style={{ marginTop: "5rem", fontSize: "2rem" }}>
            Meet Our Excos
          </h3>
        </div>

        <section className="container-fluid">
          <div className="d-flex justify-content-center flex-wrap" style={{ width: "70%" }}>
            {excodata.map((el) => (
              <div
                className="text-center m-4 p-3 card shadow-lg border-0"
                key={el.id}
                style={{ width: "18rem" }}
                data-aos="zoom-in"
              >
                <img
                  src={el.photo}
                  className="mx-auto"
                  alt={el.name}
                  style={{ width: "8rem", height: "10rem" }}
                />
                <div className="fs-6 mt-3">
                  <h5 className="text-success text-uppercase" style={{ marginBottom: "0.1rem" }}>
                    {el.exco}
                  </h5>
                  <p className="" style={{ marginBottom: "0.1rem" }}>
                    {el.name}
                  </p>
                  <p className="mb-0">Department: {el.department}</p>
                  <p className="mb-0">Program: {el.degree}</p>
                  <p className="mb-0">Mobile: {el.mobile}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div id="recentpage">
            <h3 className="text-center" style={{ marginTop: "5rem", fontSize: "2rem" }}>
              Recent Events
            </h3>
          </div>
          <div className="text-center" style={{ marginTop: "3.5rem" }} data-aos="zoom-in">
            <RecentEvent />
          </div>
        </section>

        <section>
          <div id="upcomingpage">
            <h3 className="text-center" style={{ marginTop: "4rem", fontSize: "2rem" }}>
              Upcoming Events
            </h3>
          </div>
          <div className="text-center">
            <Upcoming />
          </div>
        </section>
      </div>
    </div>
  );
}

export default LandingPage;

