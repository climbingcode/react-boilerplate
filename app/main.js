import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';

import { combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducer.js';

// Create Redux Store

// Note: Creating the store object here
// Note: Pass all the reducers so they are available through the whole of the app
// Note: __REDUX_DEVTOOLS_EXTENSION__ allows you to use the redux chrome extension
// Note: Thunk middleware will allow you to return a function or object in actions / useful when using an api
const store = createStore(
	combineReducers(reducers),
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
	applyMiddleware(thunk)
);

ReactDOM.render(
	// Provide to store to the whole app
  <Provider store={ store }>
    <App/>
  </Provider>
, document.getElementById('root'));
