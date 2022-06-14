import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../App.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";
import FilterDialog from "../FilterDialog";
import { useAuth } from "../AuthContext";
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
export default function Homepage(props) {
  const { photosArrayState, paramsArrayState, userParamsAndPhothos } =
    useAuth();
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [allRestaurantsArr, setAllrestaurantsArr] = useState([]);
  const [filteredMoods, setFilteredMoods] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  useEffect(() => {
    if (userParamsAndPhothos) {
      uniqueRestaurantFunction();
    }
  }, [userParamsAndPhothos]);
  useEffect(() => {
    console.log(allRestaurantsArr);
  }, [allRestaurantsArr]);
  const uniqueRestaurantFunction = () => {
    let allRestaurants = [];
    for (let userRestaurants of userParamsAndPhothos) {
      for (let restaurant in userRestaurants) {
        allRestaurants.push(userRestaurants[restaurant]);
      }
    }
    setAllrestaurantsArr(allRestaurants);
  };
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
              <FilterPart>
                <FilterAreaBtn
                  onClick={filterDialogShow}
                  style={{ display: "none" }}
                >
                  <AppRegistrationIcon />
                  <FilterTitle>Filters</FilterTitle>
                </FilterAreaBtn>
              </FilterPart>
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
          }}
        >
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
              alignItems: "flex-start",
            }}
          >
            {allRestaurantsArr.length &&
              allRestaurantsArr.map((restaurant, index) => {
                return <div>{restaurant.restName}<img style={{
                  width:'100px',
                  height:'100px'
                }}  src={restaurant.photos.avatar[restaurant.photos.profilePicture]}/></div>;
              })}
            {/* {parametrs
              ? paramsArrayState.map((item, index) => {
                  return (
                    <div
                      style={{
                        border: "1px solid black",
                      }}
                    >
                      {" "}
                      <img
                        style={{
                          height: "150px",
                          width: "200px",
                        }}
                        src={photos[index].avatar[photos[index].profilePicture]}
                        alt=""
                      />
                      <div>name:{item.restName}</div>
                      <div>adress:{item.address}</div>
                      <div>city:{item.city}</div>
                      <div>moods:{item.moods}</div>
                      <div>foodtypes:{item.foodTypes}</div>
                      <div>options:{item.options}</div>
                      <div>price:{item.priceInfo}</div>
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