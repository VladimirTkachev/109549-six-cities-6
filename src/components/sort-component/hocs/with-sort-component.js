import {connect} from "react-redux";

import {
  getSort,
  SortTypes,
  changeSort,
} from "Project/redux/offers";

function mapStateToProps(state) {
  return {
    items: SortTypes,
    selectedItem: getSort(state),
  };
}

export default connect(mapStateToProps, {onChange: changeSort});
