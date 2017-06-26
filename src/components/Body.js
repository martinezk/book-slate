import React, { Component } from 'react';

import Members from './Members';

class Body extends Component {

  render() {
    return (
      <div className="middle">
        <Members />
        <button className="button-style" type="button">Search for Books</button>
      </div>
    );
  }
}

export default Body;
