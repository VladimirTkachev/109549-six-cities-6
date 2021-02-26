import {connect} from "react-redux";

import {getAuth} from "Project/redux/selectors";

function mapStateToProps(state) {
  return {
    authStatus: getAuth(state),
  };
}

export default connect(mapStateToProps);
