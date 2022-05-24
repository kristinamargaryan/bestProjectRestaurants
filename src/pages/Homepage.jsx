import React, { useState, useEffect, useCallback } from "react";
import '../App.css'
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SearchIcon from '@mui/icons-material/Search';
import FilterDialog from "../components/FilterDialog";



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

  const [data, setData] = useState([]);

  const f = useCallback(async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
    );
    let user = await response.json();
    setData(user.meals);
  }, []);

  useEffect(() => {
    f();
  }, [f]);


  return (
    <>
      {/* {" "}
      <AllParams allParams={props.allParams} />
      <div className="homeflex">
        <RestTypes />
        <AllRestInfoContent rests={props.rests} />
      </div> */}
      <div>
        <div className="navbar-photo">
          <div className="search-section">
           <div className="search-filter-area" >
              <div className='filter-part'><button onClick={filterDialogShow}  className='filter-area'><AppRegistrationIcon /><div className="filters-div">Filters</div></button></div>
              <div className="input-part"><input type='text' label='foolwidth' className="search-input" placeholder='Ereven, Armenia'></input><button className='icon-booton'><SearchIcon className="searchIcon" /></button></div>
           </div>
           {showFilterDialog && <FilterDialog onClick={handleClickOpen} onClose={handleClose} open={showFilterDialog} />}
          </div>
        </div>

        <ul style={{display: 'flex', justifyContent: 'space-evenly', listStyle: 'none', flexWrap: 'wrap'}}>
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
        </ul>
      </div>
      
    </>
  );
}

