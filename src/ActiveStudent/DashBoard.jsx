


import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import TransparentSpinner from "../Spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

function DashBoard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null); // Initialize as null
  const [show, setShow] = useState(false);
  const active_id = localStorage.getItem("active_id");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    

    axios
      .get(`https://taiwoakinpennu2.pythonanywhere.com/nsu/${active_id}/`)
      .then((response) => {
        setData(response.data);
        console.log(response)
        
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, [active_id, navigate]);

  const goDelete = (id) => {
    setLoading(true);
    const verify_token = Math.floor(100000 + Math.random() * 900000);
    const formData = new FormData();
    formData.append("verify_token", verify_token);

    axios
      .post(`https://taiwoakinpennu2.pythonanywhere.com/deleteotp/${id}/`, formData, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setLoading(false); // Reset loading state
        if (res.status === 200) {
          toast.success("Verification code sent to your email");
          navigate("/otpdel");
        }
      })
      .catch((error) => {
        setLoading(false); // Reset loading state
        console.error("Error sending delete request:", error);
      });
  };

 
  const handleLogOut = () => {
    localStorage.removeItem("UserLoginStatus");
    navigate('/login')
  };

  console.log( localStorage.getItem("UserLoginStatus"))

  const LogOut = () => {
    handleLogOut()
  };

  
  
  
  const goForm = (id, el) => {
    navigate("/edit", { state: { id, el } });
  };

  const SplitWordGreaterThan10 = (text) => {
    return text
      .split(" ")
      .map((word) => {
        if (word.length > 10) {
          let brokenWord = "";
          for (let i = 0; i < word.length; i += 10) {
            brokenWord += word.slice(i, i + 10) + "\n";
          }
          return brokenWord.trim();
        } else {
          return word;
        }
      })
      .join(" ");
  };

  return (
    <div className="container mt-4 min-vh-100">
      {!data ? (
        <TransparentSpinner />
      ) : (
        <div className="d-flex gap-2">
          <aside className="card fs-7 w-50" style={{ height: "40rem" }}>
            <div className="text-center mt-2 mb-4">
              <LazyLoadImage
                src={data?.photo}
                // alt="User Photo"
                className="rounded-4"
                style={{ height: "4rem", width: "4rem" }}
              />
              <h5 className="mt-2" style={{ fontSize: "15px" }}>
                {data?.First_name} {data?.Surname}
              </h5>
            </div>
            <h5 className="card-header">Menu</h5>
            <div className="list-group list-group-flush">
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-house-door-fill"></i>
                <Link to="#" className="text-black text-decoration-none">
                  Dashboard
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-check"></i>
                <Link to="/active" className="text-black text-decoration-none">
                  Students
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-dash"></i>
                <Link
                  to="/alumniactive"
                  className="text-black text-decoration-none"
                >
                  Alumni
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-gear-fill"></i>
                <Link
                  to="#"
                  className="text-black text-decoration-none"
                  onClick={() => setShow(!show)}
                >
                  Settings
                </Link>
              </div>
              {show && (
                <div>
                  <div
                    className="list-group-item list-group-item-action d-flex gap-2"
                    onClick={() => goForm(data?.id, data)}
                  >
                    <i className="bi bi-pencil-fill"></i>
                    <Link to="#" className="text-black text-decoration-none">
                      Edit Profile
                    </Link>
                  </div>
                  <div className="list-group-item list-group-item-action d-flex gap-2">
                    <i className="bi bi-unlock-fill"></i>
                    <Link
                      to="/password"
                      className="text-black text-decoration-none"
                    >
                      Edit Password
                    </Link>
                  </div>
                  <div
                    className="list-group-item list-group-item-action d-flex gap-2 text-danger"
                    onClick={() => goDelete(data?.id)}
                  >
                    <i className="bi bi-trash3"></i>
                    <Link to="#" className="text-danger text-decoration-none">
                      {loading ? "Loading..." : "Delete Profile"}
                    </Link>
                  </div>
                </div>
              )}
              <button
                onClick={LogOut}
                className="list-group-item list-group-item-action text-danger mt-4 d-flex gap-2 fw-bold fs-6 position-absolute bottom-0 end-0 border-top"
              >
                <i className="bi bi-box-arrow-right text-danger">Sign Out</i>
                
              </button>
            </div>
          </aside>
          <section className="col-md-9 w-75">
            <div className="card">
              <h3 className="card-header">My Profile</h3>
              <div className="p-2">
                <div className="d-flex gap-2">
                  <p className="flex-shrink-1">Degree:</p>
                  <p>{data?.Degree}</p>
                </div>
                <div className="d-flex gap-2">
                  <p className="flex-shrink-1">College:</p>
                  <p>{data?.College}</p>
                </div>
                <div className="d-flex gap-2">
                  <p className="flex-shrink-1">Mobile:</p>
                  <p>{data?.Phone_number}</p>
                </div>
                <div className="d-flex gap-1">
                  {data?.FamilyinSaudi === "Yes" ? (
                    <p className="flex-shrink-1">Address:</p>
                  ) : (
                    <p className="flex-shrink-1">Building:</p>
                  )}
                  {data?.FamilyinSaudi === "Yes" ? (
                    <p>{SplitWordGreaterThan10(data?.Address)}</p>
                  ) : (
                    <p>{data?.Building_number}</p>
                  )}
                </div>
                <div className="d-flex gap-1">
                  {data?.FamilyinSaudi === "Yes" ? (
                    <p className="flex-shrink-1"></p>
                  ) : (
                    <p className="flex-shrink-1">Room:</p>
                  )}
                  {data?.FamilyinSaudi === "Yes" ? (
                    <p></p>
                  ) : (
                    <p>{data?.Room_number}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="card mt-3">
              <h3 className="card-header">Next of Kin</h3>
              <div className="p-2">
                <div className="d-flex gap-2">
                  <p className="flex-shrink-1">Mobile:</p>
                  <p>{data?.Nextofkin_mobile}</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </div>
  );
}

export default DashBoard;

