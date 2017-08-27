import * as types from './action-types';

export const addBook = (book) => {
  return {
    type: types.ADD_BOOK,
    book
  };
}
export const deleteBook = (book) => {
  return {
    type: types.DELETE_BOOK,
    book
  };
}

