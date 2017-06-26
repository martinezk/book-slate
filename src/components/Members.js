import React, { Component } from 'react';

class Members extends React.Component {
  constructor() {
    super();
    this.state = {
      members: []
    };
  }
  render() {
    return (
      <div className="members">
        <h2>My Book Club</h2>
        <button className="button-style" type="button">My Book Club</button>
      </div>
    )
  }
}
export default Members;