import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ addBook, books, bookInfo }) => {
  let bookPlaceholder = null;
  if (books.length === 0) {
    bookPlaceholder = (
      <div id="contentArea">
        <div className="_2iwo">
          <div className="_2iwq">
            <div className="_2iwl"></div>
            <div className="_2iwx"></div>
            <div className="_2iwz"></div>
            <div className="_2iw_"></div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="book-list">
      <div className="search-results-div" id="search-results-div">
        {bookPlaceholder}
        {books.map((book) =>
          <Book
            addBook={addBook}
            bookInfo={bookInfo}
            key={book.volumeInfo.title}
            book={book}
          />
        )}
      </div>
    </div>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  addBook: PropTypes.func,
  bookInfo: PropTypes.func
};

export default BookList;