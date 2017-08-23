import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as searchResultActions from '../actions/search-result-actions';
import * as bookActions from '../actions/book-actions';
import BookList from './BookList';
import Search from './Search';

class BookContainer extends Component {
  render() {
    const { searchState } = this.props;
    console.log(this.props);
    return (
      <div className="search-result-container">
        <Search addSearchResult={this.props.actions.addSearchResult} />
        <div className="search-description">
          <BookList 
            addBook={this.props.bookActions.addBook} 
            bookInfo={this.props.actions.bookInfo} 
            books={searchState.results}
          />
          <div className="description">
            {searchState.info}
          </div>
        </div>
      </div>
    );
  }
}

BookContainer.propTypes = {
  searchState: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  bookActions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    searchState: state.searchResults
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(searchResultActions, dispatch),
    bookActions: bindActionCreators(bookActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);