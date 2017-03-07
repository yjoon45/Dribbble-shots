import React from 'react';
import { render } from 'react-dom';
import './vendor-plugin';

import AppContainer from './containers/AppContainer';
import Header from './components/Header';
import ShotsGroup from './components/ShotsGroup';

render((
  <AppContainer>
    <Header />
    <ShotsGroup />
  </AppContainer>
), document.getElementById('container'));
