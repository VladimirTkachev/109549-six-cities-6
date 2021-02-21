import {connect} from "react-redux";

import {
  getOffersIds,
} from "Project/redux/selectors";

function mapStateToProps(state) {
  return {
    offersIds: getOffersIds(state),
  };
}

export default connect(mapStateToProps);
