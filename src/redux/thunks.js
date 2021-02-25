import {toReducer} from "./utils";
import {storeHotelData} from "./actions";

function fetchOffersList() {
  return (dispatch, _getState, api) => {
    return api.get(`/hotels`).then(({data}) => {
      const {cities, offersIdsMap, offerCardsMap} = toReducer(data);
      const [city] = cities;

      dispatch(storeHotelData({cities, city, offersIdsMap, offerCardsMap}));
    });
  };
}

export {fetchOffersList};
