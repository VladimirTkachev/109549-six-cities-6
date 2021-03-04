const CITIES_STORE_KEY = `cities`;

function getCitiesState(state) {
  return state[CITIES_STORE_KEY] || {};
}

function getSelectedCity(state) {
  return getCitiesState(state).selectedCity;
}

function getCities(state) {
  return getCitiesState(state).cities;
}

export {
  CITIES_STORE_KEY,
  getCitiesState,
  getSelectedCity,
  getCities,
};
