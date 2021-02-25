const SortTypes = [
  // Оставляем в том порядке в котором данные пришли с сервера
  {
    label: `Popular`,
    value: `popular`,
  },
  // По возрастанию цены
  {
    label: `Price: low to high`,
    value: `asc_price`,
  },
  // По убыванию цены
  {
    label: `Price: high to low`,
    value: `desc_price`,
  },
  // По убыванию рейтинга
  {
    label: `Top rated first`,
    value: `top`,
  },
];

function sorting(sort, itemsIds, items) {
  switch (sort) {
    case `asc_price`:
      return itemsIds.sort((a, b) => {
        const aItem = items[a];
        const bItem = items[b];

        return aItem.price - bItem.price;
      });
    case `desc_price`:
      return itemsIds.sort((a, b) => {
        const aItem = items[a];
        const bItem = items[b];

        return bItem.price - aItem.price;
      });
    case `top`:
      return itemsIds.sort((a, b) => {
        const aItem = items[a];
        const bItem = items[b];

        return bItem.rating - aItem.rating;
      });
    default:
      return itemsIds;
  }
}

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
  const sort = getSort(state);
  const itemsIds = getOffersIdsMap(state)[city.id];
  const items = getOfferCardsMap(state);

  return itemsIds ? sorting(sort.value, [...itemsIds], items) : null;
}

function getOffersCount(state) {
  return getOffersIds(state).length;
}

function getNeightboursIdsMap(state) {
  return getOffers(state).neightboursIdsMap;
}

function getSort(state) {
  return state.sort;
}

export {
  SortTypes,
  getSelectedCity,
  getCities,
  getOffers,
  getOffersIdsMap,
  getOfferCardsMap,
  getOffersIds,
  getOffersCount,
  getNeightboursIdsMap,
  getSort,
};
