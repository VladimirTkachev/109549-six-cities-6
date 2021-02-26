import {
  SELECT_CITY,
  STORE_CITIES,
  STORE_OFFERS,
  CHANGE_SORT,
  STORE_HOTEL_DATA,
  CHANGE_AUTH_STATUS,
  STORE_USER_DATA,
} from "./action-types";

const selectCity = (city) => {
  return {
    type: SELECT_CITY,
    payload: city
  };
};

const storeCities = (cities) => {
  return {
    type: STORE_CITIES,
    payload: cities
  };
};

const storeOffers = (offersIdsMap, offerCardsMap) => {
  return {
    type: STORE_OFFERS,
    payload: {
      offersIdsMap,
      offerCardsMap,
    },
  };
};

const changeSort = (sort) => {
  return {
    type: CHANGE_SORT,
    payload: sort,
  };
};

const storeHotelData = ({city, cities, offersIdsMap, offerCardsMap}) => {
  return {
    type: STORE_HOTEL_DATA,
    payload: {
      city,
      cities,
      offersIdsMap,
      offerCardsMap,
    },
  };
};

const changeAuthStatus = (value) => {
  return {type: CHANGE_AUTH_STATUS, payload: value};
};

const storeUserData = (data) => {
  return {type: STORE_USER_DATA, payload: data};
};

export {
  selectCity,
  storeCities,
  storeOffers,
  changeSort,
  storeHotelData,
  changeAuthStatus,
  storeUserData,
};
