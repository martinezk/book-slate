import React, {Component} from 'react';
import PeopleContainer from './PeopleContainer';

const Members = () => (
    <div className="members">
        <h2>My Book Club</h2>
        <PeopleContainer />
        <button className="button-style" type="button">My Book Club</button>
    </div>
);
export default Members;