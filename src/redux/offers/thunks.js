import {v4 as uuid} from "uuid";

import {appendNotification} from "../notifications";
import {toReducerOffersCards} from "./utils";
import {
  storeHotelData,
  updateOffer,
} from "./actions";
import {
  getOfferCardsMap,
} from "./selectors";

function fetchOffersList() {
  return (dispatch, _getState, api) => {
    return api.get(`/hotels`).then(({data}) => {
      const {cities, offersIdsMap, offerCardsMap} = toReducerOffersCards(data);
      const [city] = cities;

      dispatch(storeHotelData({cities, city, offersIdsMap, offerCardsMap}));
    });
  };
}

function updateOfferCard(id) {
  return (dispatch, getState, api) => {
    const state = getState();
    const items = getOfferCardsMap(state);
    const item = items[id];

    if (item) {
      return Promise.resolve(updateOffer(item));
    }

    return api.get(`/hotels/${id}`).then(({data}) => {
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

export {
  fetchOffersList,
  updateOfferCard,
};
