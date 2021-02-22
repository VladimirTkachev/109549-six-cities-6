import React from "react";
import PropTypes from "prop-types";

import withSortComponent from "./hocs/with-sort-component";

const SortComponent = ({items, selectedItem, onChange}) => {
  return (
    <ul className="places__options places__options--custom places__options--opened">
      {items.map((it) => {
        const active = it.value === selectedItem.value ? `places__option--active` : ``;

        return (
          <li key={it.value}
            className={`places__option ${active}`}
            tabIndex="0"
            onClick={() => onChange(it)}>
            {it.label}
          </li>
        );
      })}
    </ul>
  );
};

const LabelValueType = PropTypes.shape({
  /** Подпись */
  label: PropTypes.string.isRequired,
  /** Значение */
  value: PropTypes.string.isRequired,
});

SortComponent.propTypes = {
  /** Список сортировки */
  items: PropTypes.arrayOf(LabelValueType),
  /** Данные выбранной сортировки */
  selectedItem: LabelValueType,
  /** Изменить сортировку */
  onChange: PropTypes.func,
};

export const SortComponentWrapped = withSortComponent(SortComponent);
export default SortComponent;
