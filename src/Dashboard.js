import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import PeopleContainer from './PeopleContainer';
import './index.css';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <ul>
          <li>Members</li>
          <li>Search Books</li>
          <li>Nominations</li>
        </ul>
        <PeopleContainer />
        <Footer />
      </div>
    );
  }
}

export default Dashboard;