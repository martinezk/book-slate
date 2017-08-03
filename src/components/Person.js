import React from 'react';
import { PropTypes } from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as peopleActions from '../actions/people-actions';

const Person = ({ person, actions }) => {
  let onDeleteClick = function(){
    let deleteEntry = window.confirm('Are you sure you want to delete this memeber?');   
    if (deleteEntry === true){
      actions.deletePerson(person);
    } 
};

  return (
    <div className="member-entry">
      <p className="name"><span>{person.name}</span></p>
      <p className="email"><span>{person.email}</span></p>
      <a onClick={onDeleteClick} id="delete">&#10006;</a>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
  people: PropTypes.array,
  actions:  PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    people: state.people
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);