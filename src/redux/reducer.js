import {CitiesList} from "Project/mocks/offer";

import {
  SELECT_CITY,
  STORE_CITIES,
  STORE_OFFERS,
  UPDATE_OFFER,
  CHANGE_SORT,
  STORE_HOTEL_DATA,
  CHANGE_AUTH_STATUS,
  STORE_USER_DATA,
  APPEND_NOTIFICATION,
  REMOVE_NOTIFICATION,
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
  /** Статус авторизации пользователя */
  authorizationStatus: false,
  /** Данные зарегестрированного пользователя */
  user: {
    /** Путь до аватарки */
    avatarUrl: ``,
    /** email */
    email: ``,
    /** Идентификатор */
    id: null,
    /** Статус пользователя */
    isPro: null,
    /** Имя пользователя */
    name: ``,
  },
  /** Список уведомлений */
  notifications: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case APPEND_NOTIFICATION:
      return {
        ...state,
        notifications: [
          ...state.notifications,
          action.payload,
        ],
      };
    case REMOVE_NOTIFICATION:
      return {
        ...state,
        notifications: state.notifications.filter((it) => it.id !== action.meta),
      };
    case CHANGE_AUTH_STATUS:
      return {
        ...state,
        authorizationStatus: action.payload,
      };
    case STORE_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };
    case STORE_HOTEL_DATA:
      return {
        ...state,
        selectedCity: action.payload.city,
        cities: action.payload.cities,
        offers: {
          ...state.offers,
          offersIdsMap: action.payload.offersIdsMap,
          offerCardsMap: action.payload.offerCardsMap,
        },
      };
    case UPDATE_OFFER:
      return {
        ...state,
        offers: {
          ...state.offers,
          offerCardsMap: {
            ...state.offers.offerCardsMap,
            [action.meta]: action.payload,
          },
        },
      };
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
