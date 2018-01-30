import React, { Component } from 'react';
import Typer from './components/Typer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Typer text="miv wep ivp orb pwe pow eut n pow eut er ewr erewr" />
        </div>
      </div>
    );
  }
}

export default App;
