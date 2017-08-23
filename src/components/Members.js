import React from 'react';
import PeopleContainer from './PeopleContainer';

const Members = () => {
  let onDeleteItem = function () {
    let deletePerson = window.confirm('Are you sure you want to delete this memeber?');
    if (deletePerson === true) {
      document.getElementById('jane').remove();
    };
  };

  return (
    <div className="members-container">
      <div className="current-members" id="current-members">
        <h2>Current Members</h2>
        <div id="jane">
          <p className="jane name">Jane Austen</p>
          <p className="jane email">j.austen@nineteenthcentury.com</p>
          <a onClick={onDeleteItem} className="jane delete">&#10006;</a>
        </div>
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
      </div>
      <PeopleContainer />
    </div>
  );
};
export default Members;