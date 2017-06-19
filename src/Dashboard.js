import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import PeopleContainer from './PeopleContainer';
import './index.css';
import Search from './Search';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="dashboard-main">
          <ul>
            <li>Members</li>
            <PeopleContainer />
            <li>Search Books</li>
            <Search />
            <li>Nominations</li>
          </ul>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;