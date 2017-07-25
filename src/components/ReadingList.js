import React from 'react';
import BookContainer from './BookContainer';
import Nominations from './Nominations'

const ReadingList = () => (
  <div className="reading-list">
    <h2 title="Nominate the next book to read">Reading List</h2>
    <BookContainer />
    <Nominations />
  </div>
);
export default ReadingList;