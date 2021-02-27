import {connect} from "react-redux";

import {
  getOffersIds,
  getSort,
  getAuthStatus,
  getUserData,
} from "Project/redux/selectors";
import {fetchOffersList} from "Project/redux/thunks";

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
