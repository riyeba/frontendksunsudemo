import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TransparentSpinner from "../Spinner";
import {useNavigate} from "react-router-dom"

function Excos() {
  const navigate=useNavigate()
  const[exco,setExco]=useState()
  const [ name, setName] = useState();
  const [department , setDepartment] = useState()
  const [degree , setDegree] = useState()
  const [mobile, setMobile] = useState();
  const [photo, setphoto] = useState();
  
 
 const [loading, setLoading] = useState(false);


  async function Submit() {
    setLoading(true);
   
    const formdata = new FormData();
    

    formdata.append("exco",  exco);
    formdata.append("name",  name);
    formdata.append("department", department);
    formdata.append("degree", degree);
    formdata.append("mobile", mobile);
    formdata.append("photo", photo);
   
   
   
    



  try {
    const response = await axios.post("https://taiwoakinpennu2.pythonanywhere.com/port/", formdata);
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
    <form className=" container w-auto mt-5  " onSubmit={SubmitForm} style={{marginBottom:'4rem'}}>
       <div className="card border-dark">
        <h3 className="card-header mb-3">Register Excos</h3>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Post
            </label>
            <input
              
              type="text"
              className="form-control border-dark"
              placeholder="e.g president"
             
              aria-describedby="emailHelp"
              onChange={(e) => setExco(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Full-Name
            </label>
            <input
             
              type="text"
              className="form-control border-dark"
             
              aria-describedby="emailHelp"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          
            
          
        

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Department
            </label>
            <input
             
              type="text"
              className="form-control border-dark"
             
              aria-describedby="emailHelp"
              
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Degree
            </label>

            <select
              className="form-select border-dark"
              aria-label="Default select example"
             
              onChange={(e) => setDegree(e.target.value)}
            >
              <option value="select">Select</option>
              <option value="MSC">MSC</option>
              <option value="PhD">PhD</option>
              <option value="PhD">Diploma</option>
              <option value="PhD">Professional Degree</option>
              <option value="PhD">Other</option>
            </select>
          </div>

          
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Phone Number
            </label>
            <input
              
              type="text"
              className="form-control border-dark"
             
              aria-describedby="emailHelp"
              placeholder="+966"
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>

          
         
          

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

          <button type="submit" className="btn mb-3 btn-success">
            Submit
          </button>
        </div>
    
    </div>
    </form>
  );
}

export default Excos;
