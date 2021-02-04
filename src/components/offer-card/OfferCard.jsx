import React from "react";
import PropTypes from "prop-types";

const STAR_WIDTH = 20;

const OfferCard = ({item = {}}) => {
  const {mark, href, img, price, attribute, hasBookmark, rating, name, type} = item;
  const activeBookmarkClass = hasBookmark ? `place-card__bookmark-button--active` : ``;

  return (
    <article className="cities__place-card place-card">
      {mark && (
        <div className="place-card__mark">
          <span>
            {mark}
          </span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href={href}>
          <img className="place-card__image"
            src={img}
            width="260"
            height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              {price}
            </b>
            <span className="place-card__price-text">
              {`/ ${attribute}`}
            </span>
          </div>
          <button className={`place-card__bookmark-button ${activeBookmarkClass} button`}
            type="button">
            <svg className="place-card__bookmark-icon"
              width="18"
              height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">
              To bookmarks
            </span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{
              width: `${rating * STAR_WIDTH}%`
            }}/>
            <span className="visually-hidden">
              Rating
            </span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href={href}>
            {name}
          </a>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
};

OfferCard.propTypes = {
  /** Данные карточки */
  item: PropTypes.shape({
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
};

export default OfferCard;
