import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyARaSW1WXqD7H68CwzQcamkKqSPOTIBjLQ';


// Step 1: Create a new component. This component
// should produce some HTML
class App  extends Component {
  constructor(props){
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
      this.setState({ videos });
      // above equals this.setState({ videos: videos }); via es6 synt sug
    });
  }
  return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>
  );
}

// Step 2: Take this component's generated HTML and
// put it on the DOM
ReactDOM.render(<App />, document.querySelector('.container'));