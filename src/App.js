import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
  song.favorite = false;
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      allSongs: songData,
    };
  };

  onStarChange = (id) => {
    let favoriteChange = this.state.allSongs;
    favoriteChange[id].favorite = !favoriteChange[id].favorite;
    this.setState({allSongs: favoriteChange});
  };


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} onChangeCallback={this.onStarChange}/>
        </main>
      </div>
    );
  }
}

export default App;
