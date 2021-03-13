import MockAdapter from "axios-mock-adapter";

import {createAPI} from "Project/api";

import {actions} from "../notifications";
import {
  fetchOffersList,
  updateOfferCard,
  changeFavoriteStatus,
  fetchFavorites,
} from "./thunks";
import {
  storeHotelData,
  updateOffer,
  storeFavoriteData,
} from "./actions";

const api = createAPI(() => {});

describe(`Offers thunks should work correctly`, () => {
  it(`Should make a correct API call to /hotels`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchOffersListLoader = fetchOffersList();

    apiMock
    .onGet(`/hotels`)
    .reply(200, []);

    return fetchOffersListLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, storeHotelData({
          cities: [],
          offersIdsMap: {},
          offerCardsMap: {},
        }));
      });
  });

  it(`Should make a correct API call to /hotels/:id for update offer card with known card id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerCardId = 1;
    const state = {
      offers: {
        offerCardsMap: {
          1: {},
        },
      },
    };
    const updateOfferCardLoader = updateOfferCard(offerCardId);

    apiMock
    .onGet(`/hotels/${offerCardId}`)
    .reply(200, {});

    return updateOfferCardLoader(dispatch, () => state, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, updateOffer({}));
      });
  });

  it(`Should make a correct API call to /hotels/:id for update offer card with unknown card id`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const offerCardId = 1;
    const state = {
      offers: {
        offerCardsMap: {},
      },
    };
    const updateOfferCardLoader = updateOfferCard(offerCardId);

    apiMock
    .onGet(`/hotels/${offerCardId}`)
    .reply(200, {
      host: {
        [`avatar_url`]: ``,
        [`is_pro`]: false,
      },
      [`is_favorite`]: false,
      [`is_premium`]: false,
      [`max_adults`]: 3,
      [`preview_image`]: ``,
    });

    return updateOfferCardLoader(dispatch, () => state, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, updateOffer({
          host: {
            avatarUrl: ``,
            [`avatar_url`]: ``,
            isPro: false,
            [`is_pro`]: false,
          },
          isFavorite: false,
          isPremium: false,
          [`is_favorite`]: false,
          [`is_premium`]: false,
          maxAdults: 3,
          [`max_adults`]: 3,
          previewImg: ``,
          [`preview_image`]: ``,
        }, offerCardId));
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, actions.appendNotification({}));
      });
  });

  it(`Should make a correct API call to /favorite/:id/:status`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const cardId = 1;
    const state = {
      offers: {
        offerCardsMap: {
          1: {},
        },
      },
    };
    const changeFavoriteStatusCommentLoader = changeFavoriteStatus(cardId);

    apiMock
      .onPost(`/favorite/${cardId}/1`)
      .reply(200, {
        [`is_favorite`]: false,
      });

    return changeFavoriteStatusCommentLoader(dispatch, () => state, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, updateOffer({
          isFavorite: false,
        }, cardId));
      })
      .catch(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, actions.appendNotification({}));
      });
  });

  it(`Should make a correct API call to /favorite`, () => {
    const apiMock = new MockAdapter(api);
    const dispatch = jest.fn();
    const fetchFavoritesLoader = fetchFavorites();

    apiMock
      .onGet(`/favorite`)
      .reply(200, []);

    return fetchFavoritesLoader(dispatch, () => {}, api)
      .then(() => {
        expect(dispatch).toHaveBeenCalledTimes(1);

        expect(dispatch).toHaveBeenNthCalledWith(1, storeFavoriteData({
          cities: [],
          favoritesOffersIdsMap: {},
          offerCardsMap: {},
        }));
      });
  });
});
