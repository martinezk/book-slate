import React from 'react';
import ReactDOM from 'react-dom';
import Book from './Book';
import { shallow, mount, render } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let bookProp = {
      volumeInfo: {
        authors:[]
      }
  };
  const wrapper = shallow(<Book book={bookProp} />);
  expect(wrapper.find('button').length).toEqual(0);
});

it('renders addBook button', () => {
  const div = document.createElement('div');
  let bookProp = {
      volumeInfo: {
        authors:[]
      }
  };
  const wrapper = shallow(<Book addBook={function(){}} book={bookProp} />);
  expect(wrapper.find('button').length).toEqual(1);

});

it('renders bookInfo button', () => {
  const div = document.createElement('div');
  let bookProp = {
      volumeInfo: {
        authors:[]
      }
  };
  const wrapper = shallow(<Book bookInfo={function(){}} book={bookProp} />);
  expect(wrapper.find('button').length).toEqual(1);

});

