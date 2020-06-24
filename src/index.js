import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as Sentry from '@sentry/browser';

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'production'){
  Sentry.init({dsn: "https://0dfd0aeae06045b0b2f2759dcbcc0efa@o412197.ingest.sentry.io/5288578"});
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
