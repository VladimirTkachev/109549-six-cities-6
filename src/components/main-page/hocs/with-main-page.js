import {connect} from "react-redux";

import {
  getOffersIds,
  getSort,
  fetchOffersList,
} from "Project/redux/offers";
import {
  getAuthStatus,
  getUserData,
} from "Project/redux/auth";

function mapStateToProps(state) {
  return {
    offersIds: getOffersIds(state),
    selectedSort: getSort(state),
    authStatus: getAuthStatus(state),
    email: getUserData(state, `email`),
  };
}

const mapDispatchToProps = {
  fetchOffersList,
};

export default connect(mapStateToProps, mapDispatchToProps);
