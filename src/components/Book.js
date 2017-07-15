import React from 'react';
import PropTypes from 'prop-types';

const Book = ({book, addBook}) => {
  let button;
  if (addBook){
    button = <button onClick={() => addBook(book)} value="Submit">Add</button>;
  }
  return (
    <div className="search-results">
      <div className="results">
        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.authors.join(', ')}</p>
      </div>
      {button}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  addBook: PropTypes.func
};

export default Book;