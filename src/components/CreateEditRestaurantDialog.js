import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import RestCity from './Myprofile/RestCity';
import NameAndAddress from './Myprofile/NameAndAddress'
import PhoneInput from 'react-phone-number-input';
import TimeOpenClose from './Myprofile/TimeOpenClose';
import RestPhotoUploadButton from './Myprofile/RestPhotosUploadButton';
import PriceInfo from './Myprofile/PriceInfo';
import Rest_types_options_moods from './Myprofile/RestTypesOptionsMoods'
import BtnSend from './Myprofile/BtnSend';
import {
    optionsList,
    moodesList,
    foodTypesList
} from './MoodsFoodsOptionsList'

export default function CreateEditRestaurantDialog(props) {
    const { data } = props;

    const [open, setOpen] = useState(false);
    const [restcity, setRestCity] = useState(!!data.city ? data.city : '');
    const [restaurantName, setRestaurantName] = useState(!!data.restName ? data.restName : '');
    const [restaurantAddress, setRestaurantAddress] = useState(!!data.address ? data.address : '')
    const [phoneNumber, setPhoneNumber] = useState(!!data.phoneNumber ? data.phoneNumber : '');
    const [openTime, setOpenTime] = useState(!!data.openTime ? data.openTime : '');
    const [closeTime, setCloseTime] = useState(!!data.closeTime ? data.closeTime : '');
    const [time24, setTime24] = useState(!!data.time24 ? data.time24 : '');
    const [priceInfo, setPriceInfo] = useState(!!data.priceInfo ? data.priceInfo : data.priceInfo);
    const [moods, setMoods] = useState(!!data.moods ? data.moods : []);
    const [options, setOptions] = useState(!!data.options ? data.options : []);
    const [foodTypes, setFoodTypes] = useState(!!data.foodTypes ? data.foodTypes : []);
    const [fileUrl, setFileUrl] = useState([]);
    const [fileUrlmenu, setFileUrlmenu] = useState([]);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const sendData = {
        restcity,
        restaurantName,
        restaurantAddress,
        phoneNumber,
        openTime,
        closeTime,
        time24,
        priceInfo,
        moods,
        options,
        foodTypes,
        fileUrl,
        fileUrlmenu
    }



    // const savechanges = async (e) => {
    //     e.preventDefault();
    //     delete userRestPhotos1[restaurantEdit];
    //     delete userRestParams1[restaurantEdit];
    //     db.collection("restaurantsPhoto1")
    //         .doc(currentUser.uid)

    //         .set({
    //             ...userRestPhotos1,
    //             [restName + address]: {
    //                 profilePicture: photos.profilePicture || "0",
    //                 avatar: Array.isArray(photos.avatar)
    //                     ? photos.avatar.concat(fileUrl)
    //                     : fileUrl,
    //                 menuPhotos: Array.isArray(photos.menuPhotos)
    //                     ? photos.menuPhotos.concat(fileUrlmenu)
    //                     : fileUrlmenu,
    //             },
    //         });
    //     await db
    //         .collection("restaurants1")
    //         .doc(currentUser.uid)

    //         .set({ ...userRestParams1, [restName + address]: data });

    //     setOpen(false);
    //     setFileUrl([]);
    //     setFileUrlmenu([]);

    //     updaterAll1();
    //     updater1();
    //     componentStatsDefault();

    //     // navigate("MyRest");
    // };


    const handleChangeCity = (event) => {
        setRestCity(event.target.value);
    };
    const handleChangeRestName = (event) => {
        setRestaurantName(event.target.value);
    };
    const handleChangeAddress = (event) => {
        setRestaurantAddress(event.target.value);
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

    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open
                onClose={props.onclick}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {`Edit Restaurant ${restaurantName}`}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText style={{ marginTop: '10px' }}>
                        <RestCity city={restcity} handleChangeCity={handleChangeCity} />

                        <div>
                            <div>Restauarnt Name</div>
                            <NameAndAddress
                                forLabel="Restaurant Name"
                                info={restaurantName}
                                handleChange={handleChangeRestName}
                            />
                            <div>Restaurant Address</div>
                            <NameAndAddress
                                forLabel="Restaurant Address"
                                info={restaurantAddress}
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
                            // onChange={setPhoneNumber}
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

                        <BtnSend
                            data={sendData}
                        // savechanges={savechanges}
                        />
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={props.onclick} >
                        Disagree
                    </Button>
                    <Button autoFocus onClick={props.onclick}>
                        Agree
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}