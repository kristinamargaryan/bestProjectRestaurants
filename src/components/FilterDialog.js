import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogTitle from "@mui/material/DialogTitle";
import CachedIcon from "@mui/icons-material/Cached";
import FoodTypeMenu from "../components/FoodTypeMenu";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import WineBarIcon from "@mui/icons-material/WineBar";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GroupsIcon from "@mui/icons-material/Groups";
import CelebrationIcon from "@mui/icons-material/Celebration";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import TableBarIcon from "@mui/icons-material/TableBar";
import EventSeatIcon from "@mui/icons-material/EventSeat";
import TakeoutDiningIcon from "@mui/icons-material/TakeoutDining";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import CellWifiIcon from "@mui/icons-material/CellWifi";
import CreditScoreIcon from "@mui/icons-material/CreditScore";
import DeckIcon from "@mui/icons-material/Deck";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import AccessibleIcon from "@mui/icons-material/Accessible";
import SportsBarIcon from "@mui/icons-material/SportsBar";
import NightlifeIcon from "@mui/icons-material/Nightlife";
import "../App.css";
import useWindowDimensions from "../components/WindowResize";
import { DebounceInput } from "react-debounce-input";

export default function FilterDialog(props) {
  const [inputValue, setInputValue] = useState("");
  let style1 = {
    backgroundColor: "#4C83BB",
    borderRadius: "20px",
  };
  let style2 = {
    backgroundColor: "#F0E6FF",
    borderRadius: "20px",
    color: "#black",
  };

  useEffect(() => {
    props.findRestaurant(inputValue);
  }, [inputValue]);

  const { width } = useWindowDimensions();
  const optionsBar = [
    { tag: <EventSeatIcon />, title: "Reservation" },
    { tag: <TakeoutDiningIcon />, title: "TakeOut" },
    { tag: <CellWifiIcon />, title: "WiFi" },
    { tag: <CreditScoreIcon />, title: "CreditCard" },
    { tag: <DeckIcon />, title: "OutDoor" },
    { tag: <DirectionsCarIcon />, title: "Parking" },
    { tag: <DeliveryDiningIcon />, title: "Delivery" },
    { tag: <AccessibleIcon />, title: "WhellChair" },
    { tag: <SportsBarIcon />, title: "Alcohol" },
    { tag: <NightlifeIcon />, title: "Atmosphere" },
  ];

  const moodsBar = [
    { tag: <WineBarIcon />, title: "Romantic" },
    { tag: <BusinessCenterIcon />, title: "Busines" },
    { tag: <GroupsIcon />, title: "Groups" },
    { tag: <CelebrationIcon />, title: "Party" },
    { tag: <ChildCareIcon />, title: "Children" },
    { tag: <TableBarIcon />, title: "Local" },
  ];

  const prices = ["$", "$$", "$$$", "$$$$", "$$$$$"];

  return (
    <div
      style={{
        display: width <= 850 ? "none" : "block",
        border: "1px solid",
        maxWidth: "280px",
        minWidth: "280px",
        borderRadius: "8px",
        boxShadow: "0 0 15px black",
        maxHeight: "500px",
        position: "sticky",
        top: "70px",
        backgroundColor: "#DBE2EA",
        // backgroundImage: `url('https://img.freepik.com/free-vector/background-seamless-pattern-vector-with-cute-memphis_53876-105506.jpg?t=st=1656012771~exp=1656013371~hmac=806ed7ce014b4530c13d0a7caf6981f4a0d92b13c0710588018cd22f659a5b7b&w=996')`
      }}
    >
      <ul className="filterList">
        <li>
          <h5>Find by restaurnt name</h5>
          <DebounceInput
            style={{
              marginLeft: "5px",
              backgroundColor: "#F0E6FF",
              width: "240px",
              border: "1px solid rgb(59 115 170)",
              padding: "5px 0px",
            }}
            placeholder="Find Restaurant"
            minLength={2}
            debounceTimeout={1000}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </li>
        <li>
          <h5>Find by type of food</h5>
          <FoodTypeMenu
            selectedCousineChange={props.selectedCousineChange}
            style={{ height: "50px", width: "90%" }}
          />
        </li>

        <li className="selectPrice">
          <h5>Select Price</h5>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginRight: "10px",
            }}
          >
            {prices.map((element) => {
              return (
                <button
                  className="priceBtn"
                  style={
                    props.filteredPrices.includes(element) ? style1 : style2
                  }
                  onClick={(ev) => {
                    props.filteredPrices.includes(element)
                      ? props.filterPriceCheckedFunction(element, true)
                      : props.filterPriceCheckedFunction(element, false);
                  }}
                >
                  {element}
                </button>
              );
            })}
          </div>
        </li>

        <li className="moodsBar">
          <h5>Moods</h5>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            {moodsBar.map(function (element) {
              return (
                <button
                  style={
                    props.filteredMoods.includes(element.title)
                      ? style1
                      : style2
                  }
                  onClick={(ev) => {
                    props.filteredMoods.includes(element.title)
                      ? props.filterMoodsCheckedFunction(element.title, true)
                      : props.filterMoodsCheckedFunction(element.title, false);
                  }}
                >
                  {element.tag}
                  <div>{element.title}</div>
                </button>
              );
            })}
          </div>
        </li>

        <li>
          <div className="optionBar">
            <h5>Options</h5>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {optionsBar.map(function (element) {
                return (
                  <button
                    style={
                      props.filteredOptions.includes(element.title)
                        ? style1
                        : style2
                    }
                    onClick={(ev) => {
                      props.filteredOptions.includes(element.title)
                        ? props.filterOptionsCheckedFunction(
                            element.title,
                            true
                          )
                        : props.filterOptionsCheckedFunction(
                            element.title,
                            false
                          );
                    }}
                  >
                    {element.tag}
                    <div>{element.title}</div>
                  </button>
                );
              })}
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
