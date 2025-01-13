import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container-fluid  min-vh-100 d-flex align-items-center justify-content-center bg-white">
      <div className="text-center">
        <h1 className="mb-4">Welcome to Nigerian Students' Union</h1>
        <h2 className="mb-4">King Saud University Chapter</h2>

        <div className="row justify-content-center">
          <div className="col-md-6 mb-3">
            <Link to="/login">
              <button className="btn btn-success btn-lg btn-block">
                Sign In (Active Student)
              </button>
            </Link>
          </div>
          <div className="col-md-6">
           <Link to="/loginal"> <button className="btn btn-secondary btn-lg btn-block">
              Sign In (Alumni)
            </button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
