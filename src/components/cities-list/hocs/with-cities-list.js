import {connect} from "react-redux";

import {
  getCities,
  getSelectedCity,
} from "Project/redux/selectors";
import {selectCity} from "Project/redux/actions";

function mapStateToProps(state) {
  return {
    items: getCities(state),
    selectedItem: getSelectedCity(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onClick(item) {
      dispatch(selectCity(item));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps);
