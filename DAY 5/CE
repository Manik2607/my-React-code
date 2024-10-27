import React from 'react';
import logo from './logo.svg';

function FoodList() {
  const foods = ['pasta', 'dhall', 'wheat', 'rice'];

  const appStyle = {
    textAlign: 'center',
  };

  const appLogoStyle = {
    height: '40vmin',
    pointerEvents: 'none',
    animation: 'App-logo-spin infinite 20s linear',
  };

  const appHeaderStyle = {
    backgroundColor: '#282c34',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 'calc(10px + 2vmin)',
    color: 'white',
  };

  const appLinkStyle = {
    color: '#61dafb',
  };

  const keyframesStyle = `
    @keyframes App-logo-spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;

  return (
    <div style={appStyle}>
      <style>{keyframesStyle}</style>
      <header style={appHeaderStyle}>
        <img src={logo} style={appLogoStyle} alt="logo" />
        <h2>Food List</h2>
        <ul>
          {foods.map((food, index) => (
            <li key={index}>{food}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default FoodList;
