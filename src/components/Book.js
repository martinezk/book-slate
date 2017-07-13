import React from 'react';
import PropTypes from 'prop-types';

const Book = ({book}) => {
  return (
    <div className="search-results">
      <div className="results">
        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.authors.join(', ')}</p>
      </div>
      <button type="submit" value="Submit">Add</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;