import React from 'react';

export default () => (
  <div className="center">
    <input className="Input" type="text" style={{display: "block", textAlign: "center", margin: "0 auto",
      marginBottom: 20}} placeholder="Enter your name:"></input>
    <a href="/" className="Button" onClick={(e) => {
      e.preventDefault();
    }}>Go!</a>
  </div>
);