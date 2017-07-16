import React from 'react';
import {PropTypes} from 'prop-types';

const Person = ({person}) => {
  return (
    <div>       
      <p className="name">{person.name}</p>
      <p className="email">{person.email}</p>
      <a className="delete">&#10006;</a> 
    </div>
  );
};

Person.propTypes = {
  person: PropTypes.object.isRequired
};

export default Person;