export function toReducerOffersCards(data = []) {
  return data.reduce((acc, it) => {
    const cityName = it.city.name;
    acc.cities = [
      ...acc.cities,
      {
        id: cityName,
        name: cityName,
      },
    ];

    acc = {
      ...acc,
      cities: acc.cities.reduce((items, item) => {
        items = items.find((city) => city.id === item.id) ? items : [...items, item];

        return items;
      }, [
        {
          id: cityName,
          name: cityName,
        },
      ]),
      offersIdsMap: {
        ...acc.offersIdsMap,
        [cityName]: acc.offersIdsMap[cityName] ? [
          ...acc.offersIdsMap[cityName],
          it.id,
        ] : [it.id],
      },
      offerCardsMap: {
        ...acc.offerCardsMap,
        [it.id]: {
          ...it,
          host: {
            ...it.host,
            avatarUrl: it.host[`avatar_url`],
            isPro: it.host[`is_pro`],
          },
          isFavorite: it[`is_favorite`],
          isPremium: it[`is_premium`],
          maxAdults: it[`max_adults`],
          previewImage: it[`preview_image`],
        },
      },
    };

    return acc;
  }, {
    cities: [],
    offersIdsMap: {},
    offerCardsMap: {},
  });
}
