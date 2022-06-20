import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../App.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";
import FilterDialog from "../FilterDialog";
import SwipeableTemporaryDrawer from "../DrawersFolter";
import useWindowDimensions from "../WindowResize";
import { useAuth } from "../AuthProvider";
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
  RestDiv,
  HomeContents,
  OwnRest,
  OwnRestImg,
  OwnRestContent,
  RestContTitle,
} from "../CssFolder/StyleHomePage";
import zIndex from "@mui/material/styles/zIndex";
import RestaurantInfoDialog from "../RestaurantInfoDialog";
import { getNativeSelectUtilityClasses } from "@mui/material";
export default function Homepage(props) {
  const { width } = useWindowDimensions();
  const { photosArrayState, paramsArrayState, userParamsAndPhothos } =
    useAuth();
  const [showFilterDialog, setShowFilterDialog] = useState(false);
  const [allRestaurantsArr, setAllrestaurantsArr] = useState([]);
  const [filteredMoods, setFilteredMoods] = useState([]);
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [filteredPrices, setFilteredPrices] = useState([]);
  const [selectedRestaurantInfo, setSelectedRestaurantInfo] = useState(null);
  useEffect(() => {
    if (userParamsAndPhothos) {
      uniqueRestaurantFunction();
    }
  }, [userParamsAndPhothos]);
  useEffect(() => {}, [allRestaurantsArr]);
  function RestaurantOpenOrClose(openTime, closeTime) {
    let [openHour, openMin] = openTime.split(":");
    let [closeHour, closeMin] = closeTime.split(":");
    let realTimeHour = +new Date().getHours();
    let realTimeMin = +new Date().getMinutes();
    openHour = +openHour;
    openMin = +openMin;
    closeHour = +closeHour;
    closeMin = +closeMin;
    if (openHour == closeHour && openMin == closeMin) {
      return true;
    }
    if (openHour > closeHour) {
      closeHour = closeHour + 24;
      if (realTimeHour < closeHour) {
        realTimeHour = realTimeHour + 24;
      }
    }
    if (realTimeHour > openHour && realTimeHour < closeHour) {
      return true;
    } else if (realTimeHour == openHour) {
      if (realTimeMin > openMin) {
        return true;
      } else return false;
    } else if (realTimeHour == closeHour) {
      if (realTimeMin > closeMin) {
        return false;
      } else return true;
    } else return false;
  }
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
	
	const ChangeSelectedRestaurant = () => {
		setSelectedRestaurantInfo(null)
	}

  // https://media.istockphoto.com/vectors/fruit-grunge-design-vector-id166079845?k=20&m=166079845&s=612x612&w=0&h=94AZl_tnBUTUhRJbp5SueEPz0Fe2E-yP0Mczk4m3aR4=
  // https://media.istockphoto.com/vectors/wooden-planks-overlay-texture-for-your-design-shabby-chic-background-vector-id812653412?k=20&m=812653412&s=612x612&w=0&h=2PhVoFQPBRuSxxXl_gSgU126OZKIN2LciS-F6Eo5f2E=
  // https://media.istockphoto.com/vectors/colorful-vegetables-pattern-vector-id538558574?k=20&m=538558574&s=612x612&w=0&h=vMTFGjjR-fN_g1wQEfMvULArjAUjejr_gVcVslYM2tA=
  // https://media.istockphoto.com/vectors/newborn-baby-shower-seamless-pattern-boy-girl-birthday-celebration-vector-id902199106?k=20&m=902199106&s=612x612&w=0&h=yF5OXEiVJbNClc5AN5Z0qwq4BddEjYqzKJLCF8jtUgA=
  // https://media.istockphoto.com/vectors/seafood-various-seamless-pattern-shrimp-mussel-oyster-seashell-herbs-vector-id1272223697?k=20&m=1272223697&s=612x612&w=0&h=lYIfbRKwfufpq3_vOKQchuVI0Hd3uaVTQLYEPE0ZTgI=
  return (
    <>
      <div>
        <div
          style={{
            backgroundImage:
              "url(https://t3.ftcdn.net/jpg/02/75/06/78/360_F_275067819_liRwIrDmv9BZIbwygxYdmfxt0C5FahpB.jpg)",
          }}
        >
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
          <HomeContents>
            <div
              style={{
                display: width <= 850 ? "block" : "none",
                position: "fixed",
                top: "300px",
                left: "0",
                zIndex: 50,
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
            <RestDiv>
              {allRestaurantsArr.length
                ? allRestaurantsArr.map((restaurant, index) => {
                    return (
                      <OwnRest key={index} onClick={() => setSelectedRestaurantInfo(restaurant) }>
                        <OwnRestImg
                          src={
                            restaurant.photos.avatar[
                              restaurant.photos.profilePicture
                            ]
                          }
                        />
                        <OwnRestContent>
                          <RestContTitle>{restaurant.restName}</RestContTitle>
                          <div>
                            {restaurant.openTime &&
                            restaurant.closeTime &&
                            RestaurantOpenOrClose(
                              restaurant.openTime,
                              restaurant.closeTime
                            ) ? (
                              <span
                                style={{ color: "green", fontStyle: "italic" }}
                              >
                                Open Now
                              </span>
                            ) : (
                              <span
                                style={{ color: "red", fontStyle: "italic" }}
                              >
                                Closed
                              </span>
                            )}
                          </div>
                          <div>
                            <span style={{ color: "green" }}>price:</span>{" "}
                            {restaurant.priceInfo}
                          </div>
                          <div>
                            <span style={{ color: "green" }}>cousine:</span>{" "}
                            {restaurant.foodTypes.join(", ")}
                          </div>
                        </OwnRestContent>
                      </OwnRest>
                    );
                  })
                : null}
						  {selectedRestaurantInfo && <RestaurantInfoDialog data={selectedRestaurantInfo} onclose={ChangeSelectedRestaurant} />}
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
            </RestDiv>
          </HomeContents>
        </div>
      </div>
    </>
  );
}
