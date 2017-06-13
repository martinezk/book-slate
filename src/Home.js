import React, { Component } from 'react';
import './App.css';
import './index.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Home extends Component {

  render() {
    return (
      <div className="home">
        <div className="nav-bar">
          <ul>
            <li className="login"><Link to="/Dashboard">Login</Link></li>
            <li>Bookmate</li>
          </ul>
        </div>
        <div className="main">
          <h1>Stay connected to friends. Manage your bookclub in one simple place</h1>
          <button type="submit">Signup</button>
        </div>
      </div>
    );
  }
}

export default Home;
