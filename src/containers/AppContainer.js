import React from 'react';
import { Container } from 'flux/utils';
import shotsStore from '../stores/shots-store';
import { fetchShots } from '../actions/shots-actions';

class AppContainer extends React.Component {
  static getStores () {
    return [shotsStore];
  }

  static calculateState (prevState) {
    return {
      shots: shotsStore.getState(),
    };
  }

  componentDidMount () {
    fetchShots();
  }

  render () {
    console.log(this.state.shots.toJS().shots);
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {...this.state});
    });
    return (
      <div>{children}</div>
    );
  }
}

export default Container.create(AppContainer);
