import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as bookActions from '../actions/book-actions';
import BookList from './BookList';

class BookContainer extends Component {
  render() {
    const { books, actions } = this.props;
    return (
      <BookList books={books} removeBook={actions.deleteBook}/>
    );
  }
}

BookContainer.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    books: state.books
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(bookActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);