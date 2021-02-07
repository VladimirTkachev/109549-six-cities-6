import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainPage from "../main-page/MainPage";
import SignInPage from "../sign-in-page/SignInPage";
import FavoritesPage from "../favorites-page/FavoritePage";
import OfferPage from "../offer-page/OfferPage";
import NotFoundPage from "../not-found-page/NotFoundPage";

const App = (props) => {
  const {username, mainTitle, sort, citiesList, offersCards, favoritesList} = props;

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage username={username}
              title={mainTitle}
              sort={sort}
              selectedSort={sort[0]}
              citiesList={citiesList}
              selectedCity={citiesList[3]}
              offersCards={offersCards}/>
          </Route>
          <Route path="/login" exact>
            <SignInPage/>
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage username={username}
              items={favoritesList}/>
          </Route>
          <Route path="/offer/:id" exact>
            <OfferPage/>
          </Route>
          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
      </Router>
    </>
  );
};

const OfferCardType = PropTypes.shape({
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
});

App.propTypes = {
  /** Имя пользователя */
  username: PropTypes.string.isRequired,
  /** Список городов */
  citiesList: PropTypes.arrayOf(
      PropTypes.shape({
        /** Имя */
        name: PropTypes.string.isRequired,
        /** Идентификатор */
        id: PropTypes.string.isRequired,
      }).isRequired,
  ),
  /** Подпись страницы выбора предложений */
  mainTitle: PropTypes.string.isRequired,
  /** Список сортировка */
  sort: PropTypes.arrayOf(
      PropTypes.shape({
        /** Подпись */
        label: PropTypes.string.isRequired,
        /** Значение */
        value: PropTypes.string.isRequired,
      }).isRequired,
  ),
  /** Список карточек предложений */
  offersCards: PropTypes.arrayOf(OfferCardType),
  /** Список выбранных городов */
  favoritesList: PropTypes.arrayOf(
      PropTypes.shape({
        /** Город */
        city: PropTypes.string.isRequired,
        /** Идентификатор */
        id: PropTypes.string.isRequired,
        /** Список предложений */
        items: PropTypes.arrayOf(OfferCardType).isRequired,
      }),
  ),
};

export default App;
