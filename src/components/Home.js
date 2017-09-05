import React, { Component } from 'react';
import '../styles/App.css';
import '../styles/index.css';
import Header from './Header';
import {
  Link
} from 'react-router-dom'

class Home extends Component {

  render() {
    console.log(this.props);
    return (
      <div className="home">
        <div className="nav-bar">
          <ul>
            <li className="login"><Link title="Login with Test Login" to="/Dashboard">Demo Login</Link></li>
            <li><Header /></li>
          </ul>
        </div>
        <div className="main">    
          <img src={ require('../images/home2.jpg') }  alt="readers on a train"/>
          <a className="photo-credit" href="http://unsplash.com/@ratz03?utm_medium=referral&amp;utm_campaign=photographer-credit&amp;utm_content=creditBadge" target="_blank" rel="noopener noreferrer"
            title="Download free do whatever you want high-resolution photos from Rathish Gandhi">
            <span className="credit-style"><i className="fa fa-camera" aria-hidden="true"></i>   Rathish Gandhi</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
