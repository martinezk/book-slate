import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return [...state, Object.assign({}, action.book)];
    case types.SEARCH_BOOK:
      return state;
      //placeholder, should return search results
    default:
      return state;
  }
};