import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <div className="dashboard-choices">
          <Link to="/members"><h2>Members</h2>
          <i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
          </Link>
          <h3>View current members</h3>
        </div>
        <div className="dashboard-choices">
          <Link to="/search"><h2>Search</h2>
          <i className="fa fa-search fa-5x" aria-hidden="true"></i>
          </Link>
          <h3>Look for books</h3>
        </div>
        <div className="dashboard-choices">
          <Link to="/reading-list">
          <h2>Reading List</h2>
          <i className="fa fa-bookmark fa-5x" aria-hidden="true"></i>
          </Link>
          <h3>View upcoming books</h3>
        </div>
      </div>
    );
  }
}

export default Dashboard;