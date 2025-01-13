import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";

import NavBar from "./NavBar";
import NavBarHome from "./NavBarHome";
import Footer from "./Footer";

import DashBoard from "./ActiveStudent/DashBoard";
import ActiveStudents from "./ActiveStudent/ActiveStudents";

import Register from "./ActiveStudent/Register";

import SignIn from "./ActiveStudent/LoginPageStudent";

import { Toaster } from "react-hot-toast";
import SecondDashBoard from "./ActiveStudent/SecondDashboard";
import OTP from "./ActiveStudent/OTP";
import Forgot from "./ActiveStudent/Forgot";
import EditPass from "./ActiveStudent/EditPass";
import ForgotOTP from "./ActiveStudent/ForgotOTP";
import EditProfile from "./ActiveStudent/EditProfile";
import DeleteOtp from "./ActiveStudent/DeleteOtp";

import RegisterAl from "./Alumni/RegisterAl";
import OTPAL from "./Alumni/OTPregal";
import SignInAl from "./Alumni/SignAl";
import AlDashBoard from "./Alumni/AlDashBoard";
import AlEditProfile from "./Alumni/AlEditProfile";
import AlForgot from "./Alumni/Alforgotpass";
import AlForgotOTP from "./Alumni/AlOTPpassword";
import AlEditPass from "./Alumni/ChangePassword";
import AlDeleteOTP from "./Alumni/DeleteAl";
import AlActiveStudents from "./Alumni/ActiveStudental";

import AlSecondDashBoard from "./Alumni/AlSecondDashBoard";
import AlumniStudents from "./Alumni/AlumiMember";
import AlumniActive from "./ActiveStudent/Alumniactive";
import AlumniDashBoard from "./ActiveStudent/Alumniboard";
import AlumniDashBoardAl from "./Alumni/AlumniIndivPro";

import SiteAdmin from "./Admin/AdminPanel";
import ActiveStudents2 from "./ActiveStudents2";
import StudentsDashboardadmin from "./ActiveStudent/StudentsDashboardadmin";
import HostAlumniboard from "./Home/HostAlumniboard";
import LandingPage from "./Home/LandingPage";
import Upcoming from "./Home/UpcomingEvent";
import Attendance from "./Home/Attendance";
import SearchAttendance from "./Home/SearchAttendance";
import PresSpeech from "./Home/PresidentSpeech";
import Excos from "./Home/Excos";
import RecentEvents from "./Home/RecentEvent";
import UpcomingEvents from "./Home/UploadUpcoming";
import Logo from "./Home/UplaodLogo";
import FemaleStudent from "./FemaleActive/FemaleStudent";
import EditProfilef from "./FemaleActive/EditFemale";
import FemaleStudents from "./FemaleActive/DashboardFemale";
import IndividualFemale from "./FemaleActive/IndividualFemale";
import AdminActivestudents from "./Admin/AdminActivestudent";
import AdminSecondbashboard from "./Admin/AdminSecondboardmale";
import EditPassfemale from "./FemaleActive/Editpassfemale";
import Forgototpf from "./FemaleActive/Editpassotp";
import ForgotOTPf from "./FemaleActive/Editpassverify";
import DeleteOTPf from "./FemaleActive/Otpdelfemale";
import DeleteExco from "./Home/DeleteExconow";
import DeleteExconow from "./Home/DeleteExconow";
import Homee from "./Home/Homee";


// Main Application
function App() {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  );
}

function MainContent() {
  const location = useLocation();
  const hideNavBarRoutes = ["/home", "/login"];
  const shouldHideNavBar = hideNavBarRoutes.includes(location.pathname);

  return (
    <div>
      <>
        {shouldHideNavBar? <NavBarHome/> :  <NavBar />}
        <Routes className="min-vh-100 ">
          <Route path="/home" element={<Homee />} />
          <Route path="/active" element={<ActiveStudents />} />
          <Route path="/alumni" element={<AlumniStudents />} />
          <Route path="/register" element={<Register />} />
          <Route path="/board/" element={<DashBoard />} />
          <Route path="/signactive" element={<SignIn />} />

          <Route path="/otp" element={<OTP />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/sboard/:member_id" element={<SecondDashBoard />} />
          <Route path="/password" element={<Forgot />} />
          <Route path="/updatepassword" element={<EditPass />} />
          <Route path="/forgototp" element={<ForgotOTP />} />
          <Route path="/edit" element={<EditProfile />} />
          <Route path="/otpdel" element={<DeleteOtp />} />

          <Route path="/registeral" element={<RegisterAl />} />
          <Route path="/otpal" element={<OTPAL />} />
          <Route path="/loginal" element={<SignInAl />} />
          <Route path="/boardal" element={<AlDashBoard />} />
          <Route path="/edital" element={<AlEditProfile />} />
          <Route path="/alpassword" element={<AlForgot />} />
          <Route path="/alforgototp" element={<AlForgotOTP />} />
          <Route path="/alupdatepassword" element={<AlEditPass />} />
          <Route path="/alotpdel" element={<AlDeleteOTP />} />
          <Route path="/alactive" element={<AlActiveStudents />} />
          <Route
            path="/sboardal/:member_idal"
            element={<AlSecondDashBoard />}
          />
          <Route path="/alumniactive" element={<AlumniActive />} />
          <Route path="/alum/:member_idalumni" element={<AlumniDashBoard />} />
          <Route
            path="/alumni/:member_idalumnii"
            element={<AlumniDashBoardAl />}
          />
          <Route path="/admin" element={<SiteAdmin />} />
          <Route path="/activeadmin" element={<ActiveStudents2 />} />
          <Route path="/students" element={<StudentsDashboardadmin />} />
          <Route path="/alumniinfo" element={<HostAlumniboard />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/upcoming" element={<Upcoming />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/searchattend" element={<SearchAttendance />} />
          <Route path="/speech" element={<PresSpeech />} />
          <Route path="/exco" element={<Excos />} />
          <Route path="/event" element={<RecentEvents />} />
          <Route path="/upcomings" element={<UpcomingEvents />} />
          <Route path="/logo" element={<Logo />} />
          <Route path="/femalepage" element={<FemaleStudent />} />
          <Route path="/editfemale" element={<EditProfilef />} />
          <Route path="/femaleb" element={<FemaleStudents />} />
          <Route path="/sboardf/:member_id" element={<IndividualFemale />} />
          <Route path="/editpasswordf" element={<EditPassfemale />} />
          <Route path="/passwordfemalenow" element={<Forgototpf />} /> 
          <Route path="/activeadmin" element={<AdminActivestudents />} />
          <Route
            path="/sboardmale/:member_id"
            element={<AdminSecondbashboard />}
          />
          <Route path="/forgototpf" element={<ForgotOTPf />} /> 
          <Route path="/otpdelf" element={<DeleteOTPf />} />
          <Route path="/deletexco" element={<DeleteExconow/>} />   
        </Routes>
        <Footer />
      </>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "white",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </div>
  );
}

export default App;
