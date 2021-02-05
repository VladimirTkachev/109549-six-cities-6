import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import MainPage from "../main-page/MainPage";
import SignInPage from "../sign-in-page/SignInPage";
import FavoritesPage from "../favorites-page/FavoritePage";
import OfferPage from "../offer-page/OfferPage";
import NotFoundPage from "../not-found-page/NotFoundPage";

const App = ({offersCards}) => {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPage offersCards={offersCards}/>
          </Route>
          <Route path="/login" exact>
            <SignInPage/>
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage/>
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

App.propTypes = {
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

export default App;
