import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyARaSW1WXqD7H68CwzQcamkKqSPOTIBjLQ';

// Step 1: Create a new component. This component
// should produce some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Step 2: Take this component's generated HTML and
// put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));