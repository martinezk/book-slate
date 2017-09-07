import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TopNav extends Component {

  render() { 
    let floatR ={
      float: "right"
    };
    let page = window.location.pathname.toLowerCase();

    return (
        <div className="top-nav">
          <Link className={page==="/dashboard" ? "active" : ""} to="/dashboard">Main</Link>
          <Link 
            title="Manage current club members"
            className={page==="/members" ? "active" : ""} 
            to="/members">
            Members
          </Link>
          <Link 
            title="Discover your group's next read"
            className={page==="/search" ? "active" : ""} 
            to="/search">
            Book Search
          </Link>
          <Link 
            title="Nominate your next reading adventure"
            className={page==="/reading-list" ? "active" : ""} 
            to="/reading-list">
            Reading List
          </Link>
        </div>
    );
  }
}

export default TopNav;
