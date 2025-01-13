import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

import { Link, useNavigate} from "react-router-dom";

function SearchAttendance() {
const navigate=  useNavigate()
const[loading,setLoading]=useState(false)
 const[date,setDate]=useState()
 const[data,setData]=useState()
 
//  console.log(data.length)

 
  
  function handleSubmit(e) {
   
    e.preventDefault()
    
    
    
    
    

   



    axios
      .get(`https://taiwoakinpennu2.pythonanywhere.com/attending/?date=${date}`)
      .then(res=>{
        setData(res.data)
      })
       
      
        
          
          
       
          
      
      

  
  }
  

  function Reload(){
    window.location.reload()
  }

  function goAdmin(){
    navigate('/admin')
  }

 
  return (
    <div className="container min-vh-100">
      {data?.length==0 && <div className="container">
      <i className="bi bi-arrow-left fs-1 fw-bold" onClick={Reload}></i>
      </div>}
      
      {data?.length !=0  && <div className="container">
      <i className="bi bi-arrow-left fs-1" onClick={goAdmin} ></i>
      </div>}
       
                
    <form className=" container w-auto mt-5 " onSubmit={handleSubmit}>
   {!data && <div className="card">
      <h3 className="card-header mb-3 text-success text-center">View Attendance</h3>
      <div className="container">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label fs-3">
          Enter the date of the event
        </label>
        <input
        onChange={(e)=>setDate(e.target.value)}
          type="date"
          className="form-control"
         
          
          required
          
        />
      </div>
      
      
      

      <button type="submit" className="btn mb-3 btn-success fs-5" >
        search
       
      </button>
     
     
      </div>
      </div>}

    </form>
    <div  className="card-header" style={{marginTop:'-45px', textDecoration:'underline'}}>{data && data.length !=0 &&  <h4 className="text-center"> This event was named {data[0]?.title}</h4>}</div>
    {data && <div>{data.length==0?  <div className="text-danger fs-1  text-center" style={{marginTop:"18rem"}}>No event took place on <br/> {date}</div> : 
    <table className="table text-center">
    <thead>
      <tr>
      
        <th scope="col">#</th>
        <th scope="col">Name</th>
       
      </tr>
    </thead>
    <tbody>
      {data?.map((el,index) => (
       
       
        <tr key={el.id}>
         
          <td>
            
         
              {index+1}
              
            
          </td>
          <td>
            
              
         {el.name}
            
          </td>
         
        </tr>
      ))}
    </tbody>
  </table>}</div>}
  </div>
  );
}

export default SearchAttendance;
