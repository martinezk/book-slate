import React from 'react';
import BasePage from './BasePage';
import BookContainer from './BookContainer';

const ReadingList = () => (
  <BasePage>
    <h2>My Reading List</h2>
    <BookContainer />
  </BasePage>
);
export default ReadingList;