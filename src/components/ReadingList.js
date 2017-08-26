import React from 'react';
import BookContainer from './BookContainer';
import Nominations from './Nominations'

const ReadingList = () => {
  let onDeleteItem = function () {
    let deletePerson = window.confirm('Delete this book?');
    if (deletePerson === true) {
      document.getElementById('jane').remove();
    };
  };
  return (
    <div className="reading-list">
      <h2 title="Nominate the next book to read">Reading List</h2>
      <BookContainer />
      <Nominations />
    </div>
  );
};
export default ReadingList;