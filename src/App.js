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
import {
  HomePage_Route,
  About_Route,
  ContactUs_Route,
  Forbusiness_Route,
  ForbusinessMyrest_Route,
  UpdateProfile_Route,
} from "./components/constants/constants";

function App() {
  const { currentUser, userRestParams, userRestPhotos } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={HomePage_Route} element={<Homepage />} />
        {!!currentUser ? (
          <Route path={UpdateProfile_Route} element={<UpdateProfile />} />
        ) : null}
        <Route path={About_Route} element={<About />} />
        <Route path={ContactUs_Route} element={<ContactUs />} />
        <Route
          path={currentUser ? currentUser.email : HomePage_Route}
          element={<Dashboard />}
        />
        <Route path={Forbusiness_Route} element={<ForBisness />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
