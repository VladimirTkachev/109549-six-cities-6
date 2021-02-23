import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";

import App from "./components/app/App";
import {Username, FavoritesList, Reviewers} from "./mocks/offer";
import reducer from "./redux/reducer";

const store = createStore(reducer, composeWithDevTools());

ReactDom.render(
    <Provider store={store}>
      <App
        username={Username}
        reviewers={Reviewers}
        favoritesList={FavoritesList}/>
    </Provider>,
    document.getElementById(`root`),
);
