import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import * as reducers from './reducers';
import Sidebar from './components/Sidebar';
import App from './components/App';

const store = createStore(combineReducers(reducers));

function run () {
  let state = store.getState();
  render(<Provider store={store}>
    <App>
      <Sidebar />
    </App>
  </Provider>, document.getElementById('container'));
}

run();
store.subscribe(run);
