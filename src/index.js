import React from "react";
import ReactDom from "react-dom";

import App from "./components/app/App";
import {Username, MainTitle, Sort, CitiesList, OfferCards, FavoritesList} from "./mock-data";

ReactDom.render(
    <App username={Username}
      mainTitle={MainTitle}
      sort={Sort}
      offersCards={OfferCards}
      citiesList={CitiesList}
      favoritesList={FavoritesList}/>,
    document.getElementById(`root`),
);
