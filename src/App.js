import logo from "./logo.svg";
import "./App.css";
import RestInfoContent from "./components/RestInfoContent";
import Navbar from "./components/Navbar";
import { Button, Checkbox } from "@mui/material";
import Checkboxes from "./components/Checkboxes";
import AllParams from "./components/AllParams";
import AllRestInfoContent from "./components/AllRestInfoContent";
import RestTypes from "./components/RestTypes";
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import ForBisness from "./pages/ForBisness";
import SignUp from "./pages/SignUp";


function App() {
  let allParams = [
    "private Room",
    "Non-Smoking Seats",
    "Free Wi-Fi",
    "Online Booking",
    "Party Menu",
    "All You Can Drink Plan",
    "Parking",
    "Birthday Privilege",
    "Kids Menu",
    "Seat Open Terrace Seat",
    "View / Night View",
    "Garden View",
    "Pet OK",
    "English Menu",
    "English Speaking Staff",
    "Vegan",
    "Vegetarian",
    "Halal",
    "Antiallergic food",
    "Full",
  ];
  let kovkas = {
    restName: "Kovkas Pandok",
    reserve: "#reserve",
    price: "$",
    adress: "Yerevan,lvovyan 3",
    family: "#family",
    params: [
      "Pet OK",
      "English Menu",
      "English Speaking Staff",
      "Vegan",
      "Vegetarian",
      "Halal",
      "Antiallergic food",
    ],
  };
  let yerevan = {
    restName: "Harsnaqar",
    reserve: "#reserve",
    price: "$$$",
    adress: "Yerevan,sayat-nova 44",
    params: [
      "Pet OK",
      "English Menu",
      "English Speaking Staff",
      "Vegan",
      "Vegetarian",
      "Halal",
      "Antiallergic food",
    ],
  };
  let kenac = {
    restName: "Genac Vale",
    price: "$$",
    adress: "Kirovakan,sayat-nova 44",
    family: "#family",
    params: [
      "Pet OK",
      "English Menu",
      "English Speaking Staff",
      "Vegan",
      "Vegetarian",
      "Halal",
      "Antiallergic food",
    ],
  };
  let rests = [
    kovkas,
    yerevan,
    kenac,
    kovkas,
    yerevan,
    kenac,
    kovkas,
    yerevan,
    kenac,
    kovkas,
    yerevan,
    kenac,
  ];

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={<Homepage allParams={allParams} rests={rests} />}
          />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/Signup" element={<SignUp />} />
          <Route path="/Forbusiness" element={<ForBisness />} />
          <Route
            path="/BusinessSignin"
            element={<SignIn type={"Bussiness account"} />}
          />
          <Route
            path="/BusinessSignup"
            element={<SignUp type={"Create Bussiness account"} />}
          />
          <Route path="/About" element={<About />} />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;
