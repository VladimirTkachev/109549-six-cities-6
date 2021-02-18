import React from "react";
import PropTypes from "prop-types";

import {OfferCardTypes} from "../../prop-types/offer-card";
import OfferCard from "../offer-card/OfferCard";

const OffersList = (props) => {
  const {items, onMouseEnter, onMouseLeave} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {items.map((card) => {
        return (
          <OfferCard
            key={`${card.id}`}
            item={card}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}/>
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  /** Список карточек предложений */
  items: PropTypes.arrayOf(OfferCardTypes).isRequired,
  /** Обработчик мыши при наведении на элемент */
  onMouseEnter: PropTypes.func.isRequired,
  /** Обработчик мыши при уходе с элемента */
  onMouseLeave: PropTypes.func.isRequired,
};

export default OffersList;
