import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as searchResultActions from '../actions/search-result-actions';
import BookList from './BookList';
import Search from './Search';

class BookContainer extends Component {
  render() {
    const {books} = this.props;
    console.log(this.props);

    return (
      <div>
        <Search addSearchResult={this.props.actions.addSearchResult}/>
        <BookList books={books} />
      </div>
    );
  }
}

BookContainer.propTypes = {
  books: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, props) {
  return {
    books: state.searchResults || []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators( searchResultActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);