




import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TransparentSpinner from "../Spinner";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [Gender, setGender] = useState("");

  const [Surname, setSurname] = useState("");
  const [First_name, setFirst_name] = useState("");
  const [Degree, setDegree] = useState("select");
  const [College, setCollege] = useState("");
  const [Phone_number, setPhone_number] = useState("");
  const [Address, setAddress] = useState("");
  const [FamilyinSaudi, setFamilyinSaudi] = useState("Select");
  const [Building_number, setBuilding_number] = useState("");
  const [Room_number, setRoom_number] = useState("");
 
  const [Nextofkin_mobile, setNextofkin_mobile] = useState("");

  const [photo, setphoto] = useState(null);
  const [auth_email, setauth_email] = useState("");
  const [auth_password, setauth_password] = useState(""); 
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
   
    if ( Gender === "select"  || !First_name || Degree === "select"  || !auth_email || !auth_password  || FamilyinSaudi==="Select") {
      toast.error("Please fill all required fields");
      return false;
    }

  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(auth_email)) {
      toast.error("Please enter a valid email address");
      return false;
    }

   
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (!phoneRegex.test(Phone_number)) {
      toast.error("Please enter a valid phone number");
      return false;
    }

    



   
    if (auth_password.length < 6) {
      toast.error("Password should be at least 6 characters long");
      return false;
    }

     
   
    // if (FamilyinSaudi === "Yes" && !Address) {
    //   toast.error("Please enter address if family is in Saudi Arabia");
    //   return false;
    // }

    // if (FamilyinSaudi === "No" && (!Building_number || !Room_number)) {
    //   toast.error("Please enter hostel building and room number if family is not in Saudi Arabia");
    //   return false;
    // }

    
    if (photo) {
      const validImageTypes = ["image/jpeg", "image/png", "image/gif"];
      if (!validImageTypes.includes(photo.type)) {
        toast.error("Please upload a valid image file (jpg, png, gif)");
        return false;
      }

      if (photo.size > 2 * 1024 * 1024) {
        toast.error("Uploaded file size should be less than 2MB");
        return false;
      }
    }

    return true;
  };

  async function Submit() {
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    const verify_token = Math.floor(100000 + Math.random() * 900000);
    const formdata = new FormData();

    formdata.append("Surname", Surname);
    formdata.append("First_name", First_name);
    formdata.append("Degree", Degree);
    formdata.append("College", College);
    formdata.append("Phone_number", Phone_number);
    formdata.append("Address", Address);
    formdata.append("FamilyinSaudi", FamilyinSaudi);
    formdata.append("Building_number", Building_number);
    formdata.append("Room_number", Room_number);
    
   
    formdata.append("Nextofkin_mobile", Nextofkin_mobile);
   
    if (photo) {
      formdata.append("photo", photo);
    }
    formdata.append("auth_email", auth_email);
    formdata.append("auth_password", auth_password);
    formdata.append("verify_token", verify_token);
    formdata.append("email_sent_condition_met", true);
    formdata.append("Gender", Gender)

    try {
      if(Gender ==="" || Gender ==="Select"){
        toast.error("select your gender")
        return false
      }
      const SelectGender= Gender === "Female"? "https://taiwoakinpennu2.pythonanywhere.com/female/" : "https://taiwoakinpennu2.pythonanywhere.com/nsu/"
      const response = await axios.post(SelectGender, formdata);
      if (response.status === 201) {
        toast.success("Data successfully uploaded");
        navigate("/otp");
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
    <form className="container w-auto mt-5 min-vh-100" onSubmit={SubmitForm} style={{ marginBottom: "4rem" }}>
      
        <div className="card">
          <h3 className="card-header mb-3">Personal Details</h3>
          <div className="container">
          <div className="mb-3">
              <label className="form-label">Gender</label>
              <select
                className="form-select"
                
                onChange={(e) => setGender(e.target.value)}
              >
                <option defaultValue="Select">Select</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Surname</label>
              <input
                
                type="text"
                className="form-control"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                required
                type="text"
                className="form-control"
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Degree</label>
              <select
                className="form-select"
                
                onChange={(e) => setDegree(e.target.value)}
              >
                <option value="select">Select</option>
                <option value="MSC">MSC</option>
                <option value="Diploma">Diploma</option>
                <option value="Professional Degree">Professional Degree</option>
                <option value="PhD">PhD</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Family in Saudi Arabia?</label>
              <select
                className="form-select"
                required
                onChange={(e) => setFamilyinSaudi(e.target.value)}
              >
                <option defaultValue="Select">Select</option>
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>
            {FamilyinSaudi === "Yes" && (
              <div className="mb-3">
                <label className="form-label">Address (If your family is in Saudi Arabia)</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setAddress(e.target.value)}
                />
              </div>
            )}
            {FamilyinSaudi === "No" && (
              <div>
                <div className="mb-3">
                  <label className="form-label">Building No</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="7"
                    onChange={(e) => setBuilding_number(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Room Number</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="4"
                    onChange={(e) => setRoom_number(e.target.value)}
                  />
                </div>
              </div>
            )}
            <div className="mb-3">
              <label className="form-label">College</label>
              <input
                
                type="text"
                className="form-control"
                onChange={(e) => setCollege(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                
                type="text"
                className="form-control"
                placeholder="+966"
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                onChange={(e) => setauth_email(e.target.value)}
                type="email"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                onChange={(e) => setauth_password(e.target.value)}
                type={show ? "password" : "text"}
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Upload your passport</label>
              <input
                onChange={(e) => setphoto(e.target.files[0])}
                type='file'
                className="form-control"
                accept="image/*"
                
              />
            </div>
            


          <h3 className="card-header mb-3 mt-5">Emergency Contact</h3>
          <p className="text-dark fw-bold fs-7"> Please note that only the admin can access your emergency info.</p>
         
         
          
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Phone Number
            </label>
            <input
              
              type="text"
              className="form-control"
             
              placeholder="+234"
              onChange={(e) => setNextofkin_mobile(e.target.value)}
            />
          </div>
          
       

          <button type="submit" className="btn mb-3 btn-success">
            {loading? 'loading...' : 'Submit'}
          </button>
        </div>
      </div>
    </form>
  );
}

export default Register;
