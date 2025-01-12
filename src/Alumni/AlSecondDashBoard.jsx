import axios from "axios";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link, useParams } from "react-router-dom";

function AlSecondDashBoard() {
  const params = useParams();
  const [dash, setDash] = useState();

  

  useEffect(() => {
    try {
      axios
        .get(`http://127.0.0.1:8000/nsu/${params.member_idal}/`)
        .then((response) => {
          setDash(response.data);
        });
    } catch (error) {
      console.log(error);
    }
  }, [params.member_id]);

  return (
    <div className="container  mt-4  min-vh-100">
      <div className="d-flex gap-2">
        <aside className="card fs-7 w-50">
          <div>
            <div className="">
              <div className="text-center mt-2 mb-4 ">
                <LazyLoadImage src={dash?.photo} alt="..." className="rounded-4 "  style={{height:"4rem", width:"4rem"}} />

                <h5 className="mt-2 fs-6">{dash?.First_name} {dash?.Surname}</h5>
              </div>
            </div>
            <h5 className="card-header">Menu</h5>

            <div className="list-group list-group-flush ">
              <Link to="/boardal" className="list-group-item list-group-item-action">
               My Dashboard
              </Link>
              
              
             
              
            </div>
          </div>
        </aside>

        <section className="col-md-9 w-75 ">
          <div className="card">
            <h3 className="card-header"> Member Profile</h3>
            <div className="p-2 ">
              <div className="d-flex gap-2 ">
                <p className="flex-shrink-1 ">Degree :</p>
                <p>{dash?.Degree}</p>
              </div>
              <div className="d-flex gap-2">
                <p className="flex-shrink-1">College :</p>
                <p>{dash?.College}</p>
              </div>
              <div className="d-flex gap-2">
                <p className="flex-shrink-1">Mobile :</p>
                <p>{dash?.Phone_number}</p>
              </div>
              <div className="d-flex gap-2">
                <p className="flex-shrink-1">Building :</p>
                <p>
                  {" "}
                  {dash?.Building_number}/{dash?.Room_number}
                </p>
              </div>
              <div className="d-flex gap-2">
                <p className="flex-shrink-1">Family in SA :</p>
                <p>{dash?.FamilyinSaudi}</p>
              </div>
              <div className="d-flex gap-1">
                <p className="flex-shrink-1">Address :</p>
                <p>{dash?.Address=="undefined"? "Nil" : dash?.Address}</p>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <h3 className="card-header">Next of Kin</h3>
            <div className="p-2 ">
              <div className="d-flex gap-2 ">
                <p className="flex-shrink-1 ">Name :</p>
                <p>{dash?.Emergency_FirstName}</p>
              </div>
              {/* <div className="d-flex gap-2 ">
                <p className="flex-shrink-1 ">City :</p>
                <p>{dash?.Nextofkin_city}</p>
              </div> */}

              {/* <div className="d-flex gap-2">
                <p className="flex-shrink-1">Mobile :</p>
                <p>{dash?.Nextofkin_mobile}</p>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AlSecondDashBoard;
