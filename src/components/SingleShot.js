import React, { Component } from 'react';

export default class SingleShot extends Component {
  render () {
    const { shot } = this.props;
    var d = new Date(shot.created_at);
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const created = `${months[d.getMonth()]} ${d.getDate() < 10 ? '0'+d.getDate() : d.getDate()}, ${d.getFullYear()}`;
    return (
      <div className="col-sm-3">
        <a href={shot.html_url} className="shot">
          <img src={shot.images.normal} alt="" className="shot-img img-fluid" />
          <p className="shot-title">{shot.title}</p>
          <small className="text-muted">{created}</small>
          <ul className="text-muted text-right list-inline">
            <li className="list-inline-item">
              <i className="fa fa-eye"></i> <span>{shot.views_count}</span>
            </li>
            <li className="list-inline-item">
              <i className="fa fa-comment"></i> <span>{shot.comments_count}</span>
            </li>
            <li className="list-inline-item">
              <i className="fa fa-heart"></i> <span>{shot.likes_count}</span>
            </li>
          </ul>
        </a>
      </div>
    );
  }
}
