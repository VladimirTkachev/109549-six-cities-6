import React from "react";
import ReactDom from "react-dom";

import App from "./components/app/App";
import {Username, OfferCards, MainTitle, Sort, CitiesList, FavoritesList, Reviewers} from "./mocks/offer";

ReactDom.render(
    <App username={Username}
      mainTitle={MainTitle}
      sort={Sort}
      offersCards={OfferCards}
      citiesList={CitiesList}
      reviewers={Reviewers}
      favoritesList={FavoritesList}/>,
    document.getElementById(`root`),
);
