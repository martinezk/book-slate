import React, { Component } from 'react';
import BasePage from './BasePage';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

  render() {
    return (
      <BasePage>
        <div className="dashboard-choices">
          <Link to="/members"><h2>Members</h2>
          <i className="fa fa-user-circle-o fa-5x" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="dashboard-choices">
          <Link to="/search"><h2>Search for Books</h2>
          <i className="fa fa-search fa-5x" aria-hidden="true"></i>
          </Link>
        </div>
        <div className="dashboard-choices">
          <Link to="/reading-list">
          <h2>Up Next</h2>
          <i className="fa fa-bookmark fa-5x" aria-hidden="true"></i>
          </Link>
        </div>
      </BasePage>
    );
  }
}

export default Dashboard;