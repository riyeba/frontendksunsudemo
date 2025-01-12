import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

function OTPAL() {
    const navigate=useNavigate()
  const [otp_digit, setOtp] = useState();
  
 
 
  function handleSubmit(e) {
    e.preventDefault()
    
    const formdata = new FormData();
    formdata.append("otp_digit", otp_digit);
   

   



    axios
      .post("http://127.0.0.1:8000/checkal/", formdata, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        if (response.data.bool === true) {
            localStorage.setItem("UserLoginStatu", true);
            localStorage.setItem("verify_id", response.data.verify);
            // window.location.href = "/loginal";
            navigate("/loginal")
          }
      }).catch((error) => {
        toast.error("invalid")
      })

  
  }
  

  
 
  return (
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={handleSubmit}>
    <div className="card">
      <h3 className="card-header mb-3">Enter the code sent to your email (Alumni)</h3>
      <div className="container">
      <div className="mb-3">
        <input
        onChange={(e)=>setOtp(e.target.value)}
          type="number"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
      </div>
      <button type="submit" className="btn mb-3 btn-success" >
        Send
      </button>
      </div>
      </div>
    </form>
   
  );
}

export default OTPAL;
