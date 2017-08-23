import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, addBook, bookInfo }) => {
  let onAddBookClick = function () {
    let confirmAddBook = window.confirm('Add this title to the Reading List?');
    if (confirmAddBook === true) {
      addBook(book);
    }
  }
  let addBookButton; 
  if (addBook){
    addBookButton= <button onClick={onAddBookClick} value="Submit">Add</button>
  }
  let onInfoClick = function () {
    bookInfo(book.volumeInfo.description)
  }
  let infoButton; 
  if (bookInfo){
    infoButton= <button onClick={onInfoClick} value="Submit">Info</button>
  }
  return (
    <div className="search-results">
      <div className="results">
        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.authors.join(', ')}</p>
      </div>
      {addBookButton}
      {infoButton}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  addBook: PropTypes.func,
  bookInfo: PropTypes.func
};

export default Book;