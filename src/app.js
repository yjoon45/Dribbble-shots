import React, { Component } from 'react';
import { render } from 'react-dom';

function App (props) {
  return props.children;
}

render(<App>Hello world</App>, document.getElementById('container'));
