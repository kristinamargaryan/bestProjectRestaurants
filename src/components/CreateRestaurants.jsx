
// import React, { useState } from "react";
// import PriceInfo from "./Myprofile/PriceInfo";
// import RestCity from "./Myprofile/RestCity";
// import NameAndAddress from '../components/Myprofile/NameAndAddress'
// import Rest_types_options_moods from '../components/Myprofile/RestTypesOptionsMoods'
// import { useAuth } from "./AuthContext";
// import { db } from "../firebase";
// import RestPhotoUploadButton from "./Myprofile/RestPhotosUploadButton";
// import BtnSend from "./Myprofile/BtnSend";
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import "react-phone-number-input/style.css";
// import PhoneInput from "react-phone-number-input";
// import { styled } from "@mui/material/styles";
// import useWindowDimensions from "./WindowResize";

// import "react-alice-carousel/lib/alice-carousel.css";
// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   maxHeight: "100%",
// });



// function CreateRestaurants(props) {
//     const navigate = useNavigate();
//     const [options, setOptions] = useState([]);
//     const [moods, setMoods] = useState([]);
//     const [priceInfo, setPriceInfo] = useState("");
//     const [city, setCity] = useState("");
//     const [address, setAddress] = useState("");
//     const [restName, setRestName] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [fileUrl, setFileUrl] = useState([]);
//     const [fileUrlmenu, setFileUrlmenu] = useState([]);
//     const [open, setOpen] = useState(false);
//     const [restaurantEdit, setRestaurantEdit] = useState("");
//     const [photos, setPhotos] = useState({});
//     const [nowRest, setNowRest] = useState({});
//     const { width } = useWindowDimensions();

//     const {
//         userRestParams1,
//         userRestPhotos1,
//         updater1,
//         updaterAll1,
//         currentUser,
//       } = useAuth();
//     const [foodTypes, setFoodTypes] = useState([]);
    
//     useEffect(() => {
//         if (Object.keys(userRestParams1).length && restaurantEdit) {
//           setPhotos(userRestPhotos1[restaurantEdit]);
//           setFoodTypes(userRestParams1[restaurantEdit].foodTypes);
//           setMoods(userRestParams1[restaurantEdit].moods);
//           setOptions(userRestParams1[restaurantEdit].options);
//           setCity(userRestParams1[restaurantEdit].city);
//           setAddress(userRestParams1[restaurantEdit].address);
//           setRestName(userRestParams1[restaurantEdit].restName);
//           setPriceInfo(userRestParams1[restaurantEdit].priceInfo);
//           setPhoneNumber(userRestParams1[restaurantEdit].phoneNumber);
//         }
//       }, [restaurantEdit, userRestParams1]);
    
//       useEffect(() => {
//         if (userRestParams1 && restaurantEdit) {
//           setNowRest(userRestParams1[restaurantEdit]);
//         }
//       }, [userRestParams1]);
//       const data = {
//         restName: restName,
//         address: address,
//         moods: moods,
//         options: options,
//         foodTypes: foodTypes,
//         priceInfo: priceInfo,
//         city: city,
//         phoneNumber: phoneNumber,
//         id: currentUser.uid,
//       };
    
//       const optionsList = [
//         { value: "Reservation", label: "Reservation" },
//         { value: "Takeout", label: "Takeout" },
//         { value: "Wifi", label: "Wifi" },
//         { value: "Credit Card", label: "Credit Card" },
//         { value: "Outdoor", label: "Outdoor" },
//         { value: "Parking", label: "Parking" },
//         { value: "Delivery", label: "Delivery" },
//         { value: "Whellchair", label: "Whellchair" },
//         { value: "Alcohol", label: "Alcohol" },
//         { value: "Bar atmosphere", label: "Bar atmosphere" },
//       ];
    
//       const moodesList = [
//         { value: "Romantic", label: "Romantic" },
//         { value: "Party", label: "Party" },
//         { value: "Busines", label: "Busines" },
//         { value: "Groups", label: "Groups" },
//         { value: "Children", label: "Children" },
//         { value: "Local", label: "Local" },
//       ];
    
//       const foodTypesList = [
//         { value: "Armenian", label: "Armenian" },
//         { value: "Italian", label: "Italian" },
//         { value: "China", label: "China" },
//         { value: "Fransian", label: "Fransian" },
//       ];
    
//       let componentStatsDefault = () => {
//         setOptions([]);
//         setMoods([]);
//         setPriceInfo("");
//         setCity("");
//         setAddress("");
//         setRestName("");
//         setPhoneNumber("");
//         setRestaurantEdit("");
//         setPhotos({});
//         setNowRest({});
//       };
//       let savechanges = async (e) => {
//         e.preventDefault();
//         delete userRestPhotos1[restaurantEdit];
//         delete userRestParams1[restaurantEdit];
//         db.collection("restaurantsPhoto1")
//           .doc(currentUser.uid)
    
//           .set({
//             ...userRestPhotos1,
//             [restName + address]: {
//               profilePicture: photos.profilePicture || "0",
//               avatar: Array.isArray(photos.avatar)
//                 ? photos.avatar.concat(fileUrl)
//                 : fileUrl,
//               menuPhotos: Array.isArray(photos.menuPhotos)
//                 ? photos.menuPhotos.concat(fileUrlmenu)
//                 : fileUrlmenu,
//             },
//           });
//         await db
//           .collection("restaurants1")
//           .doc(currentUser.uid)
    
//           .set({ ...userRestParams1, [restName + address]: data });
    
//         setOpen(false);
//         setFileUrl([]);
//         setFileUrlmenu([]);
    
//         updaterAll1();
//         updater1();
//         componentStatsDefault();

//       };
//       let profilePhotoSet = (ev) => {
//         db.collection("restaurantsPhoto1")
//           .doc(currentUser.uid)
//           .set({
//             ...userRestPhotos1,
//             [restName + address]: {
//               avatar: photos.avatar,
//               profilePicture: ev.target.id,
//               menuPhotos: photos.menuPhotos,
//             },
//           });
    
//         updater1();
    
//         updaterAll1();
//       };
    
//       let deletePhotoAvatar = (ev) => {
//         ev.preventDefault();
//         db.collection("restaurantsPhoto1")
//           .doc(currentUser.uid)
//           .set({
//             ...userRestPhotos1,
//             [restName + address]: {
//               avatar: photos.avatar.filter((item, index) => {
//                 return index != ev.target.id;
//               }),
//               profilePicture:
//                 ev.target.id > photos.profilePicture
//                   ? photos.profilePicture
//                   : photos.profilePicture == 0
//                   ? photos.profilePicture
//                   : photos.profilePicture - 1,
//               menuPhotos: photos.menuPhotos,
//             },
//           });
//         updater1();
    
//         updaterAll1();
//       };
//       let deletePhotomenu = (ev) => {
//         ev.preventDefault();
//         db.collection("restaurantsPhoto1")
//           .doc(currentUser.uid)
//           .set({
//             ...userRestPhotos1,
//             [restName + address]: {
//               avatar: photos.avatar,
//               profilePicture: photos.profilePicture || "0",
//               menuPhotos: photos.menuPhotos.filter((item, index) => {
//                 return index != ev.target.id;
//               }),
//             },
//           });
//         updater1();
    
//         updaterAll1();
//       };
//       let newUrls = (urls) => {
//         setFileUrl(urls);
//       };
//       let newUrlsmenu = (urls) => {
//         setFileUrlmenu(urls);
//       };
//       let changePriceInfo = (ev) => {
//         setPriceInfo(ev.target.value);
//       };
//       const handleChangeOptions = (e) => {
//         const { value, checked } = e.target;
//         if (checked) {
//           setOptions((prev) => [...prev, value]);
//         } else {
//           setOptions((prev) => prev.filter((x) => x !== value));
//         }
//       };
//       const handleChangeMoods = (e) => {
//         const { value, checked } = e.target;
//         if (checked) {
//           setMoods((prev) => [...prev, value]);
//         } else {
//           setMoods((prev) => prev.filter((x) => x !== value));
//         }
//       };
//       const handleChangeFoodTypes = (e) => {
//         const { value, checked } = e.target;
    
//         if (checked && !foodTypes.includes(value)) {
//           setFoodTypes((prev) => [...prev, value]);
//         } else {
//           setFoodTypes((prev) => prev.filter((x) => x !== value));
//         }
//       };
    
//       const handleChangeCity = (event) => {
//         setCity(event.target.value);
//       };
//       const handleChangeAddress = (event) => {
//         setAddress(event.target.value);
//       };
//       const handleChangeRestName = (event) => {
//         setRestName(event.target.value);
//       };
//       const openFormFunction = () => {
//         setOpen(true);
//         componentStatsDefault();
//       };
//       let userRestaurants = () => {
//         let myRestaurants = [];
//         for (let key in userRestParams1) {
//           userRestParams1[key].photos = userRestPhotos1[key];
//           myRestaurants.push(userRestParams1[key]);
//         }
    
//         return myRestaurants;
//     };
    

//   return (
//     <>
//       <h2 style={{ textAlign: "center" }}>Edit Restaurant</h2>
//       <div
//         style={{
//           width: "300px",
//           border: "1px solid #000",
//           borderRadius: "5px",
//           display: "flex",
//           flexDirection: "column",
//           padding: "15px",
//           marginRight: "10px",
//           // backgroundColor: 'rgba(0,0,0,0.5)'
//         }}
//       >
//         <div>
//           <RestCity city={city} handleChangeCity={handleChangeCity} />
//           <NameAndAddress
//             forLabel="Restaurant Name"
//             info={restName}
//             handleChange={handleChangeRestName}
//           />
//           <NameAndAddress
//             forLabel="Restaurant Address"
//             info={address}
//             handleChange={handleChangeAddress}
//           />
//           <div
//             style={{
//               display: "flex",
//               justifyContent: "center",
//               alignItems: "center",
//               flexDirection: "column",
//             }}
//           >
//             <PhoneInput
//               style={{
//                 width: "100%",
//                 marginBottom: "10px",
//                 textAlign: "center",
//               }}
//               name="tel"
//               type="tel"
//               defaultCountry="AM"
//               placeholder="Phone number"
//               value={phoneNumber}
//               onChange={setPhoneNumber}
//             />

//             <RestPhotoUploadButton
//               title="Restaurant Photos"
//               fileUrl={fileUrl}
//               newUrls={newUrls}
//             />
//             <RestPhotoUploadButton
//               title="Menu Photos"
//               fileUrlmenu={fileUrlmenu}
//               newUrlsmenu={newUrlsmenu}
//             />
//           </div>
//         </div>
//         <PriceInfo priceInfo={priceInfo} changePriceInfo={changePriceInfo} />
//         <Rest_types_options_moods
//           list={moodesList}
//           handleChange={handleChangeMoods}
//           type={moods}
//           name={"Moods"}
//         />

//         <Rest_types_options_moods
//           list={optionsList}
//           handleChange={handleChangeOptions}
//           type={options}
//           name={"Options"}
//         />
//         <Rest_types_options_moods
//           list={foodTypesList}
//           handleChange={handleChangeFoodTypes}
//           type={foodTypes}
//           name={"Foodtypes"}
//         />

//         <BtnSend data={data} savechanges={savechanges} />
//       </div>
//     </>
//   );
// }

// export default CreateRestaurants;
