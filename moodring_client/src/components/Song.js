import React, { Component } from 'react';

class Song extends Component {

    state = {
        songs: []
    }

    componentDifMount() {
        this.getSongs()
    }

    getSongs = () => {
        fetch('http://localhost:3000/songs')
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(error => console.error(error))
    }

    render() {
        console.log(this.state.notices);
        return (
            <div>
                <h1>Song List</h1>

                {this.state.songs.map( song => {
                    return (
                        <div key={song.id} className="song">
                            {/* <img {song.img} /> */}
                            <h3>{song.title}</h3>
                            <h3>{song.artist}</h3>
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default Song;