import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"

function OTP() {
  const navigate=useNavigate()
 
  const [otp_digit, setOtp] = useState();
  

 
  function handleSubmit(e) {
    e.preventDefault()
    
    const formdata = new FormData();
    formdata.append("otp_digit", otp_digit);
   

   



    axios
      .post("https://taiwoakinpennu2.pythonanywhere.com/check/", formdata, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((response) => {
        if (response.data.bool === true) {
            localStorage.setItem("UserLoginStatus", true);
            localStorage.setItem("verify_id", response.data.verify);
            // window.location.href = "/login";
            navigate("/login")
          }else if(response.data.booll === true){
            localStorage.setItem("UserLoginStatus", true);
            localStorage.setItem("verify_idd", response.data.verifyy);
            navigate("/login")
          }
      }).catch((error) => {
        toast.error("invalid")
      })

  
  }
  

  
 
  return (
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={handleSubmit} >
    <div className="card">
      <h3 className="card-header mb-3">Enter the code sent to your email</h3>
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

export default OTP;
