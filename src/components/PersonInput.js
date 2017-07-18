import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class PersonInput extends Component {
  constructor(props) {
    super(props);
    this.onAddPersonClick = this.onAddPersonClick.bind(this);
  }

  onAddPersonClick() {
    const nameElement = document.getElementById('name');
    const emailElement = document.getElementById('email');

    this.props.addPerson({
      name: nameElement.value,
      email: emailElement.value
    });

    nameElement.value = "";
    emailElement.value = "";

    nameElement.focus();
  }

  componentDidMount() {
    document.getElementById('name').focus();
  }

  render() {
    return (
      <div className="person-input">
        <h3>Add a Member</h3>
        <input id="name" type="text" placeholder="Name" />
        <input id="email" type="text" placeholder="Email" />
        <button onClick={this.onAddPersonClick}>Add</button>
      </div>
    );
  } 
}

PersonInput.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default PersonInput;