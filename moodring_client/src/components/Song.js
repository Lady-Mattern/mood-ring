import React, { Component } from 'react';

class Song extends Component {

    state = {
        songs: []
    }

    componentDidMount() {
        this.getSongs()
    }

    getSongs = () => {
        fetch('http://localhost:3000/songs')
        .then(response => response.json())
        .then(json => this.setState({songs: json}))
        .catch(error => console.error(error))
    }

    deleteSong = (id, index) => {
        fetch(`http://localhost:3000/songs/${id}`, {
            method: "DELETE"
        }).then(song => {
            this.setState({
                songs: [
                    ...this.state.songs.slice(0, index),
                    ...this.state.songs.slice(index + 1)
                ]
            })
        })
    }

    render() {
        // console.log(this.state.songs);
        return (
            <div>
                <h1>Song List</h1>

                {this.state.songs.map( song => {
                    return (
                        <div key={song.id} className="song">
                            <img src={song.img} alt={song.title} />
                            <h3>{song.title}</h3>
                            <h3>{song.artist}</h3>
                            <button onClick={()=> this.deleteSong(song)}>Delete Song</button>
                        </div>
                    )
                })}
                {this.props.songs.map( song => {
                    return (
                        <div key={song.id} className="song">
                            <img src={song.img} alt={song.title} />
                            <h3>{song.title}</h3>
                            <h3>{song.artist}</h3>
                            <button onClick={()=> this.deleteSong(song)}>Delete Song</button>
                        </div>
                    )                    
                })}
            </div>
        )
    }
}

export default Song;