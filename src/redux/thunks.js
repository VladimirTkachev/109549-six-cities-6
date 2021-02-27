import {v4 as uuid} from 'uuid';

import {toReducer} from "./utils";
import {
  storeHotelData,
  changeAuthStatus,
  storeUserData,
  appendNotification,
} from "./actions";

function fetchOffersList() {
  return (dispatch, _getState, api) => {
    return api.get(`/hotels`).then(({data}) => {
      const {cities, offersIdsMap, offerCardsMap} = toReducer(data);
      const [city] = cities;

      dispatch(storeHotelData({cities, city, offersIdsMap, offerCardsMap}));
    });
  };
}

function login({login: email, password}) {
  return (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then(({data}) => {
        dispatch(changeAuthStatus(true));
        dispatch(storeUserData({
          ...data,
          avatarUrl: data[`avatar_url`],
          isPro: data[`is_pro`],
        }));
      })
      .catch((error) => {
        dispatch(appendNotification({
          message: error.message,
          type: `error`,
          id: uuid(),
        }));
      });
  };
}

function checkAuth() {
  return (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then(() => dispatch(changeAuthStatus(true)))
      .catch((error) => {
        dispatch(appendNotification({
          message: error.message,
          type: `error`,
          id: uuid(),
        }));
      });
  };
}

export {
  fetchOffersList,
  login,
  checkAuth,
};
