import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import PeopleContainer from './PeopleContainer';
import BookContainer from './BookContainer';
import TopNav from './TopNav';
import '../styles/index.css';

class Dashboard extends Component {

  render() {
    return (
      <div>
        <Header />
        <div className="dashboard-main">
          <TopNav />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Dashboard;