import React from "react";
import {Link} from "react-router-dom";
import {
  // TODO: Нужна для тестов, удалить когда будет сдача проекта
  useDispatch,
} from "react-redux";

import {
  // TODO: Нужна для тестов, удалить когда будет сдача проекта
  thunks,
} from "Project/redux/auth";

import FavoriteCard from "./favorite-card/favorites-page-favorite-card";
import useFavoritePage from "./hooks/use-favorite-page";
import Empty from "./favorite-page-empty/favorite-page-empty";

const FavoritesPage = () => {
  // TODO: Нужна для тестов, удалить когда будет сдача проекта
  const dispatch = useDispatch();
  const {email, cities, offersCardsMap, offersIdsMap, handleFavoriteChange} = useFavoritePage();
  const hasCities = Boolean(cities) && Boolean(cities.length);
  const className = hasCities ? `page page--favorites` : `page page--favorites-empty`;

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
      <div className={className}>
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <Link className="header__logo-link"
                  to="/">
                  <img className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"/>
                </Link>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  {/** TODO: Нужна для тестов, удалить когда будет сдача проекта */}
                  <li className="header__nav-item user">
                    <button type="button"
                      onClick={() => dispatch(thunks.logout())}>
                        logout
                    </button>
                  </li>
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile"
                      to="/">
                      <div className="header__avatar-wrapper user__avatar-wrapper">
                      </div>
                      <span className="header__user-name user__name">
                        {email}
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {hasCities ? (

          <main className="page__main page__main--favorites">
            <div className="page__favorites-container container">
              <section className="favorites">
                <h1 className="favorites__title">
                  Saved listing
                </h1>
                <ul className="favorites__list">
                  {cities.map((it) => {
                    return (
                      <li key={`${it.id}`}
                        className="favorites__locations-items">
                        <div className="favorites__locations locations locations--current">
                          <div className="locations__item">
                            <Link className="locations__item-link"
                              to="#">
                              <span>
                                {it.name}
                              </span>
                            </Link>
                          </div>
                        </div>
                        <div className="favorites__places">
                          {offersIdsMap[it.id].map((id) => {
                            return (
                              <FavoriteCard key={`${id}`}
                                item={offersCardsMap[id]}
                                onFavoriteChange={handleFavoriteChange}/>
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
        ) : (
          <Empty/>
        )}
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

export default FavoritesPage;
