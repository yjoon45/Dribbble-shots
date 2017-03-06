import React from 'react';
import { connect } from 'react-redux';
import { addDeck, showAddDeck, hideAddDeck } from '../actions';

const mapStateToProps = ({ decks, addingDeck}) => ({
  decks,
  addingDeck
});

const mapDispatchToProps = dispatch => ({
  addDeck: name => dispatch(addDeck(name)),
  showAddDeck: () => dispatch(showAddDeck()),
  hideAddDeck: () => dispatch(hideAddDeck())
});

const Sidebar = React.createClass({
  componentDidUpdate (e) {
    var el = this.refs.add;
    if (el) el.focus();
  },
  render () {
    let props = this.props;
    return (
      <div class="col-sm-4">
        <h4>All decks</h4>
        <button onClick={e => this.props.showAddDeck()}>Add Deck</button>
        <ul>
          {props.decks.map((deck, i) =>
            <li key={i}>{deck.name}</li>
          )}
        </ul>
        {props.addingDeck && <input ref="add" onKeyPress={this.createDeck} />}
      </div>
    );
  },
  createDeck (e) {
    if (e.which !== 13) {
      return;
    }
    var name = this.refs.add.value;
    this.props.addDeck(name);
    this.props.hideAddDeck();
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
