import React, { Component } from 'react';
import SingleShot from './SingleShot';
import ShotsSort from './ShotsSort';

export default class ShotsGroup extends Component {
  render () {
    const shots = this.props.shots.toJS();
    var shotsMarkup = '';
    var loading = <p class="lead text-center">Loaing...</p>;
    if (shots.isError) {
      shotsMarkup = <h2 class="lead text-center">Something went wrong. please refresh the page and try again.</h2>
    } else if (shots.done) {
      shotsMarkup = shots.data.map((shot, i) => <SingleShot key={i} shot={shot} />)
    }
    return (
      <div className="shots-group container">
        <ShotsSort {...this.props} />
        <div className="row">
          {shotsMarkup}
        </div>
        {shots.isFetching && loading}
      </div>
    )
  }
}
