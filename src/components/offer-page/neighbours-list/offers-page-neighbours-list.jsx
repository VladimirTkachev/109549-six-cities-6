import React from "react";
import PropTypes from "prop-types";

import OfferCard from "Project/components/offer-card/OfferCard";
import {OfferCardTypes} from "Project/prop-types/offer-card";

const NeighboursList = ({items}) => {
  return (
    <div className="near-places__list places__list">
      {items.map((it, index) => {
        return (
          <OfferCard key={`${it.id}#${index}`}
            item={it}/>
        );
      })}
    </div>
  );
};

NeighboursList.propTypes = {
  /** Список элементов */
  items: PropTypes.arrayOf(OfferCardTypes).isRequired,
};

export default NeighboursList;
