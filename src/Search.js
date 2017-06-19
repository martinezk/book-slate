import React, { Component } from 'react';

class Search extends Component {
  onSubmitHandler(event){
    event.preventDefault();
    console.log(event.target.title.value);
  }
  render() {
    return (
      <form onSubmit={this.onSubmitHandler}>
        Search for books<br />
        <input type="text" name="title" placeholder="The Great Gatsby" /><br />
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Search;