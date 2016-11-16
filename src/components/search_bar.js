import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    return <input id="yes" onChange={this.onInputChange} />;
  }

  onInputChange(e) {
    e.preventDefault();
    console.log(e.target.value);
  }
}

export default SearchBar;