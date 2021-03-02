import {connect} from "react-redux";

import {login} from "Project/redux/auth";

const mapDispatchToProps = {
  onLogin: login,
};

export default connect(null, mapDispatchToProps);
