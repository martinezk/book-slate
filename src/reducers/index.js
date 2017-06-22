import people from './people-reducer.js';
import books from './book-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people, 
  books
});

export default rootReducer;