import {
  SELECT_CITY,
  STORE_CITIES,
  STORE_OFFERS,
  CHANGE_SORT,
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

export {
  selectCity,
  storeCities,
  storeOffers,
  changeSort,
};
