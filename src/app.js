import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore, combineReducers } from 'redux';

const addDeck = name => ({
  type: 'ADD_DECK',
  data: name
});
const showAddDeck = () => ({type: 'SHOW_ADD_DECK'});
const hideAddDeck = () => ({type: 'HIDE_ADD_DECK'});

const cards = (state, action) => {
  switch (action.type) {
    case 'ADD_CARD': {
      let newCard = Object.assign({}, action.data, {
        score: 1,
        id: +new Date
      });
      return state.concat(newCard);
    }
    default: return state || [];
  }
};

const decks = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK': {
      let newDeck = {name: action.data, id: +new Date};
      return state.concat(newDeck);
    }
    default: return state || [];
  }
};

const addingDeck = (state, action) => {
  switch (action.type) {
    case 'SHOW_ADD_DECK': return true;
    case 'HIDE_ADD_DECK': return false;
    default: return !!state;
  }
}

const store = createStore(combineReducers({
  cards,
  decks,
  addingDeck
}));

const Sidebar = React.createClass({
  render () {
    let props = this.props;
    return (
      <div class="col-sm-4">
        <h4>All decks</h4>
        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}>{deck.name}</li>
          )}
        </ul>
        {props.addingDeck && <input ref="add" />}
      </div>
    );
  }
});

const App = (props) => {
  return <div class="container-fluid">
    <div class="row">{props.children}</div>
  </div>;
};

function run () {
  let state = store.getState();
  render(<App>
    <Sidebar decks={state.decks} addingDeck={state.addingDeck} />
  </App>, document.getElementById('container'));
}

run();
store.subscribe(run);
