import React, {Component} from 'react';
import PeopleContainer from './PeopleContainer';

const Members = () => (
    <div className="members-container"> 
        <h2>Current Members</h2>
        <div>
            <p className="name">Jane Austen</p>
            <p className="email">j.austen@nineteenthcentury.com</p>
            <a className="delete">&#10006;</a>            
        </div>    
        <PeopleContainer />
    </div>
);
export default Members;