import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app/App";
import {Username, FavoritesList, Reviewers} from "./mocks/offer";
import reducer from "./redux/reducer";
import {changeAuthStatus} from "./redux/actions";
import {checkAuth} from "./redux/thunks";
import {createAPI} from "./api";

const api = createAPI(
    () => store.dispatch(changeAuthStatus(false)),
);
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
));

store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App
        username={Username}
        reviewers={Reviewers}
        favoritesList={FavoritesList}/>
    </Provider>,
    document.getElementById(`root`),
);
