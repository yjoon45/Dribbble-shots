import React, { Component } from 'react';

export default class ShotsSort extends Component {
  handleChange (e) {
    this.refs.sortForm.submit();
  }

  render () {
    const { sort } = this.props.location.query;
    return (
      <form ref="sortForm" method="get" class="form-inline sorting-bar">
        <div className="form-group">
          <select defaultValue={sort || 'popular'} onChange={this.handleChange.bind(this)} name="sort" class="form-control">
            <option value="popular">Popular</option>
            <option value="recent">Recent</option>
            <option value="views">Most Viewed</option>
            <option value="comments">Most Commented</option>
          </select>
        </div>
      </form>
    );
  }
}
