import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({addBook, books}) => {
  return (
    <div>
      {books.map((book) => 
        <Book addBook={addBook} key={book.volumeInfo.title} book={book} />  
      )}
    </div>
  );
};

BookList.propTypes = {
 books: PropTypes.array.isRequired,
 addBook: PropTypes.func
};

export default BookList;