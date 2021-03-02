import browserHistory from "Project/browser-history";
import {REDIRECT_TO_ROUTE} from "Project/redux/action-types";

const redirect = (_state) => {
  return (dispatch) => {
    return (action) => {
      if (action.type === REDIRECT_TO_ROUTE) {
        browserHistory.push(action.payload);
      }

      return dispatch(action);
    };
  };
};

export {redirect};
