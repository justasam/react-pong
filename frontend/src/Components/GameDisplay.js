import React, { Component } from 'react';
import './GameDisplay.scss';
import GetName from './GetName';

class GameDisplay extends Component {
  render() {
    return (
      <div className="GameDisplay">
        <GetName />
      </div>
    );
  }
}

export default GameDisplay;
