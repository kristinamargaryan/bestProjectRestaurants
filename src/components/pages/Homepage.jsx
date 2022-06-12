import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../App.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";
import FilterDialog from "../FilterDialog";
import { useAuth } from "../AuthContext";
import useWindowDimensions from "../WindowResize";

import {
  NavbarPhoto,
  SearchSection,
  SearchFilterArea,
  FilterPart,
  FilterAreaBtn,
  FilterTitle,
  InputPart,
  SearchInput,
  IconButton,
} from "../CssFolder/StyleHomePage";
import SwipeableTemporaryDrawer from "../DrawersFolter";

export default function Homepage(props) {
  const { photosArrayState, paramsArrayState, userParamsAndPhothos } =
    useAuth();
  const { width } = useWindowDimensions();
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [parametrs, setParametrs] = useState();
  const [photos, setPhotos] = useState();
  const [filteredMoods, setFilteredMoods] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  useEffect(() => {
    if (paramsArrayState && photosArrayState) {
      setParametrs(paramsArrayState);
      setPhotos(photosArrayState);
      console.log(userParamsAndPhothos);
    }
  }, [paramsArrayState, photosArrayState, userParamsAndPhothos]);
  const filterPriceCheckedFunction = (title, bul) => {
    bul
      ? setFilteredPrices(
          filteredPrices.filter((item, index) => {
            return index != filteredPrices.indexOf(title);
          })
        )
      : setFilteredPrices([...filteredPrices, title]);
  };
  const filterOptionsCheckedFunction = (title, bul) => {
    bul
      ? setFilteredOptions(
          filteredOptions.filter((item, index) => {
            return index != filteredOptions.indexOf(title);
          })
        )
      : setFilteredOptions([...filteredOptions, title]);
  };

  const filterMoodsCheckedFunction = (title, bul) => {
    bul
      ? setFilteredMoods(
          filteredMoods.filter((item, index) => {
            return index != filteredMoods.indexOf(title);
          })
        )
      : setFilteredMoods([...filteredMoods, title]);
  };

  const handleClickOpen = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const handleClose = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const filterDialogShow = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  return (
    <>
      <div>
        {/* <div>{userParamsAndPhothos && userParamsAndPhothos[4].restName}</div> */}
        <NavbarPhoto>
          <SearchSection>
            <SearchFilterArea>
              <InputPart>
                <SearchInput
                  type="text"
                  label="foolwidth"
                  placeholder="Ereven, Armenia"
                ></SearchInput>

                <IconButton>
                  <SearchIcon style={{ color: "#fff" }} />
                </IconButton>
              </InputPart>
            </SearchFilterArea>
          </SearchSection>
        </NavbarPhoto>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "10px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: width <= 850 ? "block" : "none",
              position: "fixed",
              top: "500px",
              left: "0",
            }}
          >
            <SwipeableTemporaryDrawer />
          </div>
          <FilterDialog
            filteredPrices={filteredPrices}
            filterPriceCheckedFunction={filterPriceCheckedFunction}
            filteredOptions={filteredOptions}
            filterOptionsCheckedFunction={filterOptionsCheckedFunction}
            filteredMoods={filteredMoods}
            filterMoodsCheckedFunction={filterMoodsCheckedFunction}
          />{" "}
          <div
            style={{
              display: "flex",

              flexDirection: "column",
              marginLeft: "20px",
            }}
          >
            {/* {parametrs
              ? paramsArrayState.map((item, index) => {
                  return (
                    <div
                      style={{
                        border: "1px solid black",
                        width: "500px",
                        display: "flex",
                      }}
                    >
                      {" "}
                      <img
                        style={{
                          width: "50%",
                          height: "100%",
                        }}
                        src={photos[index].avatar[photos[index].profilePicture]}
                        alt=""
                      />
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-evenly",
                        }}
                      >
                        <div>name:{item.restName}</div>
                        <div>
                          adress:{item.city} {item.address}
                        </div>
                        {/* <div>city:{item.city}</div> */}
                        {/* <div>moods:{item.moods}</div> */}
                        <div style={{ flexWrap: "wrap" }}>
                          foodtypes:
                          {item.foodTypes.length > 1
                            ? item.foodTypes.join(", ")
                            : item.foodTypes}
                        </div>
                        {/* <div>options:{item.options}</div> */}
                        <div>price:{item.priceInfo}</div>
                      </div>
                    </div>
                  );
                })
              : null} */}
          </div>
        </div>
      </div>
    </>
  );
}
