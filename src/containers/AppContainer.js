import React from 'react';
import { Container } from 'flux/utils';
import shotsStore from '../stores/shots-store';
import { fetchShots } from '../actions/shots-actions';
import { handleScroll } from '../utils/ui-controls';
import Header from '../components/Header';

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
    const { sort } = this.props.location.query;
    fetchShots({page: 1, query: sort ? `sort=${sort}` : 'popular'});
    handleScroll();
  }

  render () {
    const children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {...this.state, ...this.props});
    });
    return (
      <div>
        <Header />
        {children}
      </div>
    );
  }
}

export default Container.create(AppContainer);
