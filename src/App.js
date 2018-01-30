import React, { Component } from 'react';
import logo from './logo.svg';
import Typer from './components/Typer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
          <Typer text="miv wep ivpp orbpwe uopewu pow eutnpow eut er ewr erewr" />
        </div>
      </div>
    );
  }
}

export default App;
