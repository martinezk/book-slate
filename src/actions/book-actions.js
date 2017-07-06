import * as types from './action-types';

export const addBook = (book) => {
  return {
    type: types.ADD_BOOK,
    book
  };
}
export const searchBooks = (query) => {
  return {
    type: types.SEARCH_BOOK,
    query
  }
}

