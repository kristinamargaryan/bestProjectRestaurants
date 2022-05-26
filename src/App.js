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
import AuthProvaider, { useAuth } from "./contexts/AuthContext";
import Dashboard from "./pages/Dashboard";
import UpdateProfile from "./pages/UpdateProfile";






function App() {
  const {currentUser} = useAuth()
  console.log(currentUser)
  
  return (
    <AuthProvaider>
        <div className="App">
            <Navbar />
                  <Routes>
                    <Route path="/" element={<Homepage />} />
                    {!!currentUser ? (
                    <>
                    <Route path="/About" element={<About data={currentUser}/>} />
                    <Route path='/ContactUs' element={<ContactUs />}/>
                    <Route path='/UpdateProfile' element={<UpdateProfile />} />
                    </>
                    ): (
                      <>
                    <Route path="/Signin" element={<SignIn />} />
                    <Route path="/Signup" element={<SignUp />} />
                    <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />
                    </>
                    )}
                    <Route path='/Profile' element={<Dashboard />} />
                    <Route path="/Forbusiness" element={<ForBisness />} />
                  </Routes>
        </div>
      </AuthProvaider>

  );
}

export default App;
