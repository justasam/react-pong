import React, { Component } from 'react';
import './App.scss';
import GameDisplay from './Components/GameDisplay';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>React Pong</h1>
        <p>Ping Pong built with React, Socket.io & Node.js</p>
        <GameDisplay />
      </div>
    );
  }
}

export default App;
