function getSelectedCity(state) {
  return state.selectedCity;
}

function getCities(state) {
  return state.cities;
}

function getOffers(state) {
  return state.offers;
}

function getOffersIdsMap(state) {
  return getOffers(state).offersIdsMap;
}

function getOfferCardsMap(state) {
  return getOffers(state).offerCardsMap;
}

function getOffersIds(state) {
  const city = getSelectedCity(state);

  return getOffersIdsMap(state)[city.id];
}

function getOffersCount(state) {
  return getOffersIds(state).length;
}

function getNeightboursIdsMap(state) {
  return getOffers(state).neightboursIdsMap;
}

export {
  getSelectedCity,
  getCities,
  getOffers,
  getOffersIdsMap,
  getOfferCardsMap,
  getOffersIds,
  getOffersCount,
  getNeightboursIdsMap,
};
