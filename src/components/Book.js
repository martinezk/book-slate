import React from 'react';
import PropTypes from 'prop-types';

const Book = ({book}) => {
  return (
    <div>
      <h4>{book.volumeInfo.title}</h4>
      <p>{book.volumeInfo.authors.join(', ')}</p>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;