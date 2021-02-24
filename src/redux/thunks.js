import {toReducer} from "./utils";
import {selectCity, storeCities, storeOffers} from "./actions";

function fetchOffersList() {
  return (dispatch, _getState, api) => {
    return api.get(`/hotels`).then(({data}) => {
      const {cities, offersIdsMap, offerCardsMap} = toReducer(data);
      const [firstCity] = cities;

      dispatch(selectCity(firstCity));
      dispatch(storeCities(cities));
      dispatch(storeOffers(offersIdsMap, offerCardsMap));
    });
  };
}

export {fetchOffersList};
