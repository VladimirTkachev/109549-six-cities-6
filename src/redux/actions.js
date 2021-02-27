import {
  SELECT_CITY,
  STORE_CITIES,
  STORE_OFFERS,
  CHANGE_SORT,
  STORE_HOTEL_DATA,
  UPDATE_OFFER,
  CHANGE_AUTH_STATUS,
  STORE_USER_DATA,
  APPEND_NOTIFICATION,
  REMOVE_NOTIFICATION,
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

const updateOffer = (offer, id) => {
  return {
    type: UPDATE_OFFER,
    payload: offer,
    meta: id,
  };
};

const changeAuthStatus = (value) => {
  return {type: CHANGE_AUTH_STATUS, payload: value};
};

const storeUserData = (data) => {
  return {type: STORE_USER_DATA, payload: data};
};

const appendNotification = (notification) => {
  return {
    type: APPEND_NOTIFICATION,
    payload: notification,
  };
};

const removeNotification = (id) => {
  return {
    type: REMOVE_NOTIFICATION,
    meta: id,
  };
};

export {
  selectCity,
  storeCities,
  storeOffers,
  updateOffer,
  changeSort,
  storeHotelData,
  changeAuthStatus,
  storeUserData,
  appendNotification,
  removeNotification,
};
