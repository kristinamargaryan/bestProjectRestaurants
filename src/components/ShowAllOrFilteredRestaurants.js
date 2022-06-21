import React from 'react';
import {OwnRest,
    OwnRestContent, OwnRestImg, RestContTitle} from './CssFolder/StyleHomePage'

function ShowAllOrFilteredRestaurants(props) {
    return (<>
              {props.allRestaurantsArr.length === props.filterRestaurants.length ||
              props.filterRestaurants.length === 0
                ? props.allRestaurantsArr.map((restaurant, index) => {
                    return (
                      <OwnRest
                        key={index}
                        onClick={() => props.onclick(restaurant)}
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
                            props.RestaurantOpenOrClose(
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
                : props.filterRestaurants.map((restaurant, index) => {
                    return (
                      <OwnRest
                        key={index}
                        onClick={() => props.onclick(restaurant)}
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
                            props.RestaurantOpenOrClose(
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
                  })}
              </>
    );
}

export default ShowAllOrFilteredRestaurants;