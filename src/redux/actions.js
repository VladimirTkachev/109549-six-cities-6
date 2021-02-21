import {
  SELECT_CITY,
  STORE_CITIES,
  STORE_OFFERS
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
    action: STORE_OFFERS,
    payload: {
      offersIdsMap,
      offerCardsMap,
    },
  };
};

export {
  selectCity,
  storeCities,
  storeOffers,
};
