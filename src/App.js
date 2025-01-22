import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import PathfindingVisualizer from './Components/PathfindingVisualizer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
class App extends Component {
  render() {
    return (
      <div className="App">
        <PathfindingVisualizer></PathfindingVisualizer>
      </div>
    );
  }
}

export default App;
