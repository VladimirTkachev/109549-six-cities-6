import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app/App";
import {FavoritesList} from "./mocks/offer";
import {actions, thunks} from "./redux/auth";
import {redirect} from "./redux/middleware";
import {createAPI} from "./api";
import reducer from "./redux";

const api = createAPI(
    () => {
      store.dispatch(actions.changeAuthStatus(false));
      store.dispatch(actions.redirectToRoute(`/login`));
    },
);
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
));

store.dispatch(thunks.checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App favoritesList={FavoritesList}/>
    </Provider>,
    document.getElementById(`root`),
);
