import {v4 as uuid} from 'uuid';

import {toReducer} from "./utils";
import {
  storeHotelData,
  changeAuthStatus,
  storeUserData,
  appendNotification,
  updateOffer,
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

function updateOfferCard(id) {
  return (dispatch, _getState, api) => {
    return api.get(`/hotels/${id}`).the(({data}) => {
      dispatch(updateOffer({
        ...data,
        host: {
          ...data.host,
          avatarUrl: data.host[`avatar_url`],
          isPro: data.host[`is_pro`],
        },
        isFavorite: data[`is_favorite`],
        isPremium: data[`is_premium`],
        maxAdults: data[`max_adults`],
        previewImg: data[`preview_image`],
      }, id));
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
  updateOfferCard,
  login,
  checkAuth,
};
