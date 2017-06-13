import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Members from './Members';

class Dashboard extends Component {

  render() {
    return (
      <div className="container">
        <Header />

        <Footer />
      </div>
    );
  }
}

export default Dashboard;