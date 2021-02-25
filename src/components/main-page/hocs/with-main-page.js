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

const mapDispatchToProps = {
  fetchOffersList,
};

export default connect(mapStateToProps, mapDispatchToProps);
