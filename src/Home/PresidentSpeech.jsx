import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TransparentSpinner from "../Spinner";
import {useNavigate} from "react-router-dom"

function PresSpeech() {
  const navigate=useNavigate()
  const[text,setText]=useState(true)
  const [ name, setName] = useState();
 
  
  
 
 const [loading, setLoading] = useState(false);


  async function Submit() {
    const formdata = new FormData();
    setLoading(true);
    
    

    formdata.append("text",  text);
    formdata.append("name",  name);
    
    
    



  try {
    const response = await axios.post("http://taiwoakinpennu2.pythonanywhere.com/pres/", formdata);
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
         
          
          

         
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label fs-5">
              Write Your Speech
            </label>
            <textarea
              type="text"
              className="form-control border-dark fs-5 "
             
            style={{height:"18rem"}}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          


          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              President Name
            </label>
            <input
              required
              type="text"
              className="form-control border-dark fs-5"
              onChange={(e) => setName(e.target.value)}
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

export default PresSpeech;
