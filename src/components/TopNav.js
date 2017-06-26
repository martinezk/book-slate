import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNav extends Component {

  render() {
    return (
        <div className="top-nav">
          <Link to="/members">Members</Link>
          <Link to="/search">Book Search</Link>
          <Link to="/reading-list">Reading List</Link>
        </div>
    );
  }
}

export default TopNav;
