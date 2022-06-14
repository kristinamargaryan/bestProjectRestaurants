import React, { useState } from "react";
import PriceInfo from "../Myprofile/PriceInfo";
import RestCity from "../Myprofile/RestCity";
import NameAndAddress from "../Myprofile/NameAndAddress";
import Rest_types_options_moods from "../Myprofile/RestTypesOptionsMoods";
import { useAuth } from "../AuthProvider";
import { db } from "../../firebase";
import RestPhotoUploadButton from "../Myprofile/RestPhotosUploadButton";
import BtnSend from "../Myprofile/BtnSend";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import MyRest from "./MyRest";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";
import useWindowDimensions from "../WindowResize";
import CreateRestaurants from "../CreateRestaurants";
import DeleteIcon from '@mui/icons-material/Delete';

import "react-alice-carousel/lib/alice-carousel.css";
const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
export default function Myprofile(props) {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [moods, setMoods] = useState([]);
  const [priceInfo, setPriceInfo] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [restName, setRestName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fileUrl, setFileUrl] = useState([]);
  const [fileUrlmenu, setFileUrlmenu] = useState([]);
  const [open, setOpen] = useState(false);
  const [restaurantEdit, setRestaurantEdit] = useState("");
  const [photos, setPhotos] = useState({});
  const [nowRest, setNowRest] = useState({});
  const { width } = useWindowDimensions();

  const {
    userRestParams1,
    userRestPhotos1,
    updater1,
    updaterAll1,
    currentUser,
  } = useAuth();
  const [foodTypes, setFoodTypes] = useState([]);

  useEffect(() => {
    if (Object.keys(userRestParams1).length && restaurantEdit) {
      setPhotos(userRestPhotos1[restaurantEdit]);
      setFoodTypes(userRestParams1[restaurantEdit].foodTypes);
      setMoods(userRestParams1[restaurantEdit].moods);
      setOptions(userRestParams1[restaurantEdit].options);
      setCity(userRestParams1[restaurantEdit].city);
      setAddress(userRestParams1[restaurantEdit].address);
      setRestName(userRestParams1[restaurantEdit].restName);
      setPriceInfo(userRestParams1[restaurantEdit].priceInfo);
      setPhoneNumber(userRestParams1[restaurantEdit].phoneNumber);
    }
  }, [restaurantEdit, userRestParams1]);

  useEffect(() => {
    if (userRestParams1 && restaurantEdit) {
      setNowRest(userRestParams1[restaurantEdit]);
    }
  }, [userRestParams1]);
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

  let componentStatsDefault = () => {
    setOptions([]);
    setMoods([]);
    setPriceInfo("");
    setCity("");
    setAddress("");
    setRestName("");
    setPhoneNumber("");
    setRestaurantEdit("");
    setPhotos({});
    setNowRest({});
  };
  let savechanges = async (e) => {
    e.preventDefault();
    delete userRestPhotos1[restaurantEdit];
    delete userRestParams1[restaurantEdit];
    db.collection("restaurantsPhoto1")
      .doc(currentUser.uid)

      .set({
        ...userRestPhotos1,
        [restName + address]: {
          profilePicture: photos.profilePicture || "0",
          avatar: Array.isArray(photos.avatar)
            ? photos.avatar.concat(fileUrl)
            : fileUrl,
          menuPhotos: Array.isArray(photos.menuPhotos)
            ? photos.menuPhotos.concat(fileUrlmenu)
            : fileUrlmenu,
        },
      });
    await db
      .collection("restaurants1")
      .doc(currentUser.uid)

      .set({ ...userRestParams1, [restName + address]: data });

    setOpen(false);
    setFileUrl([]);
    setFileUrlmenu([]);

    updaterAll1();
    updater1();
    componentStatsDefault();

    // navigate("MyRest");
  };
  let profilePhotoSet = (ev) => {
    db.collection("restaurantsPhoto1")
      .doc(currentUser.uid)
      .set({
        ...userRestPhotos1,
        [restName + address]: {
          avatar: photos.avatar,
          profilePicture: ev.target.id,
          menuPhotos: photos.menuPhotos,
        },
      });

    updater1();

    updaterAll1();
  };

  let deletePhotoAvatar = (ev) => {
    ev.preventDefault();
    db.collection("restaurantsPhoto1")
      .doc(currentUser.uid)
      .set({
        ...userRestPhotos1,
        [restName + address]: {
          avatar: photos.avatar.filter((item, index) => {
            return index != ev.target.id;
          }),
          profilePicture:
            ev.target.id > photos.profilePicture
              ? photos.profilePicture
              : photos.profilePicture == 0
              ? photos.profilePicture
              : photos.profilePicture - 1,
          menuPhotos: photos.menuPhotos,
        },
      });
    updater1();

    updaterAll1();
  };
  let deletePhotomenu = (ev) => {
    ev.preventDefault();
    db.collection("restaurantsPhoto1")
      .doc(currentUser.uid)
      .set({
        ...userRestPhotos1,
        [restName + address]: {
          avatar: photos.avatar,
          profilePicture: photos.profilePicture || "0",
          menuPhotos: photos.menuPhotos.filter((item, index) => {
            return index != ev.target.id;
          }),
        },
      });
    updater1();

    updaterAll1();
  };
  let newUrls = (urls) => {
    setFileUrl(urls);
  };
  let newUrlsmenu = (urls) => {
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
  const openFormFunction = () => {
    setOpen(true);
    componentStatsDefault();
  };
  let userRestaurants = () => {
    let myRestaurants = [];
    for (let key in userRestParams1) {
      userRestParams1[key].photos = userRestPhotos1[key];
      myRestaurants.push(userRestParams1[key]);
    }

    return myRestaurants;
  };
  return (
    <div
      style={{
        display: "flex",
        height: "auto",

        justifyContent: "center",
        backgroundImage:
          "url(http://www.transparenttextures.com/patterns/food.png)",
      }}
    >
      <div style={{ marginRight: "10px" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{
              backgroundColor: "#C11900",
              border: "1px solid #2cccc9",
              color: "#fff",
              padding: "12px",
              fontSize: "20px",
              margin: "10px",
              cursor: "pointer",
            }}
            onClick={openFormFunction}
          >
            Create Restaurant
          </button>
        </div>
        {userRestParams1 &&
          userRestaurants().map((item, index) => {
            return (
              <div
                style={{
                  cursor: "pointer",
                  height: "auto",
                  width: "290px",
                  border: "1px solid #000",
                  padding: "10px",
                  borderRadius: "5px",
                  marginBottom: "10px",
                }}
                onClick={(ev) => {
                  setOpen(true);
                  setRestaurantEdit(item.restName + item.address);
                  setFileUrl([]);
                  setFileUrlmenu([]);
                  setNowRest(userRestParams1[item.restName + item.address]);
                }}
              >
                <h4
                  style={{
                    textAlign: "center",
                    fontSize: "22px",
                    margin: "0",
                    padding: "5px 0",
                    color: "goldenrod",
                  }}
                >
                  {item.restName}{" "}
                </h4>

                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    maxHeight: "200px",
                    minHeight: "200px",
                  }}
                  src={item.photos.avatar[+item.photos.profilePicture]}
                />
              </div>
            );
          })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ display: "flex" }}>
          <div>
            {open && (
              <CreateRestaurants />
            )}
          </div>
          <div style={{ display: "flex", marginTop: "22px", width: "100%" }}>
            <div style={{ marginRight: "10px" }}>
              {restaurantEdit &&
                userRestPhotos1?.[restaurantEdit]?.avatar?.map(
                  (item, index) => {
                    return (
                      <>
                        {!index ? <h2 style={{ textAlign: "center" }}>Restaurant Photos</h2> : null}
                        <div style={{ marginRight: "10px" }}>
                          <img
                            onClick={profilePhotoSet}
                            id={index}
                            style={{
                              cursor: "pointer",
                              width: "400px",
                              height: "300px",
                            }}
                            src={item}
                          />
                          <div
                            id={index}
                            onClick={deletePhotoAvatar}
                            style={{
                              margin: "0 auto",
                              cursor: "pointer",
                              width: "5px",
                            }}
                          >
                            <DeleteIcon style={{color: 'red'}} />
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
            </div>
            <div>
              {restaurantEdit &&
                userRestPhotos1?.[restaurantEdit]?.menuPhotos?.map(
                  (item, index) => {
                    return (
                      <>
                        {!index ? <h2 style={{ textAlign: "center" }}>Menu Photos</h2> : null}
                        <div id={index}>
                          <img
                            style={{
                              width: "400px",
                              height: "300px",
                            }}
                            src={item}
                          />
                          <div
                            id={index}
                            onClick={deletePhotomenu}
                            style={{
                              margin: "0 auto",
                              cursor: "pointer",
                              width: "5%",
                            }}
                          >
                            <DeleteIcon style={{color: 'red'}} />
                          </div>
                        </div>
                      </>
                    );
                  }
                )}
            </div>
          </div>
        </div>
      </div>
      {/* x */}
    </div>
  );
}
