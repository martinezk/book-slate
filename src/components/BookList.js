import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({addBook, books, bookInfo}) => {
  return (
    <div className="book-list">
      <div className="search-results-div">
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