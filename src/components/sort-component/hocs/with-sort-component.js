import {connect} from "react-redux";

import {
  getSort,
  SortTypes,
} from "Project/redux/selectors";
import {changeSort} from "Project/redux/actions";

function mapStateToProps(state) {
  return {
    items: SortTypes,
    selectedItem: getSort(state),
  };
}

export default connect(mapStateToProps, {onChange: changeSort});
