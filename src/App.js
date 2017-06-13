import React, { Component } from 'react';
import './App.css';
import './index.css';
import Members from './Members';
import Dashboard from './Dashboard';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'


class App extends Component {


  render() {
    return (
      <Router>
        <div>
          <Route path="/" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
