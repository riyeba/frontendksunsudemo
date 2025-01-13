import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TransparentSpinner from "../Spinner";
import {useNavigate} from "react-router-dom"

function Logo() {
  const navigate=useNavigate()
  
  const [ photo, setphoto] = useState();
 
  
  
 
 const [loading, setLoading] = useState(false);


  async function Submit() {
    const formdata = new FormData();
    setLoading(true);
    
    

    formdata.append("photo",  photo);
   
    
    
    



  try {
    const response = await axios.post("https://taiwoakinpennu2.pythonanywhere.com/logo/", formdata);
    console.log(response)
    if (response.status === 201) {
      toast.success("successfully uploaded");
      // window.location.href = "/otp";
    //   navigate("/otp")
    
    } else {
      setLoading(false);
    }
  } catch (error) {
    toast.error(error.response.statusText);
  } finally {
    setLoading(false);
  }
}

function SubmitForm(e) {
  e.preventDefault();
  Submit();
}

  return (
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={SubmitForm}>
      {loading? <TransparentSpinner/> : <div className="card">
        {/* <h3 className="card-header mb-3">Personal Details</h3> */}
        <div className="container">
         
          
          

         
        <div className="mb-3 mt-4">
           <label htmlFor="formFile" className="form-label">
           Upload Logo
         </label>
       <input
              
              className="form-control"
              type="file"
              id="formFile"
              accept="image/*"
              onChange={(e) => setphoto(e.target.files[0])}
            />
          </div>
          


          
         
         

          <button type="submit" className="btn mb-3 btn-success">
            Submit
          </button>
        </div>
      </div>}
    </form>
  );
}

export default Logo;
