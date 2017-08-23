import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

class PersonInput extends Component {

  onFormSubmit = (event) => {
    event.preventDefault();
    let parentDiv = document.getElementById('current-members');
    let childDiv = document.getElementById('contentArea');
    parentDiv.removeChild(childDiv);
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
        <form onSubmit={this.onFormSubmit}>
          <input id="name" type="text" placeholder="Name" required />
          <input id="email" type="email" name="email" placeholder="Email" required />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  } 
}

PersonInput.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default PersonInput;