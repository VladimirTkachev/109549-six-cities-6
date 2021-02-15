import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

import {OfferCardTypes} from "../../prop-types/offer-card";
import OffersList from "../offers-list/OffersList";

const MainPage = (props) => {
  const {username, title, sort, selectedSort, selectedCity, citiesList, offersCards} = props;
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
              <ul className="locations__list tabs__list">
                {citiesList.map((it) => {
                  const active = it.id === selectedCity.id ? `tabs__item--active` : ``;

                  return (
                    <li key={it.id}
                      className="locations__item">
                      <Link className={`locations__item-link tabs__item ${active}`}
                        to="#">
                        <span>
                          {it.name}
                        </span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          </div>
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">
                  Places
                </h2>
                <b className="places__found">
                  {title}
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
                  <ul className="places__options places__options--custom places__options--opened">
                    {sort.map((it) => {
                      const active = it.value === selectedSort.value ? `places__option--active` : ``;

                      return (
                        <li key={it.value}
                          className={`places__option ${active}`}
                          tabIndex="0">
                          {it.label}
                        </li>
                      );
                    })}
                  </ul>
                </form>
                <OffersList items={offersCards}/>
              </section>
              <div className="cities__right-section">
                <section className="cities__map map"/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

const LabelValueType = PropTypes.shape({
  /** Подпись */
  label: PropTypes.string.isRequired,
  /** Значение */
  value: PropTypes.string.isRequired,
});

const CityType = PropTypes.shape({
  /** Имя */
  name: PropTypes.string.isRequired,
  /** Идентификатор */
  id: PropTypes.string.isRequired,
});

MainPage.propTypes = {
  /** Имя пользователя */
  username: PropTypes.string.isRequired,
  /** Список городов */
  citiesList: PropTypes.arrayOf(CityType.isRequired),
  /** Выбранный город */
  selectedCity: CityType.isRequired,
  /** Подпись страницы выбора предложений */
  title: PropTypes.string.isRequired,
  /** Список сортировка */
  sort: PropTypes.arrayOf(LabelValueType),
  /** Данные выбранной сортировки */
  selectedSort: LabelValueType.isRequired,
  /** Список карточек предложений */
  offersCards: PropTypes.arrayOf(OfferCardTypes).isRequired,
};

export default MainPage;
