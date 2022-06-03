import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import ForBisness from "./components/pages/ForBisness";
import ContactUs from "./components/pages/ContactUs";
import { useAuth } from "./components/AuthContext";
import Dashboard from "./components/pages/Dashboard";
import UpdateProfile from "./components/pages/UpdateProfile";
import MyRest from "./components/pages/MyRest";
import { Navigate } from "react-router-dom";
import Footer from "./components/Footer";

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
        <Route path="/About" element={<About />} />
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
      {/* <Footer /> */}
    </div>
  );
}

export default App;
