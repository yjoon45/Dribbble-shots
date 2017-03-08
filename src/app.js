import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from './containers/AppContainer';
import ShotsGroup from './components/ShotsGroup';
import './vendor-plugin';

render((
  <Router history={browserHistory}>
    <Route path="/" component={AppContainer}>
      <IndexRoute component={ShotsGroup} />
    </Route>
  </Router>
), document.getElementById('container'));
