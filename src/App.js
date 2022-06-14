import "./App.css";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import ForBisness from "./components/pages/ForBisness";
import ContactUs from "./components/pages/ContactUs";
import { useAuth } from "./components/AuthProvider";
import UpdateProfile from "./components/pages/UpdateProfile";
import MyRest from "./components/pages/MyRest";
import { Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import {
  HOMEPAGE_ROUTE,
  ABOUT_ROUTE,
  CONTACTUS_ROUTE,
  FORBUSINES_ROUTE,
  FORBUSINESMYREST_ROUTE,
  UPDATEPROFILE_ROUTE,
  SIGNIN_ROUTE,
  SIGNUP_ROUTE,
  FORGOTPASSWORD_ROUTE
} from '../src/constants/constants'
import SignIn from '../src/components/pages/SignInPage'
import SignUp from '../src/components/pages/SignUpPage'
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";

function App() {
  const { currentUser, userRestParams, userRestPhotos } = useAuth();

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path={HOMEPAGE_ROUTE} element={<Homepage />} />
        {!currentUser ? (
          <>
            
            <Route path={SIGNIN_ROUTE} element={<SignIn />} />
            <Route path={SIGNUP_ROUTE} element={<SignUp />} />
            <Route path={FORGOTPASSWORD_ROUTE} element={<ForgotPasswordPage />} />
          </>
        ) : null}
        <Route path={UPDATEPROFILE_ROUTE} element={<UpdateProfile />} />
        <Route path={ABOUT_ROUTE} element={<About />} />
        <Route path={CONTACTUS_ROUTE} element={<ContactUs />} />
        <Route path={FORBUSINES_ROUTE} element={<ForBisness />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
