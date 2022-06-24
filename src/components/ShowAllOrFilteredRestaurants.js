import React from 'react';
import {OwnRest,
    OwnRestContent, OwnRestImg, RestContTitle} from './CssFolder/StyleHomePage'

function ShowAllOrFilteredRestaurants(props) {
    return (<>
              {props.filterRestaurants.length ? props.filterRestaurants.map((restaurant, index) => {
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
                          <RestContTitle style={{
                            marginBottom:'15px'
                          }}>{restaurant.restName}</RestContTitle>
                          
                          <div >
                            <span style={{ color: "green" }}>Price:</span>{" "}
                            {restaurant.priceInfo}
                          </div>
                          <div style={{
                            margin:'5px 0px'
                          }} >
                            <span style={{ color: "green" }}>Tel:</span>{" "}
                            {restaurant.phoneNumber}
                          </div>
                          <div>
                            <span style={{ color: "green" }}>Cousine:</span>{" "}
                            {restaurant.foodTypes.join(", ")}
                          </div>
                          <div style={{
                            width:'100%',
                            display:'flex',
                            justifyContent:'right'
                          }}>
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
                        </OwnRestContent>
                      </OwnRest>
                    );
                  }) : null}
              </>
    );
}

export default ShowAllOrFilteredRestaurants;