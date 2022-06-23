import React, { useState, useEffect, useCallback, useMemo } from "react";
import "../../App.css";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import SearchIcon from "@mui/icons-material/Search";
import FilterDialog from "../FilterDialog";
import SwipeableTemporaryDrawer from "../DrawersFolter";
import useWindowDimensions from "../WindowResize";
import { useAuth } from "../AuthProvider";
import { debounce } from "lodash";
import ShowAllOrFilteredRestaurants from "../ShowAllOrFilteredRestaurants";
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
  MainPage,
} from "../CssFolder/StyleHomePage";
import zIndex from "@mui/material/styles/zIndex";
import RestaurantInfoDialog from "../RestaurantInfoDialog";
import { getNativeSelectUtilityClasses } from "@mui/material";
import { parse } from "uuid";
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
  const [selectedCousine, setSelectedCousine] = useState([]);
  const [findRestaurantValue, setFindRestaurantValue] = useState("");
  const [filterRestaurants, setFilterRestaurants] = useState(allRestaurantsArr);
  const [findRest, setFindRest] = useState([]);
  const [changeCityValue, setChangeCityValue] = useState("");
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
      if (realTimeHour < closeHour) {
        realTimeHour = realTimeHour + 24;
      }
      closeHour = closeHour + 24;
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
    setFilterRestaurants(allRestaurants);
    setAllrestaurantsArr(allRestaurants);
  };

  useEffect(() => {
	  if (
		  !changeCityValue.length &&
		  selectedCousine.length &&
		  findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  selectedCousine.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (
					  j.foodTypes.includes(e) &&
					  j.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())
				  ) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result);
	  } else if (
		  !changeCityValue.length &&
		  selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  selectedCousine.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.foodTypes.includes(e)) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result);
	  } else if (
		  !changeCityValue.length &&
		  !selectedCousine.length &&
		  findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach((e) => {
			  if (
				  e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())
			  ) {
				  return result.push(e);
			  }
			  return result;
		  });
		  setFilterRestaurants(result);
	  } else if (
		  !changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  setFilterRestaurants(allRestaurantsArr);
	  } else if (
		  changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length) {
		  let result = [];
		  allRestaurantsArr.forEach(e => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  })
		  setFilterRestaurants(result)
	  } else if (
		  !changeCityValue.length &&
		  selectedCousine.length &&
		  findRestaurantValue.length &&
		  filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  selectedCousine.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (
					  j.foodTypes.includes(e) &&
					  j.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())
				  ) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result);
		  result = [];
		  filteredPrices.forEach((e) =>
			  filterRestaurants.forEach((j) => {
				  if (j.priceInfo === e && !result.includes(j)) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result);
	  } else if (
		  !changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  filteredPrices.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.priceInfo === e) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result);
	  } else if (
		  !changeCityValue.length &&
		  selectedCousine.length &&
		  findRestaurantValue.length &&
		  filteredPrices.length &&
		  filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  filteredMoods.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.moods.includes(e)) {
					  return result.push(e);
				  }
				  return result;
			  })
		  );

		  setFilterRestaurants(result);

		  result = [];
		  selectedCousine.forEach((e) =>
			  filterRestaurants.forEach((j) => {
				  if (j.foodTypes.includes(e) && !result.includes(j)) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result);
		  result = [];
		  filteredPrices.forEach((e) =>
			  filterRestaurants.forEach((j) => {
				  if (j.priceInfo === e) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result);
	  } else if (
		  !changeCityValue.length &&
		  selectedCousine.length &&
		  !findRestaurantValue.length &&
		  filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  selectedCousine.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.foodTypes.includes(e)) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );

      
		  let newRestaurants = []
		  filteredPrices.forEach((e) =>
			  result.forEach((j) => {
				  if (j.priceInfo === e) {
					  return newRestaurants.push(j);
				  }
				  return newRestaurants;
			  })
		  );
		  setFilterRestaurants(newRestaurants);
	  } else if (
		  !changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  filteredMoods.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.moods.includes(e) && !result.includes(JSON.stringify(j))) {
					  return result.push(JSON.stringify(j));
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result.map((e) => JSON.parse(e)));
	  } else if (
		  !changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  filteredMoods.length &&
		  filteredOptions.length
	  ) {
		  let result = [];
		  filteredMoods.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.moods.includes(e) && !result.includes(JSON.stringify(j))) {
					  return result.push(JSON.stringify(j));
				  }
				  return result;
			  })
		  );

		  filteredOptions.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.options.includes(e) && !result.includes(JSON.stringify(j))) {
					  return result.push(JSON.stringify(j));
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result.map((e) => JSON.parse(e)));
	  } else if (
		  !changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  filteredOptions.length
	  ) {
		  let result = [];
		  filteredOptions.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.options.includes(e) && !result.includes(JSON.stringify(j))) {
					  result.push(JSON.stringify(j));
					  return result;
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result.map((e) => JSON.parse(e)));
	  } else if (
		  !changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  filteredPrices.length &&
		  filteredMoods.length &&
		  filteredOptions.length
	  ) {
		  let result = [];
		  filteredMoods.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.moods.includes(e) && !result.includes(JSON.stringify(j))) {
					  return result.push(JSON.stringify(j));
				  }
				  return result;
			  })
		  );

		  filteredOptions.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.options.includes(e) && !result.includes(JSON.stringify(j))) {
					  result.push(JSON.stringify(j));
					  return result;
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result.map((e) => JSON.parse(e)));
		  result = [];
		  filteredPrices.forEach((e) => {
			  filterRestaurants.forEach((j) => {
				  if (j.priceInfo === e) {
					  return result.push(j);
				  }
				  return result;
			  });
		  });
		  setFilterRestaurants(result);
	  } else if (
		  !changeCityValue.length &&
		  selectedCousine.length &&
		  !findRestaurantValue.length &&
		  filteredPrices.length &&
		  filteredMoods.length &&
		  filteredOptions.length
	  ) {
		  let result = [];
		  filteredMoods.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.moods.includes(e) && !result.includes(JSON.stringify(j))) {
					  result.push(JSON.stringify(j));
					  return result;
				  }
				  return result;
			  })
		  );

		  filteredOptions.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.options.includes(e) && !result.includes(JSON.stringify(j))) {
					  result.push(JSON.stringify(j));
					  return result;
				  }
				  return result;
			  })
		  );

		  setFilterRestaurants(result.map((e) => JSON.parse(e)));
		  result = [];
		  filteredPrices.forEach((e) => {
			  filterRestaurants.forEach((j) => {
				  if (j.priceInfo === e) {
					  return result.push(j);
				  }
				  return result;
			  });
		  });

		  setFilterRestaurants(result);

		  result = [];
		  selectedCousine.forEach((e) => {
			  filterRestaurants.forEach((j) => {
				  if (j.foodTypes.includes(e)) {
					  return result.push(j);
				  }
				  return result;
			  });
		  });
		  setFilterRestaurants(result);
	  } else if (
		  !changeCityValue.length &&
		  selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  filteredMoods.length &&
		  filteredOptions.length
	  ) {
		  let result = [];
		  filteredMoods.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.moods.includes(e) && !result.includes(JSON.stringify(j))) {
					  return result.push(JSON.stringify(j));
				  }
				  return result;
			  })
		  );

		  filteredOptions.forEach((e) =>
			  allRestaurantsArr.forEach((j) => {
				  if (j.options.includes(e) && !result.includes(JSON.stringify(j))) {
					  return result.push(JSON.stringify(j));
				  }
				  return result;
			  })
		  );

		  setFilterRestaurants(result.map((e) => JSON.parse(e)));

		  result = [];
		  selectedCousine.forEach((e) =>
			  filterRestaurants.forEach((j) => {
				  if (j.foodTypes.includes(e)) {
					  return result.push(j);
				  }
				  return result;
			  })
		  );
		  setFilterRestaurants(result);
	  } else if (
		  changeCityValue.length &&
		  selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach((e) => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  });
		  setFilterRestaurants(result);
		  result = [];
		  selectedCousine.forEach(e => filterRestaurants.forEach((j) => {
			  if (j.foodTypes.includes(e)) {
				  return result.push(j)
			  }
			  return result
		  }))

		  setFilterRestaurants(result)
	  } else if (
		  changeCityValue.length &&
		  !selectedCousine.length &&
		  findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach(e => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  })

		  let newRestouants = []
		  result.forEach(e => {
			  if (e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())) {
				  return newRestouants.push(e)
			  }
			  return newRestouants;
		  })
		  setFilterRestaurants(newRestouants)
	  } else if (
		  changeCityValue.length &&
		  selectedCousine.length &&
		  findRestaurantValue.length &&
		  !filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach(e => {
			  if (e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result;
		  })

		  let newAddress = []
		  result.forEach(e => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return newAddress.push(e)
			  }
			  return newAddress
		  })
		  let newCousine = []
		  selectedCousine.forEach(e => newAddress.forEach((j) => {
			  if (j.foodTypes.includes(e)) {
				  return newCousine.push(j)
			  }
			  return newCousine
		  }))
		  setFilterRestaurants(result)
	  } else if (
		  changeCityValue.length &&
		  selectedCousine.length &&
		  findRestaurantValue.length &&
		  filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach(e => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  })

		  let newCousine = []
		  selectedCousine.forEach(e => result.forEach((j) => {
			  if (j.foodTypes.includes(e)) {
				  return newCousine.push(j)
			  }
			  return newCousine
		  }))


		  let newPrice = []
		  filteredPrices.forEach(e => newCousine.forEach((j) => {
			  if (j.priceInfo === e) {
				  return newPrice.push(j)
			  }
			  return newPrice
		  }))

		  let newRestName = []
		  newPrice.forEach(e => {
			  if (e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())) {
				  return newRestName.push(e)
			  }
			  return newRestName
		  })
		  setFilterRestaurants(newRestName)
	  } else if (
		  changeCityValue.length &&
		  selectedCousine.length &&
		  !findRestaurantValue.length &&
		  filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach((e) => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  });

		  let newRestaurants = [];

		  selectedCousine.forEach(e => result.forEach((j) => {
			  if (j.foodTypes.includes(e)) {
				  return newRestaurants.push(j)
			  }
			  return newRestaurants
		  }))

		  let newPrices = [];
		  filteredPrices.forEach(e => newRestaurants.forEach((j) => {
			  if (j.priceInfo === e) {
				  return newPrices.push(j)
			  }
			  return newPrices
		  }))

		  setFilterRestaurants(newPrices)
	  } else if (
		  changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  filteredPrices.length &&
		  !filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach((e) => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  });

		  let newPrices = [];
		  filteredPrices.forEach(e => result.forEach((j) => {
			  if (j.priceInfo === e) {
				  return newPrices.push(j)
			  }
			  return newPrices
		  }))

		  setFilterRestaurants(newPrices)
	  } else if (
		  changeCityValue.length &&
		  selectedCousine.length &&
		  findRestaurantValue.length &&
		  filteredPrices.length &&
		  filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach((e) => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  });

		  let newMoods = [];
		  filteredMoods.forEach(e => result.forEach((j) => {
			  if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				  return newMoods.push(JSON.stringify(j))
			  }
			  return newMoods
		  }))

		  let newCousine = [];
		  newMoods = newMoods.map(e => JSON.parse(e))
		  selectedCousine.forEach(e => newMoods.forEach((j) => {
			  if (j.foodTypes.includes(e)) {
				  return newCousine.push(j)
			  }
			  return newCousine
		  }))

		  let newPrice = [];
		  filteredPrices.forEach(e => newCousine.forEach((j) => {
			  if (j.priceInfo === e) {
				  return newPrice.push(j)
			  }
			  return newPrice
		  }))

		  let newRestName = []
		  newPrice.forEach(e => {
			  if (e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())) {
				  return newRestName.push(e)
			  }
			  return newRestName
		  })

		  setFilterRestaurants(newRestName)
	  } else if (
		  changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  !filteredPrices.length &&
		  filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach((e) => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  });
		
		  let newMoods = [];
		  filteredMoods.forEach(e => result.forEach((j) => {
			  if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				  return newMoods.push(JSON.stringify(j))
			  }
			  return newMoods
		  }))
		  setFilterRestaurants(newMoods.map(e => JSON.parse(e)))
	  } else if (
		  changeCityValue.length &&
		  !selectedCousine.length &&
		  !findRestaurantValue.length &&
		  filteredPrices.length &&
		  filteredMoods.length &&
		  !filteredOptions.length
	  ) {
		  let result = [];
		  allRestaurantsArr.forEach((e) => {
			  if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				  return result.push(e)
			  }
			  return result
		  });
		
		  let newMoods = [];
		  filteredMoods.forEach(e => result.forEach((j) => {
			  if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				  return newMoods.push(JSON.stringify(j))
			  }
			  return newMoods
		  }))
		  newMoods = newMoods.map(e => JSON.parse(e))
		  let newPrice = [];
		  filteredPrices.forEach(e => newMoods.forEach((j) => {
			  if (j.priceInfo === e) {
				  return newPrice.push(j)
			  }
			  return newPrice
		  }))
		  setFilterRestaurants(newPrice)
	  } else if (
		  changeCityValue.length &&
		  selectedCousine.length &&
		  !findRestaurantValue.length &&
		  filteredPrices.length &&
		  filteredMoods.length &&
		  !filteredOptions.length
	  ) { 
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		
		let newMoods = [];
		filteredMoods.forEach(e => result.forEach((j) => {
			if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				return newMoods.push(JSON.stringify(j))
			}
			return newMoods
		}))
		  newMoods = newMoods.map(e => JSON.parse(e))
		let newPrice = [];
		filteredPrices.forEach(e => newMoods.forEach((j) => {
			if (j.priceInfo === e) {
				return newPrice.push(j)
			}
			return newPrice
		}))
		  
		let newCousine = [];
		selectedCousine.forEach(e => newPrice.forEach((j) => {
			if (j.foodTypes.includes(e)) {
				return newCousine.push(j)
			}
			return newCousine
		}))
		  setFilterRestaurants(newCousine)
	  } else if (
		changeCityValue.length &&
		selectedCousine.length &&
		!findRestaurantValue.length &&
		!filteredPrices.length &&
		filteredMoods.length &&
		!filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		
		let newMoods = [];
		filteredMoods.forEach(e => result.forEach((j) => {
			if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				return newMoods.push(JSON.stringify(j))
			}
			return newMoods
		}))
		  let newCousine = [];
		  newMoods = newMoods.map(e => JSON.parse(e))
		  selectedCousine.forEach(e => newMoods.forEach((j) => {
			  if (j.foodTypes.includes(e)) {
				  return newCousine.push(j)
			  }
			  return newCousine
		  }))
		  setFilterRestaurants(newCousine)
	} else if (
		changeCityValue.length &&
		!selectedCousine.length &&
		findRestaurantValue.length &&
		filteredPrices.length &&
		!filteredMoods.length &&
		!filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		  
		let newPrice = [];
		filteredPrices.forEach(e => result.forEach((j) => {
			if (j.priceInfo === e) {
				return newPrice.push(j)
			}
			return newPrice
		}))
		let newRestName = []
		newPrice.forEach(e => {
			if (e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())) {
				return newRestName.push(e)
			}
			return newRestName
		})

		setFilterRestaurants(newRestName)
	  }  else if (
		changeCityValue.length &&
		!selectedCousine.length &&
		findRestaurantValue.length &&
		filteredPrices.length &&
		filteredMoods.length &&
		!filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		  
		let newPrice = [];
		filteredPrices.forEach(e => result.forEach((j) => {
			if (j.priceInfo === e) {
				return newPrice.push(j)
			}
			return newPrice
		}))
		let newRestName = []
		newPrice.forEach(e => {
			if (e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())) {
				return newRestName.push(e)
			}
			return newRestName
		})
		  
		let newMoods = [];
		filteredMoods.forEach(e => newRestName.forEach((j) => {
			if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				return newMoods.push(JSON.stringify(j))
			}
			return newMoods
		}))
		  setFilterRestaurants(newMoods.map(e => JSON.parse(e)))
	  } else if (
		changeCityValue.length &&
		selectedCousine.length &&
		findRestaurantValue.length &&
		filteredPrices.length &&
		filteredMoods.length &&
		filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});

		let newMoods = [];
		filteredMoods.forEach(e => result.forEach((j) => {
			if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				return newMoods.push(JSON.stringify(j))
			}
			return newMoods
		}))

		let newCousine = [];
		newMoods = newMoods.map(e => JSON.parse(e))
		selectedCousine.forEach(e => newMoods.forEach((j) => {
			if (j.foodTypes.includes(e)) {
				return newCousine.push(j)
			}
			return newCousine
		}))

		let newPrice = [];
		filteredPrices.forEach(e => newCousine.forEach((j) => {
			if (j.priceInfo === e) {
				return newPrice.push(j)
			}
			return newPrice
		}))

		let newRestName = []
		newPrice.forEach(e => {
			if (e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())) {
				return newRestName.push(e)
			}
			return newRestName
		})

		  let newOptions = [];
		  filteredOptions.forEach(e => newRestName.forEach((j) => {
			  if (j.options.includes(e) && !newOptions.includes(JSON.stringify(j))) {
				 return  newOptions.push(JSON.stringify(j))
			  }
			  return newOptions
		  }))
		  setFilterRestaurants(newOptions.map(e => JSON.parse(e)))
	  } else if (
		changeCityValue.length &&
		!selectedCousine.length &&
		!findRestaurantValue.length &&
		!filteredPrices.length &&
		!filteredMoods.length &&
		filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		let newOptions = [];
		filteredOptions.forEach(e => result.forEach((j) => {
			if (j.options.includes(e) && !newOptions.includes(JSON.stringify(j))) {
			   return  newOptions.push(JSON.stringify(j))
			}
			return newOptions
		}))
		setFilterRestaurants(newOptions.map(e => JSON.parse(e)))
	  } else if (
		changeCityValue.length &&
		!selectedCousine.length &&
		!findRestaurantValue.length &&
		!filteredPrices.length &&
		filteredMoods.length &&
		filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		  
		let newMoods = [];
		filteredMoods.forEach(e => result.forEach((j) => {
			if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				return newMoods.push(JSON.stringify(j))
			}
			return newMoods
		}))
		newMoods = newMoods.map(e => JSON.parse(e))
		let newOptions = [];
		filteredOptions.forEach(e => newMoods.forEach((j) => {
			if (j.options.includes(e) && !newOptions.includes(JSON.stringify(j))) {
			   return  newOptions.push(JSON.stringify(j))
			}
			return newOptions
		}))
		setFilterRestaurants(newOptions.map(e => JSON.parse(e)))
	  }  else if (
		changeCityValue.length &&
		!selectedCousine.length &&
		!findRestaurantValue.length &&
		filteredPrices.length &&
		filteredMoods.length &&
		filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		  
		let newMoods = [];
		filteredMoods.forEach(e => result.forEach((j) => {
			if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				return newMoods.push(JSON.stringify(j))
			}
			return newMoods
		}))
		newMoods = newMoods.map(e => JSON.parse(e))
		let newOptions = [];
		filteredOptions.forEach(e => newMoods.forEach((j) => {
			if (j.options.includes(e) && !newOptions.includes(JSON.stringify(j))) {
			   return  newOptions.push(JSON.stringify(j))
			}
			return newOptions
		}))
		  newOptions = newOptions.map(e => JSON.parse(e))
		let newPrice = [];
		filteredPrices.forEach(e => result.forEach((j) => {
			if (j.priceInfo === e) {
				return newPrice.push(j)
			}
			return newPrice
		}))
		  setFilterRestaurants(newPrice)
	  } else if (
		changeCityValue.length &&
		!selectedCousine.length &&
		findRestaurantValue.length &&
		filteredPrices.length &&
		filteredMoods.length &&
		filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		  
		let newMoods = [];
		filteredMoods.forEach(e => result.forEach((j) => {
			if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				return newMoods.push(JSON.stringify(j))
			}
			return newMoods
		}))
		newMoods = newMoods.map(e => JSON.parse(e))
		let newOptions = [];
		filteredOptions.forEach(e => newMoods.forEach((j) => {
			if (j.options.includes(e) && !newOptions.includes(JSON.stringify(j))) {
			   return  newOptions.push(JSON.stringify(j))
			}
			return newOptions
		}))
		  newOptions = newOptions.map(e => JSON.parse(e))
		let newPrice = [];
		filteredPrices.forEach(e => result.forEach((j) => {
			if (j.priceInfo === e) {
				return newPrice.push(j)
			}
			return newPrice
		}))
		  
		let newRestName = []
		newPrice.forEach(e => {
			if (e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())) {
				return newRestName.push(e)
			}
			return newRestName
		})
		  setFilterRestaurants(newRestName)
	  } else if (
		changeCityValue.length &&
		selectedCousine.length &&
		!findRestaurantValue.length &&
		filteredPrices.length &&
		filteredMoods.length &&
		filteredOptions.length
	  ) {
		let result = [];
		allRestaurantsArr.forEach((e) => {
			if ((e.restcity + e.address).toLowerCase().includes(changeCityValue.toLowerCase())) {
				return result.push(e)
			}
			return result
		});
		  
		let newMoods = [];
		filteredMoods.forEach(e => result.forEach((j) => {
			if (j.moods.includes(e) && !newMoods.includes(JSON.stringify(j))) {
				return newMoods.push(JSON.stringify(j))
			}
			return newMoods
		}))
		newMoods = newMoods.map(e => JSON.parse(e))
		let newOptions = [];
		filteredOptions.forEach(e => newMoods.forEach((j) => {
			if (j.options.includes(e) && !newOptions.includes(JSON.stringify(j))) {
			   return  newOptions.push(JSON.stringify(j))
			}
			return newOptions
		}))
		  newOptions = newOptions.map(e => JSON.parse(e))
		let newPrice = [];
		filteredPrices.forEach(e => result.forEach((j) => {
			if (j.priceInfo === e) {
				return newPrice.push(j)
			}
			return newPrice
		}))
		  
		  let newCousine = [];
		selectedCousine.forEach(e => newPrice.forEach((j) => {
			if (j.foodTypes.includes(e)) {
				return newCousine.push(j)
			}
			return newCousine
		}))
		  setFilterRestaurants(newCousine)
	  }
  }, [
    selectedCousine,
    findRestaurantValue,
    filteredPrices,
    filteredMoods,
    filteredOptions,
    changeCityValue,
  ]);

  const filterPriceCheckedFunction = (title, bul) => {
    bul
      ? setFilteredPrices(
          filteredPrices.filter((item, index) => {
            return index != filteredPrices.indexOf(title);
          })
        )
      : setFilteredPrices([...filteredPrices, title]);
  };
  const selectedCousineChange = (arr) => {
    setSelectedCousine(arr);
  };

  const findRestaurant = (val) => {
    setFilterRestaurants(allRestaurantsArr);
    setFindRestaurantValue(val);
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
  /* 
	const handleClickOpen = () => {
		setShowFilterDialog(!showFilterDialog);
	};
	const handleClose = () => {
		setShowFilterDialog(!showFilterDialog);
	}; */
  const filterDialogShow = () => {
    setShowFilterDialog(!showFilterDialog);
  };

  const ChangeSelectedRestaurant = () => {
    setSelectedRestaurantInfo(null);
  };

  const findSelectedRestaurant = (restaurant) => {
    setSelectedRestaurantInfo(restaurant);
  };

  const changeCity = (e) => setChangeCityValue(e?.target?.value);

  const debouncedChange = debounce(changeCity, 500);

  useEffect(() => {
    setFilterRestaurants(allRestaurantsArr);
    let result = [];
    allRestaurantsArr.forEach((e) => {
      if (
        (e.restcity + "" + e.address)
          .toLowerCase()
          .includes(changeCityValue.toLowerCase())
      ) {
        return result.push(e);
      }
      return result;
    });

    console.log(result);
    setFilterRestaurants(result);
  }, [changeCityValue]);
  console.log(changeCityValue);
  return (
    <>
      <div>
        <MainPage>
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
                    onChange={debouncedChange}
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
              <SwipeableTemporaryDrawer
                findRestaurant={findRestaurant}
                selectedCousineChange={selectedCousineChange}
                filteredPrices={filteredPrices}
                filterPriceCheckedFunction={filterPriceCheckedFunction}
                filteredOptions={filteredOptions}
                filterOptionsCheckedFunction={filterOptionsCheckedFunction}
                filteredMoods={filteredMoods}
                filterMoodsCheckedFunction={filterMoodsCheckedFunction}
              />
            </div>
            <FilterDialog
              findRestaurant={findRestaurant}
              selectedCousineChange={selectedCousineChange}
              filteredPrices={filteredPrices}
              filterPriceCheckedFunction={filterPriceCheckedFunction}
              filteredOptions={filteredOptions}
              filterOptionsCheckedFunction={filterOptionsCheckedFunction}
              filteredMoods={filteredMoods}
              filterMoodsCheckedFunction={filterMoodsCheckedFunction}
            />{" "}
            <RestDiv>
              {filterRestaurants.length !== allRestaurantsArr.length ? (
                filterRestaurants.length ? (
                  <div style={{ color: "white" }}>
                    Find {filterRestaurants.length}{" "}
                    {filterRestaurants.length > 1
                      ? "Restaurants"
                      : "Restaurant"}
                  </div>
                ) : (
                  <div style={{ color: "white" }}>Restaurants Can't Find</div>
                )
              ) : null}
              <ShowAllOrFilteredRestaurants
                onclick={findSelectedRestaurant}
                allRestaurantsArr={allRestaurantsArr}
                filterRestaurants={filterRestaurants}
                RestaurantOpenOrClose={RestaurantOpenOrClose}
              />
              {!!selectedRestaurantInfo && (
                <RestaurantInfoDialog
                  data={selectedRestaurantInfo}
                  onclose={ChangeSelectedRestaurant}
                />
              )}
            </RestDiv>
          </HomeContents>
        </MainPage>
      </div>
    </>
  );
}
