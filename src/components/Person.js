import React from 'react';
import { PropTypes } from 'prop-types';

const Person = ({ person }) => {
  /*let deleteEntry = confirm('Are you sure you want to delete this memeber?');
  let onDeleteClick = function(){
    document.getElementById('delete');    
    if (deleteEntry == true){
      console.log('yes');
    } else{
      console.log('no');
    }

};*/

  return (
    <div className="member-entry">
      <p className="name"><span>{person.name}</span></p>
      <p className="email"><span>{person.email}</span></p>
      <a /*onClick={onDeleteClick}*/ id="delete">&#10006;</a>
    </div>
  );
}

Person.propTypes = {
  person: PropTypes.object.isRequired
};

export default Person;