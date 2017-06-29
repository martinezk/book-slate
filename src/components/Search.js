import React, { Component } from 'react';

class Search extends Component {
  onSubmitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.title.value);
    this.props.addBook({
      title: event.target.title.value 
    });
  }
  render() {
    return (
      <div className="search">
        <form  onSubmit={this.onSubmitHandler}>
          <h2>Book Search</h2>
          <input type="text" name="title" placeholder="The Great Gatsby" />
          <button type="submit" value="Submit">Submit </button>
        </form>
      </div>
    )
  }
}

export default Search;