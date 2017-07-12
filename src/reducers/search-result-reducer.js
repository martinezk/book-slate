import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_SEARCH_RESULT:
      return action.result;
    default:
      return state;
  }
};