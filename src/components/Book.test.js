import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let bookProp = {
      volumeInfo: {
        authors:[]
      }
  };
  ReactDOM.render(<Book book={bookProp} />, div);
});

it('renders addBook button', () => {
  const div = document.createElement('div');
  let bookProp = {
      volumeInfo: {
        authors:[]
      }
  };
  let dom = ReactDOM.render(<Book addBook={function(){}} book={bookProp} />, div);
  //test to see if button is here
  expect(dom).toEqual();
});

it('renders Info button', () => {
  const div = document.createElement('div');
  let bookProp = {
      volumeInfo: {
        authors:[]
      }
  };
  ReactDOM.render(<Book bookInfo={function(){}} book={bookProp} />, div);
  //test to see if button is here

});

