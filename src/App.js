import React, { Component } from 'react';
import './App.css';
import './index.css';
import Members from './Members';
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
        <div className="App">
          <Header />        
          <div className="middle">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/Members">Members</Link></li>
            </ul>

            <hr/>

            <Route exact path="/" component={Home}/>
            <Route path="/Members" component={Members}/>
          </div>        
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
