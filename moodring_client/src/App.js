import React, { Component } from 'react';
import Song from './components/Song.js'

class App extends Component {
  render () {
    return (
      <div className="App">
        <h1>This is the App called Mood Ring</h1>
        <Song />
      </div>
    )
  }
}

export default App;
