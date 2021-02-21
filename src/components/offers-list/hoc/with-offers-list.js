import {connect} from "react-redux";

import {
  getOfferCardsMap,
} from "Project/redux/selectors";

function mapStateToProps(state) {
  return {
    items: getOfferCardsMap(state),
  };
}

export default connect(mapStateToProps);
