import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, addBook }) => {
  let onAddBookClick = function () {
    let confirmAddBook = window.confirm('Add this title?');
    if (confirmAddBook == true) {
      addBook(book)
    }
  }
  let addBookButton; 
  if (addBook){
    addBookButton= <button onClick={onAddBookClick} value="Submit">Add</button>
  }
  return (
    <div className="search-results">
      <div className="results">
        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.authors.join(', ')}</p>
      </div>
      {addBookButton}
      <button value="Submit">Info</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  addBook: PropTypes.func
};

export default Book;