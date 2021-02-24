import React, {useCallback, useState, useEffect} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {MapComponentWrapped} from "Project/components/map-component/MapComponent";
import {OffersListWrapped} from "Project/components/offers-list/OffersList";
import {CitiesListWrapped} from "Project/components/cities-list/CitiesList";
import {SortComponentWrapped} from "Project/components/sort-component/SortComponent";
import Spinner from "Project/components/spinner/Spinner";

import withMainPage from "./hocs/with-main-page.js";

const MainPage = (props) => {
  const {username, selectedSort, offersIds, fetchOffersList} = props;
  const [activeItem, setActiveItem] = useState(null);
  const [fetching, setFetching] = useState(false);
  const handleMouseEnter = useCallback((item) => {
    setActiveItem(item);
  }, []);
  const handleMouseLeave = useCallback(() => {
    setActiveItem(null);
  }, []);

  useEffect(() => {
    setFetching(true);
    fetchOffersList().then(() => {
      setFetching(false);
    });
  }, [fetchOffersList]);

  if (fetching || !offersIds.length) {
    return (
      <Spinner/>
    );
  }
  const numberOfPlaces = offersIds.length;

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
      <div className="page page--gray page--main">
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link header__logo-link--active">
                  <img className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width="81"
                    height="41"/>
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile"
                      to="">
                      <div className="header__avatar-wrapper user__avatar-wrapper"/>
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
        <main className="page__main page__main--index">
          <h1 className="visually-hidden">
            Cities
          </h1>
          <div className="tabs">
            <section className="locations container">
              <CitiesListWrapped/>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">
                  Places
                </h2>
                <b className="places__found">
                  {`${numberOfPlaces} places to stay in Amsterdam`}
                </b>
                <form className="places__sorting"
                  action="#"
                  method="get">
                  <span className="places__sorting-caption">
                    Sort by
                  </span>
                  <span className="places__sorting-type"
                    tabIndex="0">
                    {selectedSort.label}
                    <svg className="places__sorting-arrow"
                      width="7"
                      height="4">
                      <use xlinkHref="#icon-arrow-select"/>
                    </svg>
                  </span>
                  <SortComponentWrapped/>
                </form>
                <OffersListWrapped
                  itemsIds={offersIds}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  <MapComponentWrapped
                    itemsIds={offersIds}
                    activeItem={activeItem}/>
                </section>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

MainPage.defaultProps = {
  fetchOffersList: () => undefined,
};

const LabelValueType = PropTypes.shape({
  /** Подпись */
  label: PropTypes.string.isRequired,
  /** Значение */
  value: PropTypes.string.isRequired,
});

MainPage.propTypes = {
  /** Имя пользователя */
  username: PropTypes.string.isRequired,
  /** Данные выбранной сортировки */
  selectedSort: LabelValueType.isRequired,
  /** Список идентификаторов карточек предложений */
  offersIds: PropTypes.arrayOf(PropTypes.number),
  /** Получить список предложение */
  fetchOffersList: PropTypes.func,
};

export const MainPageWrapped = withMainPage(MainPage);
export default MainPage;
