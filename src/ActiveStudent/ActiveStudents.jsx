
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import TransparentSpinner from "../Spinner";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function ActiveStudents() {
  const [active, setActive] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/nsu/");
        setActive(response.data);
        setIsLoading(false);
        console.log(response);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Calculate the start and end index of the current page
  const startIndex = (currentPage - 1) * 12;
  const endIndex = currentPage * 12;

  // Function to handle next page
  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Function to handle previous page
  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="container mt-3 min-vh-100">
      {isLoading ? (
        <TransparentSpinner />
      ) : (
        <div>
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h3 className="mb-0">Active Students</h3>
              <Link to="/board" className="text-decoration-none text-black fw-bold">
                <h2 className="mb-0 ">
                  <i className="bi bi-arrow-left"></i>
                </h2>
              </Link>
            </div>
          </div>
          <table className="table mt-4">
            <thead>
              <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
              {active.slice(startIndex, endIndex).map((el) => (
                <tr key={el.id}>
                  <td>
                    <LazyLoadImage
                      src={el.photo}
                      style={{ width: "2rem", height: "2rem" }}
                      className="rounded-pill"
                      
                      alt=""
                    />
                  </td>
                  <td>
                    <Link to={`/sboard/${el.id}`} className="text-decoration-none">
                      {el.First_name}
                    </Link>
                  </td>
                  <td>{el.Phone_number}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="mt-5 text-nowrap fw-bold">
            Total active students {active.length > 1? "are" : "is"} {active.length}.
          </p>
          {active.length > 5 && (
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                  <button className="page-link" onClick={prevPage}>
                    Previous
                  </button>
                </li>
                <li className={`page-item ${endIndex >= active.length ? "disabled" : ""}`}>
                  <button className="page-link" onClick={nextPage}>
                    Next
                  </button>
                </li>
              </ul>
            </nav>
          )}
        </div>
      )}
    </div>
  );
}

export default ActiveStudents;

