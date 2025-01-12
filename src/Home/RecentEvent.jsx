import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TransparentSpinner from "../Spinner";
import {useNavigate} from "react-router-dom"


function RecentEvents() {
  const navigate=useNavigate()

  const [photo, setphoto] = useState();
  const [  title, setTitle] = useState();
  
 
 const [loading, setLoading] = useState(false);


  async function Submit() {
    setLoading(true);
   
    const formdata = new FormData();
    

    formdata.append("photo",  photo);
    formdata.append("title",  title);
   
   
   
   
    



  try {
    const response = await axios.post("http://taiwoakinpennu2.pythonanywhere.com/event/", formdata);
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
    <form className=" container w-auto mt-5 min-vh-100 " onSubmit={SubmitForm}>
       <div className="card border-dark">
        <h3 className="card-header mb-3">Post Recent Event</h3>
        <div className="container">
          

          <div className="mb-3 mt-4">
            <label htmlFor="formFile" className="form-label">
              Upload Photo
            </label>
            <input
              
              className="form-control border-dark"
              type="file"
              id="formFile"
              accept="image/*"
              onChange={(e) => setphoto(e.target.files[0])}
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

export default RecentEvents;
