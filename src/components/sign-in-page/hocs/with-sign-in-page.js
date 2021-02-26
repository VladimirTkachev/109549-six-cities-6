import {connect} from "react-redux";

import {login} from "Project/redux/thunks";

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps);
