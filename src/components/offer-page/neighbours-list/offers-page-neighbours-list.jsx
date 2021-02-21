import React from "react";
import PropTypes from "prop-types";

import OfferCard from "Project/components/offer-card/OfferCard";

const NeighboursList = ({items, itemsIds}) => {
  return (
    <div className="near-places__list places__list">
      {itemsIds.map((id, index) => {
        const card = items[id];

        return (
          <OfferCard key={`${id}#${index}`}
            item={card}/>
        );
      })}
    </div>
  );
};

NeighboursList.propTypes = {
  /** Список идентификаторов карточек соседних предложений */
  itemsIds: PropTypes.arrayOf(PropTypes.number),
  /** Map - объект идентифыикаторо карточки на данные карточки предложения */
  items: PropTypes.object,
};

export default NeighboursList;
