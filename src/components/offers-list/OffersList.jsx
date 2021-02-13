import React, {useCallback, useState} from "react";
import PropTypes from "prop-types";

import {OfferCardTypes} from "../../prop-types/offer-card";
import OfferCard from "../offer-card/OfferCard";

const OffersList = (props) => {
  const {items} = props;
  const [, setActiveItem] = useState(null);
  const handleMouseEnter = useCallback((item) => {
    setActiveItem(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);

  return (
    <div className="cities__places-list places__list tabs__content">
      {items.map((card) => {
        return (
          <OfferCard
            key={`${card.id}`}
            item={card}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}/>
        );
      })}
    </div>
  );
};

OffersList.propTypes = {
  /** Список карточек предложений */
  items: PropTypes.arrayOf(OfferCardTypes).isRequired,
};

export default OffersList;
