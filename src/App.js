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

import { Provider } from 'react-redux';
import configureStore from './configure-store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
