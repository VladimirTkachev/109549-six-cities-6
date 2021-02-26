import React from "react";
import PropTypes from "prop-types";
import {Route, Redirect} from "react-router-dom";

import withPrivateRoute from "./hocs/with-private-route";

const PrivateRoute = (props) => {
  const {path, exact, render, authStatus} = props;

  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authStatus
            ? render(routeProps)
            : <Redirect to={`/login`} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  exact: PropTypes.bool.isRequired,
  path: PropTypes.string.isRequired,
  render: PropTypes.func.isRequired,
};

export const PrivateRouteWrapped = withPrivateRoute(PrivateRoute);
export default PrivateRoute;
