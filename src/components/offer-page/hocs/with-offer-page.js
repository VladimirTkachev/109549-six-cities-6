import {connect} from "react-redux";

import {
  getNeightboursIdsMap,
  getOfferCardsMap,
} from "Project/redux/selectors";

function mapStateToProps(state) {
  return {
    neightbours: getNeightboursIdsMap(state),
    items: getOfferCardsMap(state),
  };
}

export default connect(mapStateToProps);
