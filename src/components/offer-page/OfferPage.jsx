import React from "react";
import PropTypes from "prop-types";
import {useParams} from "react-router-dom";

import {OfferCardTypes, ReviewersType} from "Project/prop-types/offer-card";
import {MapComponentWrapped} from "Project/components/map-component/MapComponent";

import ImagesList from "./images-list/offer-page-images-list";
import PropertyList from "./property-list/offer-card-property-list";
import ReviewersList from "./reviewers-list/offer-page-reviewers-list";
import NeighboursList from "./neighbours-list/offers-page-neighbours-list";
import CommentForm from "./comments-form/offer-page-comments-form";
import withOfferPage from "./hocs/with-offer-page.js";

export const STAR_WIDTH = 20;

const OfferTypes = {
  apartment: `Apartment`,
  room: `Private Room`,
  house: `House`,
  hotel: `Hotel`,
};

const OfferPage = (props) => {
  const {items, username, reviewers, neightbours} = props;
  const id = Number(useParams().id);
  const item = items[id];
  const {images, isPremium, isFavorite, title, description, rating, type, bedrooms, maxAdults, price, goods, host} = item || {};
  const bookMarkActiveClass = isFavorite
    ? `property__bookmark-button--active` : ``;
  const hostProClass = host.isPro ? `property__avatar-wrapper--pro` : ``;
  const offerReviewer = reviewers.filter((reviewer) => reviewer.id === item.id);
  const hasNeighboursList = neightbours[id] && !!neightbours[id].length;

  return (
    <>
      <div style={{display: `none`}}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select"
            viewBox="0 0 7 4">
            <path fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"/>
          </symbol>
          <symbol id="icon-bookmark"
            viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z"/>
          </symbol>
          <symbol id="icon-star"
            viewBox="0 0 13 12">
            <path fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"/>
          </symbol>
        </svg>
      </div>
      <div className="page">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a className="header__nav-link header__nav-link--profile" href="#">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">
                        {username}
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <ImagesList items={images}/>
            <div className="property__container container">
              <div className="property__wrapper">
                {isPremium && (
                  <div className="property__mark">
                    <span>
                      Premium
                    </span>
                  </div>
                )}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {title}
                  </h1>
                  <button className={`property__bookmark-button button ${bookMarkActiveClass}`}
                    type="button">
                    <svg className="property__bookmark-icon"
                      width="31"
                      height="33">
                      <use xlinkHref="#icon-bookmark"/>
                    </svg>
                    <span className="visually-hidden">
                      To bookmarks
                    </span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{width: `${rating * STAR_WIDTH}%`}}/>
                    <span className="visually-hidden">
                      Rating
                    </span>
                  </div>
                  <span className="property__rating-value rating__value">
                    {rating}
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {OfferTypes[type]}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedrooms}
                  </li>
                  <li className="property__feature property__feature--adults">
                    {maxAdults}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">
                    {`€${price}`}
                  </b>
                  <span className="property__price-text">
                    &nbsp;night
                  </span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">
                    What&apos;s inside
                  </h2>
                  <PropertyList items={goods}/>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">
                    Meet the host
                  </h2>
                  <div className="property__host-user user">
                    <div className={`property__avatar-wrapper ${hostProClass} user__avatar-wrapper`}>
                      <img className="property__avatar user__avatar"
                        src={host.avatarUrl}
                        width="74"
                        height="74"
                        alt="Host avatar"/>
                    </div>
                    <span className="property__user-name">
                      {host.name}
                    </span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {description}
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;
                    <span className="reviews__amount">
                      {offerReviewer.length}
                    </span>
                  </h2>
                  <ReviewersList items={offerReviewer}/>
                </section>
              </div>
            </div>
            <section className="property__map map">
              {hasNeighboursList && (
                <MapComponentWrapped itemsIds={neightbours[id]}/>
              )}
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              {hasNeighboursList && (
                <>
                  <h2 className="near-places__title">
                    Other places in the neighbourhood
                  </h2>
                  <NeighboursList items={items}
                    itemsIds={neightbours[id]}/>
                </>
              )}
              <CommentForm/>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

OfferPage.propTypes = {
  /** Имя пользователя */
  username: PropTypes.string.isRequired,
  /** Map - объект идентифыикаторо карточки на данные карточки предложения */
  items: PropTypes.object,
  /** Список комментариев пользователей */
  reviewers: PropTypes.arrayOf(ReviewersType).isRequired,
  /** Map - объект идентифыикаторо карточки на данные карточки предложения */
  neightbours: PropTypes.object,
};

export const OfferPageWrapped = withOfferPage(OfferPage);
export default OfferPage;
