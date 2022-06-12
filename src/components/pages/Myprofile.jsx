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
import MyRest from "./MyRest";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

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
      }}
    >
      <div
        style={{
          border: "1px solid black",
        }}
      >
        <div>
          <button onClick={openFormFunction}>+ Restaurant</button>
        </div>
        {userRestParams1 &&
          userRestaurants().map((item, index) => {
            return (
              <div
                style={{
                  border:'1px solid black',
                  cursor: "pointer",
                  padding: "0px 15px",
                }}
                onClick={(ev) => {
                  setOpen(true);
                  setRestaurantEdit(item.restName + item.address);
                  setFileUrl([]);
                  setFileUrlmenu([]);
                  setNowRest(userRestParams1[item.restName + item.address]);
                }}
              >
                <h4>{item.restName} </h4>

                <img
                  style={{
                    width: "60px",
                    height: "40px",
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
        }}
      >
        <div>
          Rest Photos
          {restaurantEdit &&
            userRestPhotos1?.[restaurantEdit]?.avatar?.map((item, index) => {
              return (
                <div>
                  <img
                    onClick={profilePhotoSet}
                    id={index}
                    style={{
                      cursor: "pointer",
                      width: "100px",
                      height: "100px",
                    }}
                    src={item}
                  />
                  <div
                    id={index}
                    onClick={deletePhotoAvatar}
                    style={{
                      margin: "0 auto",
                      cursor: "pointer",
                      width: "5%",
                    }}
                  >
                    x
                  </div>
                </div>
              );
            })}
        </div>
        <div>
          Menu Photos
          {restaurantEdit &&
            userRestPhotos1?.[restaurantEdit]?.menuPhotos?.map(
              (item, index) => {
                return (
                  <div id={index}>
                    <img
                      style={{
                        width: "100px",
                        height: "100px",
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
                      x
                    </div>
                  </div>
                );
              }
            )}
        </div>
        <div>
          {Object.keys(nowRest).length !== 0 ? (
            <Paper
              sx={{
                p: 2,

                maxWidth: 500,
                flexGrow: 1,
                backgroundColor: (theme) =>
                  theme.palette.mode === "dark" ? "#1A2027" : "#fff",
              }}
            >
              <Grid container spacing={2}>
                <Grid item>
                  <ButtonBase sx={{ width: 300, height: 300 }}>
                    <Img
                      alt="complex"
                      src={nowRest.photos.avatar[nowRest.photos.profilePicture]}
                    />
                  </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                  <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        {nowRest.restName}
                      </Typography>
                      <Typography variant="body2" gutterBottom>
                        {nowRest.city + " " + nowRest.address}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {nowRest.moods + ""}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        {nowRest.options + ""}
                      </Typography>
                      <Typography sx={{ cursor: "pointer" }} variant="body2">
                        {nowRest.foodTypes + ""}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Grid item>
                    <Typography variant="subtitle1" component="div">
                      {nowRest.priceInfo}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          ) : null}
        </div>
      </div>
      {open && (
        <div
          style={{
            padding: "5px",
            width: "480px",
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
              name="tel"
              type="tel"
              defaultCountry="AM"
              placeholder="Phone number"
              value={phoneNumber}
              onChange={setPhoneNumber}
            />
            <RestPhotoUploadButton
              title="Restaurant Photos"
              fileUrl={fileUrl}
              newUrls={newUrls}
            />
            <RestPhotoUploadButton
              title="Menu Photos"
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
      )}
      {/* x */}
    </div>
  );
}
