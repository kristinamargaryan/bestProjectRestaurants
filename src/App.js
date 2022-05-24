import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route, Link, BrowserRouter, Nav } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import ForBisness from "./pages/ForBisness";
import SignUp from "./pages/SignUp";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";



function App() {


  return (

      <div className="App">
           <Navbar />
           <Link to='/ForgotPassword'></Link>
                <Routes>
                  <Route path="/" element={<Homepage />} />
                  <Route path="/Signin" element={<SignIn />} />
                  <Route path="/Signup" element={<SignUp />} />
                  <Route path="/Forbusiness" element={<ForBisness />} />
                  <Route path="/BusinessSignin" element={<SignIn type={"Bussiness account"} />} />
                  <Route path="/BusinessSignup" element={<SignUp type={"Create Bussiness account"} />} />
                  <Route path="/About" element={<About />} />
                  <Route path='/ForgotPassword' element={<ForgotPasswordPage />} />
                </Routes>
      </div>

  );
}

export default App;
