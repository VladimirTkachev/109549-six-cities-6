import React from "react";
import PropTypes from "prop-types";

import OfferCard from "Project/components/offer-card/OfferCard";

import withOffersList from "./hoc/with-offers-list";

const OffersList = (props) => {
  const {items, itemsIds, onMouseEnter, onMouseLeave} = props;

  return (
    <div className="cities__places-list places__list tabs__content">
      {itemsIds.map((id) => {
        const card = items[id];

        return (
          <OfferCard
            key={`${id}`}
            item={card}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}/>
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  /** Список идентификаторов карточек предложений */
  itemsIds: PropTypes.arrayOf(PropTypes.number),
  /** Map - объект идентифыикаторо карточки на данные карточки предложения */
  items: PropTypes.object,
  /** Обработчик мыши при наведении на элемент */
  onMouseEnter: PropTypes.func.isRequired,
  /** Обработчик мыши при уходе с элемента */
  onMouseLeave: PropTypes.func.isRequired,
};

export const OffersListWrapped = withOffersList(OffersList);
export default OffersList;
