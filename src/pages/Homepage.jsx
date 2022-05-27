import React, { useState, useEffect, useCallback, useMemo } from "react";
import '../App.css'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SearchIcon from '@mui/icons-material/Search';
import FilterDialog from "../components/FilterDialog";
import {NavbarPhoto, SearchSection, SearchFilterArea, FilterPart, FilterAreaBtn, FilterTitle, InputPart, SearchInput, IconButton } from "../components/CssFolder/StyleHomePage";




export default function Homepage(props) {
  const [showFilterDialog, setShowFilterDialog] = useState(false);


  const handleClickOpen = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const handleClose = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const filterDialogShow = () => {
    setShowFilterDialog(!showFilterDialog)
  }



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


  return (
    <>
      {/* {" "}
      <AllParams allParams={props.allParams} />
      <div className="homeflex">
        <RestTypes />
        <AllRestInfoContent rests={props.rests} />
      </div> */}
      <div>
        <NavbarPhoto >
          <SearchSection>
           <SearchFilterArea >
              <FilterPart>
                <FilterAreaBtn onClick={filterDialogShow}  style={{display: 'none'}}>
                  <AppRegistrationIcon />
                  <FilterTitle>Filters</FilterTitle>
                </FilterAreaBtn>
              </FilterPart>

              <InputPart>
                <SearchInput type='text' label='foolwidth'  placeholder='Ereven, Armenia'>
                </SearchInput>
                
                <IconButton>
                  <SearchIcon style={{color: '#fff'}} />
                </IconButton>

              </InputPart>
           </SearchFilterArea>
          </SearchSection>
        </NavbarPhoto>

        
        <FilterDialog />

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

