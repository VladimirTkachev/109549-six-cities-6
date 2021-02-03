import React from "react";
import PropTypes from "prop-types";

import OfferCard from "../offer-card/OfferCard";

const MainPage = ({offersCards}) => {
  const hasCards = !!offersCards && !!offersCards.length;

  return (
    <>
      {hasCards && offersCards.map((card) => {
        return (
          <OfferCard key={card.id} item={card}/>
        );
      })}
    </>
  );
};

MainPage.propTypes = {
  /** Список карточек предложений */
  offersCards: PropTypes.arrayOf(
      PropTypes.shape({
        /** Идентификатор карточки */
        id: PropTypes.string.isRequired,
        /** Подпись с дополнительной информацие */
        mark: PropTypes.string,
        /** Ссылка длля перехода в карточку */
        href: PropTypes.string.isRequired,
        /** Ссылка на изображение карточки */
        img: PropTypes.string.isRequired,
        /** Цена */
        price: PropTypes.string.isRequired,
        /** Дополнительная подпись для цены */
        attribute: PropTypes.string.isRequired,
        /** Присутствует ли карточка в закладках */
        hasBookmark: PropTypes.bool,
        /** ОЦенка */
        rating: PropTypes.number.isRequired,
        /** Наименование карточки */
        name: PropTypes.string.isRequired,
        /** Тип */
        type: PropTypes.string.isRequired,
      }).isRequired,
  ),
};

export default MainPage;
