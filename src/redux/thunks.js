import {v4 as uuid} from 'uuid';

import {
  toReducerOffersCards,
  toReducerComments,
} from "./utils";
import {
  storeHotelData,
  changeAuthStatus,
  storeUserData,
  appendNotification,
  updateOffer,
  storeComments,
  redirectToRoute,
} from "./actions";
import {
  getOfferCardsMap,
  getCommentsMap,
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

function login({login: email, password}) {
  return (dispatch, _getState, api) => {
    return api.post(`/login`, {email, password})
      .then(({data}) => {
        dispatch(changeAuthStatus(true));
        dispatch(storeUserData({
          ...data,
          avatarUrl: data[`avatar_url`],
          isPro: data[`is_pro`],
        }));
      })
      .then(() => dispatch(redirectToRoute(`/`)))
      .catch((error) => {
        dispatch(appendNotification({
          message: error.message,
          type: `error`,
          id: uuid(),
        }));
      });
  };
}

function checkAuth() {
  return (dispatch, _getState, api) => {
    return api.get(`/login`)
      .then(() => dispatch(changeAuthStatus(true)))
      .catch((error) => {
        dispatch(appendNotification({
          message: error.message,
          type: `error`,
          id: uuid(),
        }));
      });
  };
}

function fetchCommentsList(id) {
  return (dispatch, getState, api) => {
    const state = getState();
    const commentsMap = getCommentsMap(state);
    const comment = commentsMap[id];

    if (comment) {
      return Promise.resolve();
    }

    return api.get(`/comments/${id}`)
      .then(({data}) => {
        const comments = toReducerComments(data);

        dispatch(storeComments(comments, id));
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

function appendUserComment(id, comment, rating) {
  return (dispatch, _getState, api) => {
    return api.post(`/comments/${id}`, {comment, rating})
      .then(({data}) => {
        const comments = toReducerComments(data);

        dispatch(storeComments(comments, id));
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
  login,
  checkAuth,
  fetchCommentsList,
  appendUserComment,
};
