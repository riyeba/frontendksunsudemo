import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TransparentSpinner from "../Spinner";
import {useNavigate} from "react-router-dom"


function UpcomingEvents() {
  const navigate=useNavigate()

  const [date, setDate] = useState();
  const [  title, setTitle] = useState();
  
 
 const [loading, setLoading] = useState(false);


  async function Submit() {
    setLoading(true);
   
    const formdata = new FormData();
    

    formdata.append("date",  date);
    formdata.append("title",  title);
   
   
   
   
    



  try {
    const response = await axios.post("https://taiwoakinpennu2.pythonanywhere.com/upcoming/", formdata);
    console.log(response)
    if (response.status === 201) {
      toast.success("data successfully uploaded");
      
    //   navigate("/otp")
    
    } else {
      setLoading(false);
    }
  } catch (error) {
    // toast.error(error.response.statusText);
  } finally {
    setLoading(false);
  }
}

function SubmitForm(e) {
  e.preventDefault();
  Submit();
}

  return (
    <form className=" container w-auto mt-5  min-vh-100" onSubmit={SubmitForm}>
       <div className="card border-dark">
        <h3 className="card-header mb-3">Post Upcoming Event</h3>
        <div className="container">
          
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Date of the Event
            </label>
            <input
             
              type="text"
              className="form-control border-dark"
             placeholder="e.g : December 13, 2024"
              aria-describedby="emailHelp"
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title of the Event
            </label>
            <input
             
              type="text"
              className="form-control border-dark"
             
              aria-describedby="emailHelp"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <button type="submit" className="btn mb-3 btn-success">
            Submit
          </button>
        </div>
    
    </div>
    </form>
  );
}

export default UpcomingEvents;
