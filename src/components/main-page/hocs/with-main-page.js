import {connect} from "react-redux";

import {
  getOffersIds,
  getSort,
  getAuthStatus,
  getEmail,
} from "Project/redux/selectors";
import {fetchOffersList} from "Project/redux/thunks";

function mapStateToProps(state) {
  return {
    offersIds: getOffersIds(state),
    selectedSort: getSort(state),
    authStatus: getAuthStatus(state),
    email: getEmail(state),
  };
}

const mapDispatchToProps = {
  fetchOffersList,
};

export default connect(mapStateToProps, mapDispatchToProps);
