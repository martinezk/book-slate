import React, {PropTypes} from 'react';
import Book from './Book';

const BookList = ({books}) => {
  return (
    <div>
      {books.map((book) => 
        <Book key={book.title} book={book} />  
      )}
    </div>
  );
};

BookList.propTypes = {
 books: PropTypes.array.isRequired
};

export default BookList;