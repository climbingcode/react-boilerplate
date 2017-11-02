import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducer.js';

// Create Redux Store
const store = createStore(
	combineReducers(reducers),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={ store }>
    <App/>
  </Provider>
, document.getElementById('root'));
