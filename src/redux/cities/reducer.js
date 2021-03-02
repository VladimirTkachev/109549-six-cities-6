import {STORE_HOTEL_DATA} from "../offers";
import {SELECT_CITY} from "./action-types";

const initialState = {
  /** Список гороов */
  cities: [],
  /** Данные выбранного города */
  selectedCity: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      return {
        ...state,
        selectedCity: action.payload,
      };
    case STORE_HOTEL_DATA:
      return {
        ...state,
        cities: action.payload.cities,
        selectedCity: action.payload.city,
      };
    default:
      return state;
  }
};
