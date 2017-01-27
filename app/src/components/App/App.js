import React, { Component } from 'react';
import NavBar from '../NavBar'
import TweetList from '../TweetList/TweetList'

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <TweetList />
      </div>
    );
  }
}

export default App;
