import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Upcoming = () => {
const[Upcoming, setUpcomingdata]=useState()
const[loading,setIsLoading]=useState(false)

 
  const carouselItemStyle = {
    minWidth: '100%',
    boxSizing: 'border-box',
    padding: '20px',
    textAlign: 'center',
  };

  const carouselContentStyle = {
    display: 'flex',
    animation: 'scroll 15s linear infinite',
  };


  useEffect(() => {
    const fetchDataExco = async () => {
      try {
        const response = await axios.get("https://taiwoakinpennu2.pythonanywhere.com/upcoming/");
        setUpcomingdata(response.data);
        setIsLoading(false);
        
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchDataExco();
  }, []);

  const lastItem = Upcoming?.[Upcoming.length - 1]; // Get the last item

  return (
    <div style={{ overflow: 'hidden', width: '100%', height: '200px', position: 'relative' }} >
      <div style={{ display: 'flex', width: '100%', height: '100%' }}>
        
        <div style={carouselContentStyle}>
          {loading ? (
            <p>Loading...</p>
          ) : lastItem ? (
            <div className="" style={carouselItemStyle}>
              <h3>{lastItem.date}</h3>
              <p className="fw-bold fs-4">{lastItem.title}.</p>
            </div>
          ) : (
            <p>No data available</p>
          )}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(-100%);
            }
            100% {
              transform: translateX(100%);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Upcoming;


