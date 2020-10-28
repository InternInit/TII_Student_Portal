import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import * as Sentry from "@sentry/browser";
import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import { Provider } from "react-redux";
import logger from "redux-logger";

if (!process.env.NODE_ENV || process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn:
      "https://0dfd0aeae06045b0b2f2759dcbcc0efa@o412197.ingest.sentry.io/5288578",
  });
}

//const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
