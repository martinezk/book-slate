import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_PERSON:
      return [...state, Object.assign({}, action.person)];
    case types.DELETE_PERSON:
      let index = state.indexOf(action.person);
      if (index > -1) {
        state.splice(index, 1);
      }
      return [...state];
    default:
      return state;
  }
};