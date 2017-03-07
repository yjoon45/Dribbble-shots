import React, { Component } from 'react';
import SingleShot from './SingleShot';

export default class ShotsGroup extends Component {
  render () {
    const shots = this.props.shots.toJS().shots;
    var shotsMarkup = '';
    if (shots.isFetching) {
      shotsMarkup = <h2 class="lead text-center">Loading...</h2>
    } else if (shots.isError) {
      shotsMarkup = <h2 class="lead text-center">Something went wrong. please refresh the page and try again.</h2>
    } else if (shots.done) {
      shotsMarkup = shots.data.map((shot, i) => <SingleShot key={i} shot={shot} />)
    }
    return (
      <div className="shots-group container">
        <div className="row">
          {shotsMarkup}
        </div>
      </div>
    )
  }
}
