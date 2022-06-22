import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import RestCity from "./Myprofile/RestCity";
import NameAndAddress from "./Myprofile/NameAndAddress";
import PhoneInput from "react-phone-number-input";
import TimeOpenClose from "./Myprofile/TimeOpenClose";
import RestPhotoUploadButton from "./Myprofile/RestPhotosUploadButton";
import PriceInfo from "./Myprofile/PriceInfo";
import Rest_types_options_moods from "./Myprofile/RestTypesOptionsMoods";
import BtnSend from "./Myprofile/BtnSend";
import { FORBUSINES_ROUTE } from "../constants/constants";
import { db } from "../firebase";
import { useAuth } from "./AuthProvider";
import { useNavigate } from "react-router-dom";
import {
  optionsList,
  moodesList,
  foodTypesList,
} from "./MoodsFoodsOptionsList";

export default function CreateEditRestaurantDialog(props) {
  const {
    userRestParams1,
    userRestPhotos1,
    updater1,
    updaterAll1,
    currentUser,
  } = useAuth();
  const { data } = props;
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [restcity, setRestCity] = useState(
    !!data.restcity ? data.restcity : "Yerevan"
  );
  const [restName, setRestName] = useState(
    !!data.restName ? data.restName : ""
  );
  const [address, setAddress] = useState(!!data.address ? data.address : "");
  const [phoneNumber, setPhoneNumber] = useState(
    !!data.phoneNumber ? data.phoneNumber : ""
  );
  const [openTime, setOpenTime] = useState(
    !!data.openTime ? data.openTime : "08:00"
  );
  const [closeTime, setCloseTime] = useState(
    !!data.closeTime ? data.closeTime : "00:00"
  );
  const [time24, setTime24] = useState(!!data.time24 ? data.time24 : "");
  const [priceInfo, setPriceInfo] = useState(
    !!data.priceInfo ? data.priceInfo : '$$$'
  );
  const [moods, setMoods] = useState(!!data.moods ? data.moods : []);
  const [options, setOptions] = useState(!!data.options ? data.options : []);
  const [foodTypes, setFoodTypes] = useState(
    !!data.foodTypes ? data.foodTypes : []
  );
  const [fileUrl, setFileUrl] = useState([]);
  const [fileUrlmenu, setFileUrlmenu] = useState([]);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const sendData = {
    restcity,
    restName,
    address,
    phoneNumber,
    openTime,
    closeTime,
    time24,
    priceInfo,
    moods,
    options,
    foodTypes,
    fileUrl,
    fileUrlmenu,
  };

  const savechanges = async (e) => {
    e.preventDefault();
    if(Object.keys(props.data).length !== 0){
      let rs = JSON.parse(sessionStorage.getItem("restinfo"));
      delete userRestPhotos1[rs.restName + rs.address];
    delete userRestParams1[rs.restName + rs.address];
    }
    

    
    
    
    db.collection("restaurantsPhoto1")
      .doc(currentUser.uid)

      .set({
        ...userRestPhotos1,
        [restName + address]: {
          profilePicture:
            Object.keys(data).length === 0 ? "0" : data.photos.profilePicture,
          avatar:
            Object.keys(data).length === 0
              ? fileUrl
              : Array.isArray(data.photos.avatar)
              ? data.photos.avatar.concat(fileUrl)
              : fileUrl,
          menuPhotos:
            Object.keys(data).length === 0
              ? fileUrlmenu
              : Array.isArray(data.photos.menuPhotos)
              ? data.photos.menuPhotos.concat(fileUrlmenu)
              : fileUrlmenu,
        },
      });
    await db
      .collection("restaurants1")
      .doc(currentUser.uid)

      .set({ ...userRestParams1, [restName + address]: sendData });
   
    setFileUrl([]);
    setFileUrlmenu([]);
    
    updaterAll1();
    updater1();
    props.onclick();
    

    navigate(FORBUSINES_ROUTE);
  };

  const handleChangeCity = (event) => {
    setRestCity(event.target.value);
  };
  const handleChangeRestName = (event) => {
    setRestName(event.target.value);
  };
  const handleChangeAddress = (event) => {
    setAddress(event.target.value);
  };
  const openTimeFunc = (ev) => {
    setOpenTime(ev.target.value);
  };
  const closeTimeFunc = (ev) => {
    setCloseTime(ev.target.value);
  };

  const changePriceInfo = (ev) => {
    setPriceInfo(ev.target.value);
  };

  const changeTime24 = (ev) => {
    setTime24(!time24);
    if (!time24) {
      setOpenTime("00:00");
      setCloseTime("00:00");
    } else {
      setOpenTime("09:00");
      setCloseTime("22:00");
    }
  };

  const newUrls = (urls) => {
    setFileUrl(urls);
  };

  const newUrlsmenu = (urls) => {
    setFileUrlmenu(urls);
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
  let saveData = (e) => {
    savechanges(e);
    props.onclick();
  };
  let enableSendButton = () => {
    for (let key in sendData) {
      if (sendData[key] && sendData[key].length === 0) {
        
        return true;
      }
    }
    return false;
  };
  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open
        onClose={props.onclick}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {`Edit Restaurant ${restName}`}
        </DialogTitle>
        <DialogContent>
          <DialogContentText style={{ marginTop: "10px" }}>
            <RestCity city={restcity} handleChangeCity={handleChangeCity} />

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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <PhoneInput
                style={{
                  width: "100%",
                  marginBottom: "10px",
                  textAlign: "center",
                }}
                name="tel"
                type="tel"
                defaultCountry="AM"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={setPhoneNumber}
              />
              <TimeOpenClose
                openTime={openTime}
                closeTime={closeTime}
                time24={time24}
                openTimeFunc={openTimeFunc}
                closeTimeFunc={closeTimeFunc}
                changeTime24={changeTime24}
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
            <PriceInfo
              priceInfo={priceInfo}
              changePriceInfo={changePriceInfo}
            />

            <Rest_types_options_moods
              list={moodesList}
              handleChange={handleChangeMoods}
              type={moods}
              name={"Moods"}
            />

            <Rest_types_options_moods
              list={optionsList}
              handleChange={handleChangeOptions}
              type={options}
              name={"Options"}
            />
            <Rest_types_options_moods
              list={foodTypesList}
              handleChange={handleChangeFoodTypes}
              type={foodTypes}
              name={"Foodtypes"}
            />

            {/* <BtnSend data={sendData} savechanges={savechanges} /> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={props.onclick}>Cancel</Button>
          <Button disabled={enableSendButton()} onClick={saveData}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
