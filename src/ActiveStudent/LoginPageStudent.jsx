import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [auth_email, setAuthEmail] = useState("");
  const [auth_password, setAuthPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePassword(password) {
    return password.length >= 6;
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

  
    setEmailError("");
    setPasswordError("");

    let valid = true;

    if (!validateEmail(auth_email)) {
      setEmailError("Please enter a valid email address.");
      valid = false;
    }

    if (!validatePassword(auth_password)) {
      setPasswordError("Password must be at least 6 characters long.");
      valid = false;
    }

    if (!valid) {
      setLoading(false);
      return;
    }

    const formData = new FormData();
    formData.append("auth_email", auth_email);
    formData.append("auth_password", auth_password);

    axios
      .post("http://127.0.0.1:8000/login/", formData, {
        headers: { Authorization: `Token ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setLoading(false);
        if (res.data.bool) {
          toast.success("Successfully logged in");
          localStorage.setItem('UserLoginStatus', true);
          localStorage.setItem('active_id', res.data.active_id);
          localStorage.setItem('nav', res.data.nav);
          window.location.href='/board'
          // navigate('/board');
        } else if (res.data.booll) {
          toast.success("Successfully logged in");
          localStorage.setItem('active_id', res.data.active_idd);
          navigate('/admin');
          
        } else if (res.data.boolll) {
          // localStorage.setItem('UserLoginStatuf', true); 
          toast.success("Successfully logged in");
          localStorage.setItem('active_iddd', res.data.active_iddd);
          navigate('/femalepage');
        }
        
        else {
          toast.error("either your login email or password is incorrect");
        }
      })
      .catch((error) => {
        setLoading(false);
        if (error.response) {
          if (error.response.status === 400) {
            toast.error("Incorrect email or password");
          } else if (error.response.status === 401) {
            toast.error("Unauthorized access");
          } else {
            toast.error("Login failed. Please try again.");
          }
        } else if (error.request) {
          toast.error("No response from server. Please check your network connection.");
        } else {
          toast.error("An error occurred. Please try again.");
        }
      });
  }

  return (
    <form className="container w-auto mt-5 min-vh-100" onSubmit={handleSubmit}>
      <Toaster />
      <div className="card">
        <h3 className="card-header mb-3">Sign In</h3>
        <div className="container">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              onChange={(e) => setAuthEmail(e.target.value)}
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              required
              placeholder="your@email.com"
              disabled={loading}
            />
            {emailError && <div className="text-danger">{emailError}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              onChange={(e) => setAuthPassword(e.target.value)}
              type="password"
              className="form-control"
              required
              disabled={loading}
            />
            {passwordError && <div className="text-danger">{passwordError}</div>}
          </div>
          <button type="submit" className="btn mb-3 btn-success" disabled={loading}>
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                Loading...
              </>
            ) : (
              "Login"
            )}
          </button>
          <p>
            Need an account? <Link to='/register' className="text-decoration-underline cursor-pointer text-dark">Sign up</Link>
          </p>
          <p>
            Forgot Password? <Link to='/password' className="text-decoration-underline cursor-pointer text-dark">Reset it</Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignIn;
