import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }
  
  render() {
    return <input id="yes" onChange={event => console.log(event.target.value)} />;
  }
}

export default SearchBar;