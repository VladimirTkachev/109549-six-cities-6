import {connect} from "react-redux";

import {
  getNeightboursIdsMap,
  getOfferCardsMap,
  updateOfferCard,
} from "Project/redux/offers";
import {
  getUserData,
  getAuthStatus,
} from "Project/redux/auth";
import {
  getCommentsMap,
  fetchCommentsList,
  appendUserComment,
} from "Project/redux/comments";

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
