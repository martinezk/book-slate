import * as types from '../actions/action-types';

export default (state = {results: []}, action) => {
  switch (action.type) {
    case types.ADD_SEARCH_RESULT:
      return {results:action.result};
    case types.BOOK_INFO:
      let newState = Object.assign({}, state);
      newState.info = action.book;
      return newState;
    default:
      return state;
  }
};