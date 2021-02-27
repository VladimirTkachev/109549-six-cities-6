import {connect} from "react-redux";

import {
  getNeightboursIdsMap,
  getOfferCardsMap,
  getUserData,
  getAuthStatus,
  getCommentsMap,
} from "Project/redux/selectors";
import {
  updateOfferCard,
  fetchCommentsList,
  appendUserComment,
} from "Project/redux/thunks";

function mapStateToProps(state) {
  return {
    neightbours: getNeightboursIdsMap(state),
    items: getOfferCardsMap(state),
    email: getUserData(state, `email`),
    authStatus: getAuthStatus(state),
    commentsMap: getCommentsMap(state),
  };
}

const mapDispatchToProps = {
  updateOfferCard,
  fetchCommentsList,
  onSubmit: appendUserComment,
};

export default connect(mapStateToProps, mapDispatchToProps);
