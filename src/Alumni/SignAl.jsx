import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";


function SignInAl() {
 
  const [auth_email, setauth_email] = useState();
  const [auth_password, setauth_password] = useState();
  // const[show,setShow]=useState(true)

 
  
  function handleSubmit(e) {
    e.preventDefault()
    
    const formdata = new FormData();
    formdata.append("auth_email", auth_email);
    formdata.append("auth_password", auth_password);
    
    

   



    axios
      .post("http://127.0.0.1:8000/loginal/", formdata, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if(res.data.bool==true){
          toast.success("successfully login")
          localStorage.setItem('UserLoginStatu', true)
          localStorage.setItem('active_id', res.data.active_id)
          
          window.location.href='/boardal'
          
          
        }
      }).catch((error) => {
        toast.error("either the email or password is incorrect")
      })

  
  }
  
  
  
 
  return (
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={handleSubmit}>
    <div className="card">
      <h3 className="card-header mb-3">Log In (Alumni)</h3>
      <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email
        </label>
        <input
        onChange={(e)=>setauth_email(e.target.value)}
          type="email"
          className="form-control"
         
          aria-describedby="emailHelp"
          required
          placeholder="your@email.com"
        />
      </div>
      
      
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Password
        </label>
        <input
        onChange={(e)=>setauth_password(e.target.value)}
          // type={ show? "password" : "text"}
          type="password"
          className="form-control"
         
          aria-describedby="emailHelp"
          required
          
        />
        {/* <span className="position-absolute top-50 end-0 mx-4" onClick={()=>setShow(!show)}>{!show? <i className="bi bi-eye-fill"></i>:<i className="bi bi-eye-slash-fill"></i>}</span> */}
      </div>

      <button type="submit" className="btn mb-3 btn-success" >
        Login
       
      </button>
      <p> Need an account? <Link to='/registeral' className="text-decoration-underline cursor-pointer text-dark">Sign up</Link></p>
      <p> Forgot Password? <Link to="/alpassword" className="text-decoration-underline cursor-pointer text-dark">Reset it</Link></p>
     
      </div>
      </div>
    </form>
   
  );
}

export default SignInAl;
