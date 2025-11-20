import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className=" py-5 border-top bg-dark text-white  fixed" >
      <div className="container">
        <p className="mb-1 d-flex justify-content-center gap-4">
         
         <Link to="https://web.facebook.com/profile.php?id=100079060510768"><i className="bi bi-facebook fs-3 text-success"></i></Link> 
          <Link to="https://x.com/UnionKsu96946"><i className="bi bi-twitter-x fs-3 text-success fw-bold"></i></Link>
          <Link to="https://t.me/+rLdyoOB36BExYjRk"><i className="bi bi-telegram fs-3 text-success"></i></Link> 
        </p> 
        <p className="text-center ">Copyright © 2024 NSU-KSU EXCOS All right reserved.</p> 
      </div>
    </footer>
  );
}

export default Footer;
