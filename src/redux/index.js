import {combineReducers} from "redux";

import cities, {CITIES_STORE_KEY} from "./cities";
import offers, {OFFERS_STORE_KEY} from "./offers";
import notifications, {NOTIFICATIONS_STORE_KEY} from "./notifications";
import auth, {AUTH_STORE_KEY} from "./auth";
import comments, {COMMENTS_STORE_KEY} from "./comments";

export default combineReducers({
  [CITIES_STORE_KEY]: cities,
  [OFFERS_STORE_KEY]: offers,
  [NOTIFICATIONS_STORE_KEY]: notifications,
  [AUTH_STORE_KEY]: auth,
  [COMMENTS_STORE_KEY]: comments,
});
