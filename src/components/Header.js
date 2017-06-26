import React, { Component } from 'react';

class Header extends Component {

  render() {
    return (
        <div className="nav-bar">
          <ul>
            <li className="title">    <i className="fa fa-book"></i> Book Slate</li>
          </ul>
        </div>
    );
  }
}

export default Header;
