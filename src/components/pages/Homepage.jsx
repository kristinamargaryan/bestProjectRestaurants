import React, { useState, useEffect, useCallback, useMemo } from 'react';
import '../../App.css';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import SearchIcon from '@mui/icons-material/Search';
import FilterDialog from '../FilterDialog';
import SwipeableTemporaryDrawer from '../DrawersFolter';
import useWindowDimensions from '../WindowResize';
import { useAuth } from '../AuthProvider';
import ShowAllOrFilteredRestaurants from '../ShowAllOrFilteredRestaurants';
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
} from '../CssFolder/StyleHomePage';
import zIndex from '@mui/material/styles/zIndex';
import RestaurantInfoDialog from '../RestaurantInfoDialog';
import { getNativeSelectUtilityClasses } from '@mui/material';
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
	const [findRestaurantValue, setFindRestaurantValue] = useState('');
	const [filterRestaurants, setFilterRestaurants] = useState(allRestaurantsArr);
	const [findRest, setFindRest] = useState([]);
	useEffect(() => {
		if (userParamsAndPhothos) {
			uniqueRestaurantFunction();
		}
	}, [userParamsAndPhothos]);
	useEffect(() => {}, [allRestaurantsArr]);
	function RestaurantOpenOrClose(openTime, closeTime) {
		let [openHour, openMin] = openTime.split(':');
		let [closeHour, closeMin] = closeTime.split(':');
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
		setFilterRestaurants(
			filterRestaurants.filter((e) =>
				e.restName.toLowerCase().includes(findRestaurantValue.toLowerCase())
			)
		);
	}, [findRestaurantValue]);

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
										style={{ display: 'none' }}
									>
										<AppRegistrationIcon />
										<FilterTitle>Filters</FilterTitle>
									</FilterAreaBtn>
								</FilterPart>
								<InputPart>
									<SearchInput
										type='text'
										label='foolwidth'
										placeholder='Ereven, Armenia'
									></SearchInput>
									<IconButton>
										<SearchIcon style={{ color: '#fff' }} />
									</IconButton>
								</InputPart>
							</SearchFilterArea>
						</SearchSection>
					</NavbarPhoto>
					<HomeContents>
						<div
							style={{
								display: width <= 850 ? 'block' : 'none',
								position: 'fixed',
								top: '300px',
								left: '0',
								zIndex: 50,
							}}
						>
							<SwipeableTemporaryDrawer
								findRestaurant={findRestaurant}
								selectedCousineChange={selectedCousineChange}
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
						/>{' '}
						<RestDiv>
							{filterRestaurants.length !== allRestaurantsArr.length ? (
								filterRestaurants.length ? (
									<div style={{ color: 'white' }}>
										Find {filterRestaurants.length}{' '}
										{filterRestaurants.length > 1
											? 'Restaurants'
											: 'Restaurant'}
									</div>
								) : (
									<div style={{ color: 'white' }}>Restaurants Can't Find</div>
								)
							) : null}
							<ShowAllOrFilteredRestaurants
								onclick={findSelectedRestaurant}
								allRestaurantsArr={allRestaurantsArr}
								filterRestaurants={filterRestaurants}
								RestaurantOpenOrClose={RestaurantOpenOrClose}
							/>
							{/* {allRestaurantsArr.length === filterRestaurants.length ||
              filterRestaurants.length === 0
                ? allRestaurantsArr.map((restaurant, index) => {
                    return (
                      <OwnRest
                        key={index}
                        onClick={() => setSelectedRestaurantInfo(restaurant)}
                      >
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
                : filterRestaurants.map((restaurant, index) => {
                    return (
                      <OwnRest
                        key={index}
                        onClick={() => setSelectedRestaurantInfo(restaurant)}
                      >
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
                  })} */}
							{!!selectedRestaurantInfo && (
								<RestaurantInfoDialog
									data={selectedRestaurantInfo}
									onclose={ChangeSelectedRestaurant}
								/>
							)}
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
				</MainPage>
			</div>
		</>
	);
}
