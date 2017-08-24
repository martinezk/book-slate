import React from 'react';
import { PropTypes } from 'prop-types';
import Person from './Person';

const PeopleList = ({ people }) => {
  let placeholder = null;
  if (people.length === 0) {
    placeholder = (
      <div id="contentArea">
        <div className="_2iwo">
          <div className="_2iwq">
            <div className="_2iwr"></div>
            <div className="_2iwx"></div>
            <div className="_2iwz"></div>
            <div className="_2iw_"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div>
      {placeholder}
      {people.map((person) =>
        <Person key={person.email} person={person} />
      )}
    </div>
  );
};

PeopleList.propTypes = {
  people: PropTypes.array.isRequired
};

export default PeopleList;