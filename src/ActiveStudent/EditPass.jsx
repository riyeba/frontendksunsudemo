import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import {useNavigate} from "react-router-dom"



function EditPass() {
  const navigate=useNavigate()
  const [auth_password, setauth_password] = useState();

 const forgot_id=localStorage.getItem('forgot_id')
 
  
  function handleSubmit(e) {
    e.preventDefault()
    
    const formdata = new FormData();
    formdata.append("auth_password", auth_password);
    
    

   



    axios
      .post(`https://taiwoakinpennu2.pythonanywhere.com/editpass/${forgot_id}/`, formdata, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        
          toast.success("Password updated successfully")
          // window.location.href='/login'
          navigate('/login')
          
          
          
          
        
      }).catch((error) => {
       
      })

  
  }
  

  
 
  return (
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={handleSubmit}>
    <div className="card">
      <h3 className="card-header mb-3">Change Password</h3>
      <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          New Password
        </label>
        <input
        onChange={(e)=>setauth_password(e.target.value)}
          type="password"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          required
        />
      </div>

      <button type="submit" className="btn mb-3 btn-primary" >
        Submit
      </button>
     {/* <Link to='/forgot' className="text-decoration-none"><p>forgot password</p></Link>  */}
      </div>
      </div>
    </form>
   
  );
}

export default EditPass;
