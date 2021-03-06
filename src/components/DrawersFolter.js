import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import FilterDialog from "./FilterDialog";
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
import { useAuth } from './AuthProvider';
import { useState, useEffect } from "react";
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import { DebounceInput } from 'react-debounce-input';


export default function SwipeableTemporaryDrawer(props) {
  const [state, setState] = React.useState({
    left: false,
  });
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [parametrs, setParametrs] = useState();
  const [photos, setPhotos] = useState();
  const [filteredMoods, setFilteredMoods] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [inputValue, setInputValue] = useState('')

  const { photosArrayState, paramsArrayState, userParamsAndPhothos } =
    useAuth();

  let style1 = {
    backgroundColor: "#4C83BB",
  };
  let style2 = {
    backgroundColor: "#4C83BB",
  };

  useEffect(() => {
    if (paramsArrayState && photosArrayState) {
      setParametrs(paramsArrayState);
      setPhotos(photosArrayState);
      // console.log(userParamsAndPhothos, photosArrayState, paramsArrayState);
    }
  }, [paramsArrayState, photosArrayState, userParamsAndPhothos]);

  useEffect(() => {
    props.findRestaurant(inputValue)
  }, [inputValue])


  const handleClickOpen = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const handleClose = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const filterDialogShow = () => {
    setShowFilterDialog(!showFilterDialog);
  };

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

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        padding: "10px",
      }}
      role="presentation"
    >
      <List>
        <ul>
          <li>
            <h5 style={{ marginBottom: "15px", fontSize: "20px" }}>
              Find by restaurnt name
            </h5>
            <DebounceInput
						style={{width: '240px'}}
						placeholder='Find Restaurant'
						minLength={2}
						debounceTimeout={1000}
						onChange={(e) => setInputValue(e.target.value)}
					/>
          </li>
          <li>
            <h5 style={{ marginBottom: "15px", fontSize: "20px" }}>
              Find by type of food
            </h5>
            <FoodTypeMenu  selectedCousineChange={props.selectedCousineChange} style={{ height: "50px", width: "90%" }} />
          </li>

          <li className="selectPrice">
            <h5
              style={{
                marginBottom: "15px",
                fontSize: "20px",
                marginTop: "15px",
              }}
            >
              Select Price
            </h5>
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              {prices.map((element) => {
                return (
                  <button
                    style={
                      props.filteredPrices.includes(element)
                        ? style1
                        : { fontSize: "17px" }
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
        </ul>
      </List>
      <Divider />
      <List>
        <div>
          <ul className="filterList">
            <li className="moodsBar">
              <h5
                style={{
                  marginBottom: "15px",
                  fontSize: "20px",
                  marginTop: "15px",
                }}
              >
                Moods
              </h5>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {moodsBar.map(function (element) {
                  return (
                    <button
                      style={
                        props.filteredMoods.includes(element.title) ? style1 : null
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
                <h5
                  style={{
                    marginBottom: "15px",
                    fontSize: "20px",
                    marginTop: "15px",
                  }}
                >
                  Options
                </h5>
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {optionsBar.map(function (element) {
                    return (
                      <button
                        style={
                          props.filteredOptions.includes(element.title)
                            ? style1
                            : null
                        }
                        onClick={(ev) => {
                          props.filteredOptions.includes(element.title)
                            ? props.filterOptionsCheckedFunction(element.title, true)
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
        <button
          style={{
            width: "100%",
            height: "30px",
            margin: "15px 0",
            fontSize: "22px",
            color: "#fff",
            backgroundColor: "green",
            paddingBottom: "5px",
            cursor: "pointer",
          }}
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          Save Changes
        </button>
      </List>
    </Box>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><ManageSearchIcon style={{fontSize: '50px', color: 'green'}} /></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
