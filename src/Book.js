import React, {PropTypes} from 'react';

const Book = ({book}) => {
  return (
    <div>
      {book.title}, {book.author}
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired
};

export default Book;