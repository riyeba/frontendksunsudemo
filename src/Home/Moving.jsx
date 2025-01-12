

// import Carousel from 'react-bootstrap/Carousel';

// import { useEffect } from 'react';
// import axios from 'axios';
// import { useState } from 'react';

// function RecentEvent() {

//   const[loading, setIsLoading]=useState(false)
//   const[eventdata,setEventdata]=useState()

//   useEffect(() => {
//     const fetchDataExco = async () => {
//       try {
//         const response = await axios.get("http://127.0.0.1:8000/event/");
//         setEventdata(response.data);
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
//    <section className='container-fluid'   style={{ width: "21rem", height:'21rem'}}>
//      <Carousel  indicators={false}>
//       {eventdata?.map((el)=><Carousel.Item key={el.id}>
//         <div >
//         <img src={el.photo} 
       
//         style={{ width: "13rem", height:'13rem'}}
//         alt="..."
//         />
//         </div>
        
//         <Carousel.Caption  style={{position:'relative' , marginTop:"1.2rem" , marginRight:"6rem", color:'dark'}}>
          
//           <p  className='fs-5 text-dark text-bold' >{el.title}</p>
//         </Carousel.Caption>
//       </Carousel.Item>)}
    
      
//     </Carousel>

//    </section>
//   );
// }

// export default  RecentEvent;

import Carousel from 'react-bootstrap/Carousel';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

function RecentEvent() {
  const [loading, setIsLoading] = useState(false);
  const [eventdata, setEventdata] = useState();

  useEffect(() => {
    const fetchDataExco = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/event/");
        setEventdata(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchDataExco();
  }, []);

  const lastThree = eventdata?.slice(-5);

  return (
    <section className="container-fluid" style={{ width: "21rem", height: "auto" }}>
      <Carousel
        indicators={false}
        nextIcon={
          <span
            className="carousel-control-next-icon"
            style={{ filter: "invert(1)" }}
            aria-hidden="true"
          ></span>
        }
        prevIcon={
          <span
            className="carousel-control-prev-icon"
            style={{ filter: "invert(1)" }}
            aria-hidden="true"
          ></span>
        }
      >
        {lastThree?.map((el) => (
          <Carousel.Item key={el.id}>
            <div
              style={{
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "1rem",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                overflow: "hidden",
                textAlign: "center",
              }}
            >
              <img
                src={el.photo}
                alt="event"
                style={{
                  width: "100%",
                  height: "13rem",
                  objectFit: "cover",
                  borderRadius: "1rem 1rem 0 0",
                }}
              />
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "#f8f9fa",
                  borderRadius: "0 0 1rem 1rem",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    color: "#333",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    margin: "0",
                    wordWrap: "break-word",
                  }}
                >
                  {el.title}
                </p>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default RecentEvent;
