
import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignInAl() {
  const [auth_email, setauth_email] = useState();
  const [auth_password, setauth_password] = useState();
  // const[show,setShow]=useState(true)
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();

    const formdata = new FormData();
    formdata.append("auth_email", auth_email);
    formdata.append("auth_password", auth_password);

    axios
      .post("https://taiwoakinpennu2.pythonanywhere.com/loginal/", formdata, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        if (res.data.bool == true) {
          toast.success("Successfully logged in");
          localStorage.setItem("UserLoginStatu", true);
          localStorage.setItem("active_id", res.data.active_id);
          navigate("/boardal")
        }
      })
      .catch((error) => {
        toast.error("Either the email or password is incorrect");
      });
  }

  return (
    <form className="container w-auto mt-5 min-vh-100" onSubmit={handleSubmit}>
      <div className="card">
        <h3 className="card-header mb-3">Log In (Alumni)</h3>
        <div className="container">
          {/* Displaying Login Info for Alumni */}
          <div className="alert alert-info">
            <strong>Login Credentials</strong><br />
            To login as alumni: <strong>email: moriyebas@gmail.com</strong> and <strong>password: 123457</strong><br />
            To login as admin, please go to the student section. You can also sign up as alumni by entering a valid email address.
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
              placeholder="your@email.com"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setauth_password(e.target.value)}
              type="password"
              className="form-control"
              aria-describedby="emailHelp"
              required
            />
          </div>

          <button type="submit" className="btn mb-3 btn-success">
            Login
          </button>
          <p>
            Need an account?{" "}
            <Link to="/registeral" className="text-decoration-underline cursor-pointer text-dark">
              <strong>Sign up</strong>
            </Link>
          </p>
          <p>
            Forgot Password?{" "}
            <Link to="/alpassword" className="text-decoration-underline cursor-pointer text-dark">
              <strong>Reset it</strong>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignInAl;

