import {toReducer} from "./utils";
import {
  storeHotelData,
  changeAuthStatus
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
      .then(() => dispatch(changeAuthStatus(true)));
  };
}

function checkAuth() {
  return (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then(() => dispatch(changeAuthStatus(true)))
      .catch(() => {});
  };
}

export {
  fetchOffersList,
  login,
  checkAuth,
};
