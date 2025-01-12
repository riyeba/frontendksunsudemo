import axios from 'axios';
import React from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router';

function Attendance() {
  const navigate=useNavigate()
  const[date,setDate]=useState(new Date().toISOString().split('T')[0])
  const[title,setTitle]=useState("")
    const[formField,setFormField]=useState([{name:''}])
    const[show, setShow]=useState(true)
    const[loading,setLoading]=useState(false)
   
    
  
    const handleFormChange=(event,index)=>{
      event.preventDefault()
        let data=[...formField];
        data[index][event.target.name]=event.target.value;
        setFormField(data)
    }
    

    const addFields=()=>{
      let object={
        name:'',
        title:title,
        date:date

       
      }
      setFormField([...formField,object])
    }

    const removeFields=(index)=>{
let data=[...formField];
data.splice(index,1)
setFormField(data)
    }

    


    
    


    
  
  

  const submitAttendance =(e)=>{
    setLoading(true)
    
    e.preventDefault()
 formField.forEach(eachperson=>{
  axios.post("http://taiwoakinpennu2.pythonanywhere.com/attend/", {
    name:eachperson.name,
    title:title,
    date:date

  }).then(response=>{
    if(response.data){
      
      navigate('/searchattend')
      
    }
  })
 })
  }

 

  function goAdmin(){
    navigate('/admin')
  }
 
  
  if(loading==true){
    toast.success("successfully sent")
  }
  return (
    
      

<form className=" container w-auto mt-5 min-vh-100"  onSubmit={submitAttendance}>
       <div className="card">
        <div>
        <div className="card-header mb-3 d-flex justify-content-between align-items-center">
          <h3> Mark Attendance </h3>
          <i className="bi bi-arrow-left fs-2 " style={{cursor:'pointer'}} onClick={goAdmin}></i>
          
          </div>
        
       
        </div>
        
      
        <div className="container">

        <h1 className=" d-flex gap-2 mb-3 "  style={{width:'100%'}}>
              
            
            <input
              required
              type="date"
             
              className="form-control"
              onChange={(e)=>setDate(e.target.value)}
              
             
             
             
            
             
            />
            
          </h1>
          <div className=" d-flex gap-2 justify-content-center align-items-center"  style={{width:'100%'}}>
              
            
            <input
              required
              type="text"
             
              className="form-control text-bold fs-4"
              placeholder='Title of the Meeting'
             
             onChange={(e)=>setTitle(e.target.value)}
             
            
             
            />
            
          </div>






          { !show && formField.map((form,index)=>
          
            <div className=" d-flex gap-2 justify-content-center align-items-center" key={index} style={{width:'100%'}}>
              <div style={{marginTop:"1rem",position:"relative"}}><p>{index+1}</p> </div>
            
            <input
            required
              name='name'
              type="text"
              className="form-control"
              onChange={event=>handleFormChange(event,index)}
              value={form.name}
             
             
              placeholder='write your fullname'
             
            />
           
            <i  onClick={()=>removeFields(index)} className="bi bi-x fs-4 text-danger" style={{cursor:'pointer'}}></i>
          </div>
          )}
          
          
          

          

         
          
          <div onClick={(show)=>setShow(!show)}>
          <i   onClick={addFields} className="fa bi-plus-square fs-4 text-dark d-flex justify-content-center mt-3 pb-2" style={{cursor:'pointer'}}></i>
            </div>
            {!show? (<button type="submit" className="btn mb-3 btn-success" >
            {loading ==true ? "loading..." : "Submit"}
          </button>) : ""}
          
 
        </div>
      </div>
    </form>

  )
}

export default Attendance