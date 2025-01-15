import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useNavigate } from "react-router-dom";

function AlDashBoard() {
  const navigate=useNavigate()
  const [data, setData] = useState();
  const [show, setShow] = useState(false);
  const active_id = localStorage.getItem("active_id");
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    try {
      axios
        .get(`https://taiwoakinpennu2.pythonanywhere.com/nsual/${active_id}/`)
        .then((response) => {
          setData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [active_id]);

  function goDelete(id) {
    setLoading(true);
    const verify_token = Math.floor(100000 + Math.random() * 900000);

    const formdata = new FormData();
    formdata.append("verify_token", verify_token);

    axios
      .post(`https://taiwoakinpennu2.pythonanywhere.com/aldeleteotp/${id}/`, formdata, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` }, 
      })
      .then((res) => {
        console.log(res);
        if (res.status ==200) {
          toast.success("verification codes sent to your email");
          // window.location.href = "/alotpdel";
          navigate("/alotpdel")
        } else {
          setLoading(false);
        }
      })
      .catch((error) => {
        
      });
  }

  function LogOut() {
    localStorage.removeItem("UserLoginStatu");
     navigate("/loginal")
  }

  

  function goForm(id, el) {
    navigate("/edital", { state: { id, el } });
  }

  function gostudent(){
    
    window.location.href = "/alactive";
  }

  return (
    <div className="container  mt-4 min-vh-100 ">
      <div className="d-flex gap-2">
        <aside className="card fs-7 w-50" style={{height:"35rem"}}>
          <div>
            <div>
              <div className="text-center mt-2 mb-4 ">
                <LazyLoadImage
                  src={data?.photo}
                  alt="..."
                  className="rounded-4 "
                  style={{ height: "4rem", width: "4rem" }}
                  
                />

                <h5 className="mt-2 fs-6 ">
                  {data?.First_name} {data?.Surname}
                </h5>
              </div>
            </div>

            <h5 className="card-header">Menu</h5>

            <div className="list-group list-group-flush ">
              <div className="list-group-item list-group-item-action d-flex gap-2  ">
                <i className="bi bi-house-door-fill"></i>
                <Link href="#" className="text-black text-decoration-none">
                  Dashboard
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2" onClick={()=>gostudent()}>
                <i className="bi bi-person-fill-check"></i>
                <Link  className="text-black text-decoration-none">
                  Students
                </Link>
              </div>
              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-person-fill-dash"></i>
                <Link to="/alumni" className="text-black text-decoration-none ">
                  Alumni
                </Link>
              </div>

              <div className="list-group-item list-group-item-action d-flex gap-2">
                <i className="bi bi-gear-fill"></i>
                <Link
                  className="text-black text-decoration-none "
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
                    <Link className="text-black text-decoration-none ">
                      Edit Profile
                    </Link>
                  </div>

                  <div className="list-group-item list-group-item-action d-flex gap-2">
                    <i className="bi bi-unlock-fill"></i>
                    <Link
                      to="/alpassword"
                      className="text-black text-decoration-none "
                    >
                      Edit Password
                    </Link>
                  </div>
                  <div
                    className="list-group-item list-group-item-action d-flex gap-2 text-danger"
                    onClick={() => goDelete(data?.id, data)}
                  >
                    <i className="bi bi-trash3"></i>
                    <Link className="text-danger  text-decoration-none ">
                      {loading ? "loading..." : "Delete Profile"}
                    </Link>
                  </div>
                </div>
              )}
              <div style={{ marginTop: "8rem" }}>
                <button
                  onClick={() => LogOut()}
                  className="list-group-item list-group-item-action text-danger  d-flex gap-2 fw-bold fs-6 position-absolute bottom-0 end-0 "
                  
                >
                  <i className="bi bi-box-arrow-right text-danger "></i>
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </aside>

        <section className="col-md-9 w-75 ">
          <div className="card">
            <h3 className="card-header">My Profile (Alumni)</h3>
            <div className="p-2 ">
              <div className="d-flex gap-2 ">
                <p className="flex-shrink-1 ">Degree Earned:</p>
                <p>{data?.Degree}</p>
              </div>
              <div className="d-flex gap-2">
                <p className="flex-shrink-1">College :</p>
                <p>{data?.College}</p>
              </div>
              <div className="d-flex gap-2">
                <p className="flex-shrink-1">Year of Graduation:</p>
                <p>{data?.Graduation_year}</p>
              </div>

              <div className="d-flex gap-2">
                <p className="flex-shrink-1">Mobile:</p>
                <p>{data?.Phone_number}</p>
              </div>
              <div className="d-flex gap-2">
                <p className="flex-shrink-1">Country:</p>
                <p>{data?.Residence_Country}</p>
              </div>
              <div className="d-flex gap-1">
                <p className="flex-shrink-1">Occupation :</p>
                <p>
                  {data?.Occupation == "undefined" ? "Nil" : data?.Occupation}
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AlDashBoard;
