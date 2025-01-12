import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";

function AlumniDashBoard() {
  const params = useParams();
  //   const [dash, setDash] = useState();
  
  const [data, setData] = useState();
  

  

  useEffect(() => {
    try {
      axios
        .get(`https://taiwoakinpennu2.pythonanywhere.com/nsual/${params.member_idalumni}/`)
        .then((response) => {
          setData(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [params.member_idalumni]);


  

  

  return (
    <div className="container  mt-4  min-vh-100">
      <div className="d-flex gap-2">
        <aside className="card fs-7 w-50">
          <div>
            <div>
              <div className="text-center mt-2 mb-4 ">
                {!data?.photo ? (
                  "loading..."
                ) : (
                  <LazyLoadImage
                    src={data?.photo}
                    alt="..."
                    className="rounded-4 "
                    style={{ height: "4rem", width: "4rem" }}
                  />
                )}

                <h5 className="mt-2 fs-6 ">
                  {data?.First_name} {data?.Surname}
                </h5>
              </div>
            </div>

            <h5 className="card-header">Menu</h5>

            <div className="list-group list-group-flush ">
              <div className="list-group-item list-group-item-action d-flex gap-2  ">
                <i className="bi bi-house-door-fill"></i>
                <Link to="/board" className="text-black text-decoration-none">
                  My Dashboard
                </Link>
              </div>
            </div>
          </div>
        </aside>

        <section className="col-md-9 w-75 ">
          <div className="card">
            <h3 className="card-header">Member Profile (Alumni)</h3>
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
                <p className="flex-shrink-1">Country of residence:</p>
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

export default AlumniDashBoard;
