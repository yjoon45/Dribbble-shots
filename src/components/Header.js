import React from 'react';

export default function Header (props) {
  return (
    <nav class="navbar navbar-toggleable-md navbar-inverse bg-inverse fixed-top">
      <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <a class="navbar-brand" href="#">Dribbble</a>
      <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active dropdown">
            <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Shots</a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">Popular</a>
              <a href="#" className="dropdown-item">Recent</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
