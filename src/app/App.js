import React, { Component } from 'react';
import './App.scss';
import RouterMap from '../router'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RouterMap/>
      </div>
    );
  }
}

export default App;