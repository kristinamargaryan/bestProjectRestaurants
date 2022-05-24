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




function App() {
  const [userHave, setUserHave] = useState(false)
  return (
      <div className="App">
           <Navbar />
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  {userHave ? (
                    <>
                  <Route path="/About" element={<About />} />
                  <Route path='ContactUs' element={<ContactUs />}/></>
                  ): (
                    <>
                  <Route path="/Signin" element={<SignIn />} />
                  <Route path="/Signup" element={<SignUp />} /></>
                  )}
                  <Route path="/Forbusiness" element={<ForBisness />} />
                  <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />
                </Routes>
      </div>

  );
}

export default App;
