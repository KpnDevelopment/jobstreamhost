import { combineReducers, createStore } from "@reduxjs/toolkit";
import { applyMiddleware } from "redux";
import { localstrorage } from "../utils/middleware";

import { loginReducer } from "../reducers/login";
import { connectRouter } from "connected-react-router";
import { createBrowserHistory } from "history";
import logger from "redux-logger";
export const history = createBrowserHistory();
// import logger from 'redux-logger'

// And use redux-batch as an example of adding enhancers

const reducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    login: loginReducer,
  });

const getmiddleware = () => {
  return applyMiddleware(localStorage, logger);
};

export const store = createStore(reducer(history), getmiddleware());
