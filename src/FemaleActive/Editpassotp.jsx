import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


function Forgototpf() {
  const navigate=useNavigate()
  const [auth_email, setauth_email] = useState();
  const [loading, setLoading] = useState(false);
 
  function handleSubmit(e) {
    setLoading(true)
    e.preventDefault()
    const verify_token=Math.floor(100000 + Math.random() * 900000)
    
    const formdata = new FormData();
    formdata.append("auth_email", auth_email);
    formdata.append("verify_token", verify_token);

    axios
      .post("http://taiwoakinpennu2.pythonanywhere.com/forgot/", formdata, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if(res.data.booll==true){
          // toast.success("successfully login")
          localStorage.setItem('UserLoginStatus', true)
          localStorage.setItem('forgot_idd', res.data.forgot_idd)
          
          // window.location.href='/forgototp'
          navigate('/forgototpf') 
          
          
        }else{
          setLoading(false)
        }
      }).catch((error) => {
        if(toast.error("invalid email")){
          setLoading(false)
      }
      })

  
  }
  

  const UserLoginStatus= localStorage.getItem('UserLoginStatus')
 
 
 
  return (
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={handleSubmit}>
    <div className="card">
      <h3 className="card-header mb-3">Enter your registered email (F) </h3>
      <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
        onChange={(e)=>setauth_email(e.target.value)}
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
      </div>
      

      

      <div className="d-flex gap-4">
      <Link to='/femalepage'><button type="submit" className="btn mb-3 btn-secondary" >
        Cancel
      </button></Link>
      <button type="submit" className="btn mb-3 btn-success" >
        {loading? 'loading...' : 'Submit'}
      </button>
      </div>
      </div>
      </div>
    </form>
   
  );
}

export default Forgototpf;
