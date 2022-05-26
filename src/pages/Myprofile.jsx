import { addDoc, collection } from "firebase/firestore/lite";
import React, { useState } from "react";
import MyCountry from "../components/Myprofile/MyCountry";
import PriceInfo from "../components/Myprofile/PriceInfo";

import RestCity from "../components/Myprofile/RestCity";
import RestCityAddress from "../components/Myprofile/RestCityAddress";

import Rest_types_options_moods from "../components/Myprofile/RestTypesOptionsMoods";

export default function Myprofile(props) {
  const [options, setOptions] = useState([]);
  const [moods, setMoods] = useState([]);
  const [foodTypes, setFoodTypes] = useState([]);
  const [priceInfo, setPriceInfo] = useState("$$$");
  const [city, setCity] = React.useState("");
  const [address, setAddress] = React.useState("");
  const data = {
    adss: address,
    moodes: moods,
    options:options,
    foodTypes: foodTypes,
    priceInfo:priceInfo,
    city:city,

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
    { value: "english", label: "English" },
    { value: "hindi", label: "Hindi" },
    { value: "spanish", label: "Spanish" },
    { value: "arabic", label: "Arabic" },
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
    

    let savechanges = async () => {
      await props.db.collection("restaurants").doc("newdataaaa").set(data);
    };
  return (
    <>
      
      {/* <MyCountry /> */}
      <div
        style={{
          display: "flex",
        }}
      >
       
        <RestCity city={city} handleChangeCity={handleChangeCity} />
        <RestCityAddress address={address} handleChangeAddress={handleChangeAddress}/>
      </div>

      <PriceInfo changePriceInfo={changePriceInfo} />
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
     <button onClick={savechanges}>sendd</button>
    </>
  );
}
