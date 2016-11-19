import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';


YTSearch({key: API_KEY, term: 'surfboards'}, function(data) {
  console.log(data);
});

// Step 1: Create a new component. This component
// should produce some HTML
class App extends Component {
  constructor(props){
    super(props);

    this.state = { videos: []};
  }
  render(){
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

// Step 2: Take this component's generated HTML and
// put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));