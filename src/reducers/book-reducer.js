import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return [...state, Object.assign({}, action.book)];
    default:
      return state;
  }
};