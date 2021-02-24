import {CitiesList} from "Project/mocks/offer";

import {
  SELECT_CITY,
  STORE_CITIES,
  STORE_OFFERS,
  CHANGE_SORT,
} from "./action-types";

const initialState = {
  /** Данные выбранного варианта сортировки */
  sort: {
    label: `Popular`,
    value: `popular`,
  },
  /** Данные карточек предложений */
  offers: {
    /** Map - объект идентификаторов городов к массиву идентификаторов карточек предложений */
    offersIdsMap: {},
    /** Map - объект идентификаторов карточек предложений на данные карточек */
    offerCardsMap: {},
    /** Map - объект идентификаторов карточек предложений на список идентификаторов карточек соседних предложений */
    neightboursIdsMap: {},
  },
  /** Данные выбранного города */
  selectedCity: {},
  /** Список городов */
  cities: CitiesList,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
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
