import React from "react";
import PropTypes from "prop-types";

import {ReviewersType} from "../../../prop-types/offer-card";
import {STAR_WIDTH} from "../OfferPage";

const ReviewersList = ({items}) => {
  return (
    <ul className="reviews__list">
      {items.map((it, index) => {
        return (
          <li key={`${it.id}#${index}`}
            className="reviews__item">
            <div className="reviews__user user">
              <div className="reviews__avatar-wrapper user__avatar-wrapper">
                <img className="reviews__avatar user__avatar"
                  src={it.user.avatarUrl}
                  width="54"
                  height="54"
                  alt="Reviews avatar"/>
              </div>
              <span className="reviews__user-name">
                {it.user.name}
              </span>
            </div>
            <div className="reviews__info">
              <div className="reviews__rating rating">
                <div className="reviews__stars rating__stars">
                  <span style={{width: `${it.rating * STAR_WIDTH}%`}}/>
                  <span className="visually-hidden">
                    Rating
                  </span>
                </div>
              </div>
              <p className="reviews__text">
                {it.comment}
              </p>
              <time className="reviews__time" dateTime={new Date(it.date).toLocaleString(`en-CA`, {dateStyle: `short`})}>
                {new Date(it.date).toLocaleString(`en-US`, {year: `numeric`, month: `long`})}
              </time>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

ReviewersList.propTypes = {
  /** Список комментариев пользователей */
  items: PropTypes.arrayOf(ReviewersType).isRequired,
};

export default ReviewersList;
