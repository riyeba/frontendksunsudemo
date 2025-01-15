import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";


function AlDeleteOTP() {
 const[loading,setLoading]=useState(false)
  const [otp_digit, setOtp] = useState();
   const navigate = useNavigate();


function LogOut(){
    localStorage.removeItem('UserLoginStatu')
    navigate('/')
    
  }
 

   async function handleSubmit(e) {
    setLoading(true)
    e.preventDefault()
    const active_id = localStorage.getItem("active_id");
    const formdata = new FormData();
    formdata.append("otp_digit", otp_digit);
   

   

console.log(active_id)

   
  

  

  try {
    const response = await axios.post(`https://taiwoakinpennu2.pythonanywhere.com/alremove/${active_id}/`, formdata);
  
    
    if (response.data.bool===true) {
      
      toast.success("data successfully deleted");
      LogOut()
      
      
    } else{
      toast.error("Incorrect verification code");
      setLoading(false)
    }
  } catch (error) {
    toast.error("Incorrect verification code");
  } 
}
 
  return (
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={handleSubmit}>
    <div className="card">
      <h3 className="card-header mb-3">Enter the code sent to your email to delete your account</h3>
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
      <div className="d-flex gap-4">
      <Link to='/boardal'><button type="submit" className="btn mb-3 btn-success" >
        Cancel
      </button></Link>
      <button type="submit" className="btn mb-3 btn-danger" >
       {loading? "loading..." : "Delete"}
      </button>
      </div>
      </div>
      </div>
    </form>
   
  );
}

export default AlDeleteOTP;
