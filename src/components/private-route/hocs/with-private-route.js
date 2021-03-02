import {connect} from "react-redux";

import {getAuthStatus} from "Project/redux/auth";

function mapStateToProps(state) {
  return {
    authStatus: getAuthStatus(state),
  };
}

export default connect(mapStateToProps);
