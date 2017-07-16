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
          <Link className={page==="/members" ? "active" : ""} to="/members">Members</Link>
          <Link className={page==="/search" ? "active" : ""} to="/search">Book Search</Link>
          <Link className={page==="/reading-list" ? "active" : ""} to="/reading-list">Reading List</Link>
          <Link className={page==="/about" ? "active" : ""} to="/about" style={floatR} >About</Link>
        </div>
    );
  }
}

export default TopNav;
