import React from "react";
import PropTypes from "prop-types";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

import {ReviewersType, OfferCardTypes} from "Project/prop-types/offer-card";
import {MainPageWrapped} from "Project/components/main-page/MainPage";
import SignInPage from "Project/components/sign-in-page/SignInPage";
import FavoritesPage from "Project/components/favorites-page/FavoritePage";
import {OfferPageWrapped} from "Project/components/offer-page/OfferPage";
import NotFoundPage from "Project/components/not-found-page/NotFoundPage";

const App = (props) => {
  const {username, sort, favoritesList, reviewers} = props;

  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <MainPageWrapped username={username}
              sort={sort}
              selectedSort={sort[0]}/>
          </Route>
          <Route path="/login" exact>
            <SignInPage/>
          </Route>
          <Route path="/favorites" exact>
            <FavoritesPage username={username}
              items={favoritesList}/>
          </Route>
          <Route path="/offer/:id" exact>
            <OfferPageWrapped username={username}
              reviewers={reviewers}/>
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
  /** Имя пользователя */
  username: PropTypes.string.isRequired,
  /** Список сортировки */
  sort: PropTypes.arrayOf(
      PropTypes.shape({
        /** Подпись */
        label: PropTypes.string.isRequired,
        /** Значение */
        value: PropTypes.string.isRequired,
      }).isRequired,
  ),
  /** Список выбранных городов */
  favoritesList: PropTypes.arrayOf(
      PropTypes.shape({
        /** Город */
        city: PropTypes.string.isRequired,
        /** Идентификатор */
        id: PropTypes.string.isRequired,
        /** Список предложений */
        items: PropTypes.arrayOf(OfferCardTypes).isRequired,
      }),
  ),
  /** Список комментариев пользователей */
  reviewers: PropTypes.arrayOf(ReviewersType).isRequired,
};

export default App;
