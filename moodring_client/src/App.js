import React, { Component } from 'react';
import Song from './components/Song.js';


class App extends Component {
  state = {
    songs: [],
    formInputs: {
      title: '',
      artist: '',
      mood: '',
      img: ''
    }
  }

  handleChange = (event) => {
    const updateInput = Object.assign( this.state.formInputs, { [event.target.id]: event.target.value })
    this.setState(updateInput)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state.formInputs);
    fetch('http://localhost:3000/songs', {
      body: JSON.stringify(this.state.formInputs),
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdSong => {
      return createdSong.json()
    })
    .then(jsonedSong => {
      this.setState({
        formInputs: {
          title: '',
          artist: '',
          img: '',
          mood: ''
        },
        songs: [jsonedSong, ...this.state.songs]
      })
    })
    .catch(error => console.log(error))
  }

  render () {
    return (
      <div className="App">
        <header>
          <nav>
            <h1>Mood Ring</h1>
          </nav>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input 
              type="text" 
              id="title" 
              value={this.state.formInputs.title}
              onChange={this.handleChange} 
            />
            <label htmlFor="artist">Artist: </label>
            <input 
              type="text" 
              id="artist" 
              value={this.state.formInputs.artist}
              onChange={this.handleChange}
            />
            <label htmlFor="img">Image URL: </label>
            <input 
              type="text" 
              id="img" 
              value={this.state.formInputs.img}
              onChange={this.handleChange}
            />
            <label htmlFor="mood">Mood: </label>
            <input 
              type="text" 
              id="mood" 
              value={this.state.formInputs.mood}
              onChange={this.handleChange}
            />
            <input type="submit" className="submit" />
          </form>
        </header>
        <main>
          <Song songs={this.state.songs} />
        </main>
      </div>
    )
  }
}

export default App;
