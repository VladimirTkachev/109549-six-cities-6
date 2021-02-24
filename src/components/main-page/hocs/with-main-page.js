import {connect} from "react-redux";

import {
  getOffersIds,
  getSort,
} from "Project/redux/selectors";
import {fetchOffersList} from "Project/redux/thunks";

function mapStateToProps(state) {
  return {
    offersIds: getOffersIds(state),
    selectedSort: getSort(state),
  };
}

export default connect(mapStateToProps, {fetchOffersList});
