import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


function AlForgot() {
  const [auth_email, setauth_email] = useState();
  const [loading, setLoading] = useState(false);

  const navigate=useNavigate()
  
  function handleSubmit(e) {
    setLoading(true)
    e.preventDefault()
    const verify_token=Math.floor(100000 + Math.random() * 900000)
    
    const formdata = new FormData();
    formdata.append("auth_email", auth_email);
    formdata.append("verify_token", verify_token);

    axios
      .post("http://taiwoakinpennu2.pythonanywhere.com/forgotal/", formdata, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if(res.data.bool==true){
          // toast.success("successfully login")
          localStorage.setItem('UserLoginStatu', true)
          localStorage.setItem('forgot_id', res.data.forgot_id)
          
        //   window.location.href='/forgototp'
          navigate('/alforgototp')
         
          
        }else{
            setLoading(true)
        }
        
      }).catch((error) => {
        
        if(toast.error("invalid email")){
            setLoading(false)
        }
      })

  
  }
  

 const UserLoginStatu= localStorage.getItem('UserLoginStatu') 
 
 
  return (
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={handleSubmit}>
    <div className="card">
      <h3 className="card-header mb-3">Enter your registered email (Alumni)</h3>
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
      {UserLoginStatu? <Link to='/boardal'><button type="submit" className="btn mb-3 btn-secondary" >
        Cancel
      </button></Link> :<Link to='/loginal'><button type="submit" className="btn mb-3 btn-secondary" >
        Cancel
      </button></Link>}
      <button type="submit" className="btn mb-3 btn-success" >
        {loading? 'loading...' : 'Submit'}
      </button>
      </div>
      </div>
      </div>
    </form>
   
  );
}

export default AlForgot;
