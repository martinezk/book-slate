import * as types from './action-types';

export const addSearchResult = (result) => {
  return {
    type: types.ADD_SEARCH_RESULT,
    result
  };
}
export const searchBooks = (query) => {
  return {
    type: types.SEARCH_BOOK,
    query
  }
}