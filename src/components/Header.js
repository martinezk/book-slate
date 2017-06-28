import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
        <div className="nav-bar">
          <ul>
            <li className="title"><Link to="/"><i className="fa fa-book"></i> Book Slate</Link></li>
          </ul>
        </div>
    );
  }
}

export default Header;
