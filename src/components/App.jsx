import React, { Component } from 'react';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <p>Please leave feedback</p>
      <p>
        <button type="button">Good</button>
      </p>
      <p>
        <button type="button">Neutral</button>
      </p>
      <p>
        <button type="button">Bad</button>
      </p>
      <p>Statistics:</p>
      <ul>
        <li>Good: 0</li>
        <li>Neutral: 0</li>
        <li>Bad: 0</li>
      </ul>
    </div>
  );
};
