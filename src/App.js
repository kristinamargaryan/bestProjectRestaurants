import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import ForBisness from "./pages/ForBisness";
import ContactUs from "./pages/ContactUs";
import { useState } from "react";
import { useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";
import Myprofile from "./pages/Myprofile";
import { db } from "./firebase";
import MyRest from "./pages/MyRest";
import { Navigate } from "react-router-dom";
function App() {
  const { currentUser, userRestParams, userRestPhotos } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        {!!currentUser ? (
          <Route path="/UpdateProfile" element={<UpdateProfile />} />
        ) : null}
        <Route path="/About" element={<About data={currentUser} />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route
          path={currentUser ? currentUser.email : "/"}
          element={<Dashboard />}
        />
        <Route path="/Forbusiness" element={<ForBisness />} />
        <Route
          path="Forbusiness/Myrest"
          element={<MyRest currentUser={currentUser} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
