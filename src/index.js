import React from "react";
import ReactDom from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

import App from "./components/app/App";
import {FavoritesList} from "./mocks/offer";
import reducer from "./redux/reducer";
import {changeAuthStatus} from "./redux/actions";
import {checkAuth} from "./redux/thunks";
import {redirect} from "./redux/middleware";
import {createAPI} from "./api";

const api = createAPI(
    () => store.dispatch(changeAuthStatus(false)),
);
const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
));

store.dispatch(checkAuth());

ReactDom.render(
    <Provider store={store}>
      <App favoritesList={FavoritesList}/>
    </Provider>,
    document.getElementById(`root`),
);
