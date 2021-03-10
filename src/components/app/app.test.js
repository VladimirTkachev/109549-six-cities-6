import React from "react";
import * as redux from "react-redux";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import {render, screen} from "@testing-library/react";
import configureStore from "redux-mock-store";

import App from "./App";

const mockStore = configureStore({});

const initialState = {
  cities: {
    selectedCity: {
      name: `Paris`,
      id: `Paris`,
    },
    cities: [
      {
        name: `Paris`,
        id: `Paris`,
      },
    ],
  },
  offers: {
    sort: {
      label: `Popular`,
      value: `popular`,
    },
    offersIdsMap: {
      Paris: [1],
    },
    offerCardsMap: {
      1: {
        id: 1,
        location: {
          latitude: 1,
          longitude: 1,
        },
        city: {
          location: {
            latitude: 1,
            longitude: 1,
          },
        },
      },
    },
  },
  auth: {
    user: {
      email: ``,
    },
  },
};

describe(`Test routing`, () => {
  jest.spyOn(redux, `useSelector`);
  jest.spyOn(redux, `useDispatch`);

  it(`Render 'MainPage' when user navigate to '/' url`, () => {
    const history = createMemoryHistory();

    render(
        <redux.Provider store={mockStore(initialState)}>
          <Router history={history}>
            <App />
          </Router>
        </redux.Provider>
    );

    expect(screen.getByText(/1 places to stay/i)).toBeInTheDocument();
  });
});
