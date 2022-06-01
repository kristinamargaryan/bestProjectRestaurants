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
  const {
    userRestParams,
    userRestPhotos,
    updater,
    updaterAll,
    photosArrayState,
    paramsArrayState,
    profilePicture,
  } = useAuth();
  let [parametrs, setParametrs] = useState();
  let [photos, setPhotos] = useState();
  const [showFilterDialog, setShowFilterDialog] = useState(false);

  const handleClickOpen = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const handleClose = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const filterDialogShow = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  // const [data, setData] = useState([]);

  // const f = useCallback(async () => {
  //   const response = await fetch(
  //     "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
  //   );
  //   let user = await response.json();
  //   setData(user.meals);
  // }, []);

  // useEffect(() => {
  //   f();
  // }, [f]);

  useEffect(() => {
    if (paramsArrayState && photosArrayState) {
      setParametrs(paramsArrayState);
      setPhotos(photosArrayState);
    }
  }, [paramsArrayState]);

  return (
    <>
      {/* {" "}
      <AllParams allParams={props.allParams} />
      <div className="homeflex">
        <RestTypes />
        <AllRestInfoContent rests={props.rests} />
      </div> */}
      <div>
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
          <FilterDialog />{" "}
          {parametrs
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
                        height: "200px",
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
            : null}
        </div>

        {/* <ul style={{display: 'flex', justifyContent: 'space-evenly', listStyle: 'none', flexWrap: 'wrap'}}>
              {data.map((item) => {
          return  (
            <li key={item.idMeal}>
              <img src={item.strMealThumb} style={{width: '200px', height: '200px'}}/>
              <h5>name: {item.strMeal}</h5>
              <h5>category: {item.strCategory}</h5>
              <h5>area: {item.strArea}</h5>
            </li>
          ) ;
        })}
        </ul> */}
      </div>
    </>
  );
}
