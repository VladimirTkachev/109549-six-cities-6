import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {OfferCardTypes} from "Project/prop-types/offer-card";

import FavoriteCard from "./favorite-card/favorites-page-favorite-card";

const FavoritesPage = (props) => {
  const {username, items} = props;

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
                <Link className="header__logo-link"
                  to="#">
                  <img className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile"
                      to="/">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">
                        {username}
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">
                Saved listing
              </h1>
              <ul className="favorites__list">
                {items.map((it) => {
                  return (
                    <li key={`${it.id}`}
                      className="favorites__locations-items">
                      <div className="favorites__locations locations locations--current">
                        <div className="locations__item">
                          <Link className="locations__item-link"
                            to="#">
                            <span>
                              {it.city}
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="favorites__places">
                        {it.items.map((item) => {
                          return (
                            <FavoriteCard key={`${item.id}`} item={item}/>
                          );
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Link className="footer__logo-link" to="/">
            <img className="footer__logo"
              src="img/logo.svg" alt="6 cities logo"
              width="64"
              height="33"/>
          </Link>
        </footer>
      </div>
    </>
  );
};

FavoritesPage.propTypes = {
  /** Ися пользователя */
  username: PropTypes.string.isRequired,
  /** Список выбранных городов */
  items: PropTypes.arrayOf(
      PropTypes.shape({
        /** Город */
        city: PropTypes.string.isRequired,
        /** Идентификатор */
        id: PropTypes.string.isRequired,
        /** Список предложений */
        items: PropTypes.arrayOf(OfferCardTypes).isRequired,
      }),
  ),
};

export default FavoritesPage;
