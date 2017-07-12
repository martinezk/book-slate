import React, { Component } from 'react';
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
  }

  onSubmitHandler = (event) => {
    event.preventDefault();
    /* 
    use the input to search the books api
    retreive the first 10 results
    display them in the component
    */
    this.props.addSearchResult({
      title: event.target.title.value
});
  }
  handleChange(event){
    this.setState({ query: event.target.value })
  }
  searchBooks(){
    this.props.searchBooks(this.state.query);
  }
  componentDidMount(){
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=harry+potter`)
      .then( (response) => {
        /*console.log(response.data.items["0"].volumeInfo.title); */
        this.props.addSearchResult(response.data.items);
      })
  }
  render() {
    return (
      <div className="search">
        <form  onSubmit={this.onSubmitHandler}>
          <h2>Book Search</h2>
          <input type="text" name="title" placeholder="Search for a Title" 
            onChange={this.handleChange}/>
          <button type="submit" value="Submit">Submit </button>
        </form>
      </div>
    )
  }
}

export default Search;