import { addDoc, collection } from "firebase/firestore/lite";
import React, { useState } from "react";
import MyCountry from "../components/Myprofile/MyCountry";
import PriceInfo from "../components/Myprofile/PriceInfo";
import RestCity from "../components/Myprofile/RestCity";
import NameAndAddress from "../components/Myprofile/NameAndAddress";
import Rest_types_options_moods from "../components/Myprofile/RestTypesOptionsMoods";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../firebase";
import RestPhotoUploadButton from "../components/Myprofile/RestPhotosUploadButton";
import BtnSend from "../components/Myprofile/BtnSend";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import Porcnakan from "../components/Myprofile/Porcnakan";
export default function Myprofile(props) {
  const [options, setOptions] = useState([]);
  const [moods, setMoods] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [priceInfo, setPriceInfo] = useState("$$$");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [restName, setRestName] = useState("");
  const [datas, setDatas] = useState([]);
  const [fileUrl, setFileUrl] = useState([]);
  const data = {
    restName: restName,
    address: address,
    moods: moods,
    options: options,
    foodTypes: foodTypes,
    priceInfo: priceInfo,
    city: city,
  };

  const { currentUser } = useAuth();
  let savechanges = async () => {
    await db.collection("restaurants").doc(currentUser.uid).set(data);
  };

  const optionsList = [
    { value: "Reservation", label: "Reservation" },
    { value: "Takeout", label: "Takeout" },
    { value: "Wifi", label: "Wifi" },
    { value: "Credit Card", label: "Credit Card" },
    { value: "Outdoor", label: "Outdoor" },
    { value: "Parking", label: "Parking" },
    { value: "Delivery", label: "Delivery" },
    { value: "Whellchair", label: "Whellchair" },
    { value: "Alcohol", label: "Alcohol" },
    { value: "Bar atmosphere", label: "Bar atmosphere" },
  ];
  const moodesList = [
    { value: "Romantic", label: "Romantic" },
    { value: "Party", label: "Party" },
    { value: "Busines", label: "Busines" },
    { value: "Groups", label: "Groups" },
    { value: "Children", label: "Children" },
    { value: "Local", label: "Local" },
  ];

  const foodTypesList = [
    { value: "Armenian", label: "Armenian" },
    { value: "Italian", label: "Italian" },
    { value: "China", label: "China" },
    { value: "Fransian", label: "Fransian" },
  ];
  let changePriceInfo = (ev) => {
    setPriceInfo(ev.target.value);
  };
  const handleChangeOptions = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setOptions((prev) => [...prev, value]);
    } else {
      setOptions((prev) => prev.filter((x) => x !== value));
    }
  };
  const handleChangeMoods = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setMoods((prev) => [...prev, value]);
    } else {
      setMoods((prev) => prev.filter((x) => x !== value));
    }
  };
  const handleChangeFoodTypes = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setFoodTypes((prev) => [...prev, value]);
    } else {
      setFoodTypes((prev) => prev.filter((x) => x !== value));
    }
  };
  const handleChangeCity = (event) => {
    setCity(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const handleChangeRestName = (event) => {
    setRestName(event.target.value);
  };

  return (
    <div
      style={{
        width: "480px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        <div>
          <NameAndAddress
            forLabel="Restaurant Name"
            info={restName}
            handleChange={handleChangeRestName}
          />

          <NameAndAddress
            forLabel="address"
            info={address}
            handleChange={handleChangeAddress}
          />
        </div>
        <div>
          <RestCity city={city} handleChangeCity={handleChangeCity} />
          <RestPhotoUploadButton />
        </div>
      </div>

      <Rest_types_options_moods
        list={moodesList}
        handleChange={handleChangeMoods}
        type={moods}
        name={"moods"}
      />

      <Rest_types_options_moods
        list={optionsList}
        handleChange={handleChangeOptions}
        type={options}
        name={"options"}
      />
      <Rest_types_options_moods
        list={foodTypesList}
        handleChange={handleChangeFoodTypes}
        type={foodTypes}
        name={"foodtypes"}
      />
      <div
        style={{
          display: "flex",
        }}
      >
        <PriceInfo changePriceInfo={changePriceInfo} />
        <Link to="MyRest">
          <BtnSend data={data} savechanges={savechanges} />
        </Link>
      </div>
    </div>
  );
}
