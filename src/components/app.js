import React from 'react';
import { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyANPrBPM8YxKOTVFvxN0YPSdC3hFXvHSxQ'

export default class App extends Component {
  constructor(props){
		super(props);

		this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term: 'dog'}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
       });
    });
	}

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({selectedVideo}) } 
          videos={this.state.videos}/>
      </div>
    );
  }
}
