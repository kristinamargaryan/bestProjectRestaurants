import React, { useState } from "react";

import PriceInfo from "../Myprofile/PriceInfo";
import RestCity from "../Myprofile/RestCity";
import NameAndAddress from "../Myprofile/NameAndAddress";
import Rest_types_options_moods from "../Myprofile/RestTypesOptionsMoods";
import { useAuth } from "../AuthContext";
import { db } from "../../firebase";
import RestPhotoUploadButton from "../Myprofile/RestPhotosUploadButton";
import BtnSend from "../Myprofile/BtnSend";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function Myprofile(props) {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [moods, setMoods] = useState([]);
  const [priceInfo, setPriceInfo] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [restName, setRestName] = useState("");
  let [phoneNumber, setPhoneNumber] = useState("");
  const [fileUrl, setFileUrl] = useState([]);
  const [fileUrlmenu, setFileUrlmenu] = useState([]);
  const {
    userRestParams,
    userRestPhotos,
    userRestPhotosmenu,
    updater,
    updaterAll,
    profilePicture,
    currentUser,
  } = useAuth();
  const [foodTypes, setFoodTypes] = useState([]);
  console.log(phoneNumber);
  useEffect(() => {
    if (Object.keys(userRestParams).length) {
      setFoodTypes(userRestParams.foodTypes);
      setMoods(userRestParams.moods);
      setOptions(userRestParams.options);
      setCity(userRestParams.city);
      setAddress(userRestParams.address);
      setRestName(userRestParams.restName);
      setPriceInfo(userRestParams.priceInfo);
      setPhoneNumber(userRestParams.phoneNumber);
    }
  }, [userRestParams]);

  const data = {
    restName: restName,
    address: address,
    moods: moods,
    options: options,
    foodTypes: foodTypes,
    priceInfo: priceInfo,
    city: city,
    phoneNumber: phoneNumber,
    id: currentUser.uid,
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

  let savechanges = async (e) => {
    e.preventDefault();
    db.collection("restaurantsPhoto")
      .doc(currentUser.uid)
      .set({
        profilePicture: profilePicture,
        avatar: Array.isArray(userRestPhotos)
          ? userRestPhotos.concat(fileUrl)
          : fileUrl,
        menuPhotos: Array.isArray(userRestPhotosmenu)
          ? userRestPhotosmenu.concat(fileUrlmenu)
          : fileUrlmenu,
      });
    await db.collection("restaurants").doc(currentUser.uid).set(data);
    updater();
    updaterAll();

    navigate("MyRest");
  };
  let newUrls = (urls) => {
    setFileUrl(urls);
  };
  let newUrlsmenu = (urls) => {
    console.log("aaa");
    setFileUrlmenu(urls);
  };
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

    if (checked && !foodTypes.includes(value)) {
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
      style={
        {
          // backgroundImage:'url(../.././restPhotos/333.jpg)',
          // backgroundSize:'cover'
        }
      }
    >
      <div
        style={{
          padding: "5px",
          width: "480px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            padding: "5px",
            margin: "0 auto",
            display: "flex",
          }}
        >
          <div style={{}}>
            <RestCity city={city} handleChangeCity={handleChangeCity} />
          </div>
          <div>
            <NameAndAddress
              forLabel="Restaurant Name"
              info={restName}
              handleChange={handleChangeRestName}
            />
            <NameAndAddress
              forLabel="Restaurant Address"
              info={address}
              handleChange={handleChangeAddress}
            />
          </div>
        </div>
        <div
          style={{
            padding: "5px",
            width: "480px",
            margin: "0 auto",
            display: "flex",
          }}
        >
          <PhoneInput
            style={{
              width: "35%",
              margin: "10px",
            }}
            defaultCountry="AM"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={setPhoneNumber}
          />
          <RestPhotoUploadButton fileUrl={fileUrl} newUrls={newUrls} />
          <RestPhotoUploadButton
            fileUrlmenu={fileUrlmenu}
            newUrlsmenu={newUrlsmenu}
          />
        </div>
        <PriceInfo priceInfo={priceInfo} changePriceInfo={changePriceInfo} />
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

        <BtnSend data={data} savechanges={savechanges} />
      </div>
    </div>
  );
}
