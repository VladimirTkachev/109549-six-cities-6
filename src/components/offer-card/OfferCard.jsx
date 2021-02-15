import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {OfferCardTypes} from "../../prop-types/offer-card";

const STAR_WIDTH = 20;

const OfferCard = (props) => {
  const {item, onMouseEnter, onMouseLeave} = props;
  const {id, isPremium, previewImage, price, isFavorite, rating, title, type} = item;
  const activeBookmarkClass = isFavorite ? `place-card__bookmark-button--active` : ``;

  return (
    <article className="cities__place-card place-card"
      onMouseEnter={(evt) => onMouseEnter(item, evt)}
      onMouseLeave={(evt) => onMouseLeave(evt)}>
      {isPremium && (
        <div className="place-card__mark">
          <span>
            Premium
          </span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">
              {`€${price}`}
            </b>
            <span className="place-card__price-text">
              / night
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
          <Link to={`offer/${id}`}>
            {title}
          </Link>
        </h2>
        <p className="place-card__type">
          {type}
        </p>
      </div>
    </article>
  );
};

OfferCard.defaultProps = {
  item: {},
  onMouseEnter: () => undefined,
  onMouseLeave: () => undefined,
};

OfferCard.propTypes = {
  /** Данные карточки */
  item: OfferCardTypes.isRequired,
  /** Обработчик мыши при наведении наэлемент */
  onMouseEnter: PropTypes.func.isRequired,
  /** Обработчик мыши при уходе с элемента */
  onMouseLeave: PropTypes.func.isRequired,
};

export default OfferCard;
