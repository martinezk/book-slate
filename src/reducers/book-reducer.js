import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_BOOK:
      return [...state, Object.assign({}, action.book)];
    case types.SEARCH_BOOK:
      return state;
    case types.DELETE_BOOK:
      let index = state.indexOf(action.book);
      if (index > -1) {
        state.splice(index, 1);
      }
      return [...state];
    default:
      return state;
  }
};