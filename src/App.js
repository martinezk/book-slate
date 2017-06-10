import React, { Component } from 'react';
import './App.css';
import Body from './Body';
import Footer from './Footer';
import Header from './Header';

class App extends Component {

  
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
