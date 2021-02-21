import {CitiesList, OfferCards} from "Project/mocks/offer";

import {
  SELECT_CITY,
  STORE_CITIES,
  STORE_OFFERS,
} from "./action-types";

const initialState = {
  /** Данные карточек предложений */
  offers: {
    /** Map - объект идентификаторов городов к массиву идентификаторов карточе предложений */
    offersIdsMap: {
      111: [1, 2, 3, 4, 5],
      222: [1, 2, 3, 4, 5],
      333: [1, 2, 3, 4, 5],
      444: [1, 2, 3, 4, 5],
      555: [1, 2, 3, 4, 5],
      666: [1, 2, 3, 4, 5],
    },
    /** Map - объект идентификаторов карточек предложений на данные карточек */
    offerCardsMap: {
      1: OfferCards[0],
      2: OfferCards[1],
      3: OfferCards[2],
      4: OfferCards[3],
      5: OfferCards[4],
    },
    /** Map - объект идентификаторов карточек предложений на список идентификаторов карточек соседних предложений */
    neightboursIdsMap: {
      1: [1, 2, 3],
      2: [2, 3, 4],
      3: [3, 4, 5],
      4: [1, 2, 5],
      5: [1, 2, 3],
    },
  },
  /** Данные выбранного города */
  selectedCity: {
    id: `444`,
    name: `Amsterdam`,
  },
  /** Список городов */
  cities: CitiesList,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case STORE_CITIES:
      return {
        ...state,
        cities: action.payload,
      };
    case STORE_OFFERS:
      return {
        ...state,
        offers: {
          ...state.offers,
          offersIdsMap: {
            ...state.offers.offersIdsMap,
            ...action.payload.offersIdsMap,
          },
          offerCardsMap: {
            ...state.offers.offerCardsMap,
            ...action.payload.offerCardsMap,
          },
        },
      };
    default:
      return state;
  }
};
