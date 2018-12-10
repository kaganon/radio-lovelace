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

    favoriteChange.forEach((song, i) => {
      if (id === i) {
        favoriteChange[id].favorite = !favoriteChange[id].favorite;
        this.setState({allSongs: favoriteChange});
      };
    });
  };

  onButtonClick = (id) => {

    let trackOrder = this.state.allSongs;

    console.log(trackOrder)
    let topTrack = trackOrder[id];
    trackOrder.splice(id, 1);

    trackOrder.splice(0,0,topTrack);
    this.setState({allSongs: trackOrder});
  };


  render() {
    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} onChangeCallback={this.onStarChange}
              buttonClick={this.onButtonClick}/>
        </main>
      </div>
    );
  }
}

export default App;
