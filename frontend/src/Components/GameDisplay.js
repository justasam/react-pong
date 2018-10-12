import React, { Component } from 'react';
import './GameDisplay.scss';

class GameDisplay extends Component {
  render() {
    return (
      <div className="GameDisplay">
        <a href="/" className="Button center" onClick={(e) => {
          e.preventDefault();
        }}>Play</a>
      </div>
    );
  }
}

export default GameDisplay;
