import {connect} from "react-redux";

import {thunks} from "Project/redux/auth";

const mapDispatchToProps = {
  onLogin: thunks.login,
};

export default connect(null, mapDispatchToProps);
