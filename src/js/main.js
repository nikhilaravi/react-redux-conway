import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore.js';
import { Provider } from 'react-redux';
import App from './components/App.js';
import reducer from './reducers';

require('../css/main.css');

const store = configureStore();

let rootElement = document.getElementById('react-content');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
