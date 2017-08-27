import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, addBook, bookInfo, removeBook }) => {
  let onAddBookClick = function () {
    let confirmAddBook = window.confirm('Add this title to the Reading List?');
    if (confirmAddBook === true) {
      addBook(book);
    }
  }
  let onDeleteClick = function(){
    let deleteEntry = window.confirm('Are you sure you want to delete this book?');   
    if (deleteEntry === true){
      removeBook(book);
    } 
  };
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
  let deleteButton;
  if (removeBook){
    deleteButton = <a onClick={onDeleteClick} className="delete-book">&#10006;</a>
  }
  return (
    <div className="search-results">
      <div className="results">
        <h4>{book.volumeInfo.title}</h4>
        <p>{book.volumeInfo.authors.join(', ')}</p>
      </div>
      {addBookButton}
      {infoButton}
      {deleteButton}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  addBook: PropTypes.func,
  bookInfo: PropTypes.func
};

export default Book;