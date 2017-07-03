import React, { Component } from 'react';
import '../styles/App.css';
import Members from './Members';
import Dashboard from './Dashboard';
import ReadingList from './ReadingList';
import Search from './Search';
import Home from './Home';
import {connect} from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import { Provider } from 'react-redux';
import configureStore from '../configure-store';

class AppRouter extends Component {
  render (){
    const props = this.props;
    console.log(props);
    return (
        <div>
          <Route exact path="/" render = { (routeProps) =>(
            <Home  {...props} {...routeProps}  />
          )} />
          <Route path="/Dashboard" render= {(routeProps) => (
            <Dashboard {...props} {...routeProps} />
          )} />
          <Route path="/members" render = {(routeProps) =>(
            <Members {...props} {...routeProps} />
           )} />
          <Route path="/search" render = {(routeProps) =>(
            <Search {...props} {...routeProps} />
           )} />
          <Route path="/reading-list" render = {(routeProps) =>(
            <ReadingList {...props} {...routeProps} />
           )} />
        </div>
    )
  }
}

const store = configureStore();

class App extends Component {
  render() {
    const AppController = (connect(function(state, props){
      console.log(state);
      return {
        books: state.books,
        people: state.people
      };
    })(AppRouter)) 
    return (
      <Router>
        <Provider store={store}>
          <AppController {...this.props} />
        </Provider>
      </Router>
    );
  }
}

export default App;
