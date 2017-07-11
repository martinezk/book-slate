import people from './people-reducer.js';
import books from './book-reducer.js';
import searchResults from './search-result-reducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  people, 
  books,
  searchResults
});

export default rootReducer;