import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import ForBisness from "./pages/ForBisness";
import SignUp from "./pages/SignUp";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";
import Myprofile from "./pages/Myprofile";
import { db } from "./firebase";
import MyRest from "./pages/MyRest";

function App() {
  const { currentUser, userRestParams, userRestPhotos } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {!!currentUser ? (
          <>
            <Route path="/About" element={<About data={currentUser} />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/UpdateProfile" element={<UpdateProfile />} />
          </>
        ) : (
          <>
            <Route path="/Signin" element={<SignIn />} />
            <Route path="/Signup" element={<SignUp />} />
            <Route path="/ForgotPassword" element={<ForgotPasswordPage />} />
          </>
        )}
        <Route path="/Profile" element={<Dashboard />} />
        <Route
          path="/Forbusiness"
          element={<ForBisness currentUser={currentUser} />}
        />
        <Route
          path="Forbusiness/Myrest"
          element={<MyRest currentUser={currentUser} />}
        />
      </Routes>
    </div>
  );
}

export default App;
