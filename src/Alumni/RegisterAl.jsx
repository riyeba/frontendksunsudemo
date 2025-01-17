import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import TransparentSpinner from "../Spinner";
import { useNavigate } from "react-router";

function RegisterAl() {
  const navigate = useNavigate();
  const [show, setShow] = useState(true);
  const [Surname, setSurname] = useState();
  const [First_name, setFirst_name] = useState();
  const [Graduation_year, set_Graduation_year] = useState();
  const [Degree, setDegree] = useState();
  const [College, setCollege] = useState();
  const [Residence_Country, setResidence_Country] = useState();
  const [Occupation, setOccupation] = useState();
  const [photo, setphoto] = useState();
  const [Phone_number, setPhone_number] = useState();
  const [auth_email, setauth_email] = useState();
  const [auth_password, setauth_password] = useState();
  const [loading, setLoading] = useState(false);

  async function Submit() {
     
    setLoading(true);
    const verify_token = Math.floor(100000 + Math.random() * 900000);
    const formdata = new FormData();

    formdata.append("Surname", Surname);
    formdata.append("First_name", First_name);
    formdata.append("Graduation_year", Graduation_year);
    formdata.append("Degree", Degree);
    formdata.append("College", College);
    formdata.append("Residence_Country", Residence_Country);
    formdata.append("Occupation", Occupation);
    formdata.append("photo", photo);
    formdata.append("Phone_number", Phone_number);
    formdata.append("auth_email", auth_email);
    formdata.append("auth_password", auth_password);
    formdata.append("verify_token", verify_token);
    formdata.append("email_sent_condition_met", true);

    try {
      const response = await axios.post(
        "https://taiwoakinpennu2.pythonanywhere.com/nsual/",
        formdata
      );
      if (response.status === 201) {
        toast.success("data successfully uploaded");
        navigate("/otpal")
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
    <form className=" container w-auto mt-5 min-vh-100" onSubmit={SubmitForm} style={{marginBottom:"6rem"}}>
      {loading ? (
        <TransparentSpinner />
      ) : (
        <div className="card">
          <h3 className="card-header mb-3">Personal Details (Alumni)</h3>
          <div className="container">
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Surname
              </label>
              <input
                required
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setSurname(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                First Name
              </label>
              <input
                required
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                onChange={(e) => setFirst_name(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Degree
              </label>

              <select
                className="form-select"
                aria-label="Default select example"
                required
                onChange={(e) => setDegree(e.target.value)}
              >
                <option value="select">Select</option>
                <option value="MSC">MSC</option>
                <option value="PhD">Diploma</option>
                <option value="PhD">Professional Degree</option>
                <option value="PhD">PhD</option>
                <option value="PhD">Other</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                College
              </label>

              <select
                className="form-select"
                aria-label="Default select example"
                required
                onChange={(e) => setCollege(e.target.value)}
              >
                <option value="Select">Select</option>
                <option value="Language">Language</option>
                <option value="Education">Education</option>
                <option value="Humanity">Law</option>
                <option value="Humanity">Tourism</option>
                <option value="Humanity">Sport</option>
                <option value="Humanity">Humanity</option>
                <option value="Engineering">Engineering</option>
                <option value="Science">Science</option>
                <option value="Health">Health</option>
                <option value="Business Admn">Business Admn</option>
                <option value="Architecture">Architecture</option>
                <option value="Computer Science">Computer Science</option>
                <option value="Food & Agric">Food & Agric</option>
                <option value="other">other</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Year of Graduation
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="2020"
                onChange={(e) => set_Graduation_year(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Country of Residence
              </label>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Nigeria"
                onChange={(e) => setResidence_Country(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Occupation
              </label>
              <input
                required
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Lecturer"
                onChange={(e) => setOccupation(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Phone Number
              </label>
              <input
                required
                type="text"
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="+966"
                onChange={(e) => setPhone_number(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email
              </label>
              <input
                onChange={(e) => setauth_email(e.target.value)}
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail" className="form-label">
                Password
              </label>
              <input
                onChange={(e) => setauth_password(e.target.value)}
                // type={show ? "password" : "text"}
                type="password"
                className="form-control"
                aria-describedby="emailHelp"
                required
              />
              {/* <span
                className="position-absolute top-50 end-0 mx-4"
                style={{ marginTop: "21.3rem" }}
                onClick={() => setShow(!show)}
              >
                {!show ? (
                  <i className="bi bi-eye-fill"></i>
                ) : (
                  <i className="bi bi-eye-slash-fill"></i>
                )}
              </span> */}
            </div>

            <div className="mb-3 mt-4">
              <label htmlFor="formFile" className="form-label">
                Upload your passport
              </label>
              <input
                required
                className="form-control"
                type="file"
                id="formFile"
                accept="image/*"
                onChange={(e) => setphoto(e.target.files[0])}
              />
            </div>

            <button type="submit" className="btn mb-3 btn-success">
              {loading? "loading..." : 'Submit'}
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default RegisterAl;
