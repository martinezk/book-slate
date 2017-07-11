import React, { Component } from 'react';
import '../styles/App.css';
import Members from './Members';
import Dashboard from './Dashboard';
import ReadingList from './ReadingList';
import SearchResultContainer from './SearchResultContainer';
import Home from './Home';
import BasePage from './BasePage';
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
        <Router>
          <div>
            <Route exact path="/" render = { (routeProps) =>(
              <Home  {...props} {...routeProps} />
            )} />
            <Route path="/Dashboard" render= {(routeProps) => (
              <BasePage key= {routeProps.location.pathname} {...props} {...routeProps}> 
                <Dashboard {...props} {...routeProps} />
              </BasePage>
            )} />
            <Route path="/members" render = {(routeProps) =>(
              <BasePage key= {routeProps.location.pathname} {...props} {...routeProps}> 
                <Members/>
              </BasePage>
            )} />
            <Route path="/search" render = {(routeProps) =>(
              <BasePage key= {routeProps.location.pathname} {...props} {...routeProps}> 
                <SearchResultContainer/>
              </BasePage>
            )} />
            <Route path="/reading-list" render = {(routeProps) =>(
              <BasePage key= {routeProps.location.pathname} {...props} {...routeProps}> 
                <ReadingList/>
              </BasePage>
            )} />
           </div>
        </Router>
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
