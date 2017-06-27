import React, { Component } from 'react';
import '../styles/App.css';
import Members from './Members';
import Dashboard from './Dashboard';
import ReadingList from './ReadingList';
import Home from './Home';
import Search from './Search';
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

import { Provider } from 'react-redux';
import configureStore from '../configure-store';

const store = configureStore();

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/Dashboard" component={Dashboard} />
            <Route path="/members" component={Members} />
            <Route path="/search" component={Search} />
            <Route path="/reading-list" component={ReadingList} />
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
