import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import PeopleContainer from './PeopleContainer';
import BookContainer from './BookContainer';
import './index.css';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="dashboard-main">
          <div className="dashboard-choices">
            <h2>Members</h2>
            <PeopleContainer />
          </div>
          <div className="dashboard-choices">
            <h2>Search</h2>
            <BookContainer />
          </div>
          <div className="dashboard-choices">
            <h2>Nominations</h2>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;