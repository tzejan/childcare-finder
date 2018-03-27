import React, { Component } from 'react';
import './App.css';
import Map from './map/Map';
import Omnibox from './Omnibox/Omnibox';

class App extends Component {
  render() {
    return (
      <div>
        <Omnibox />
        <Map />
      </div>
        
    );
  }
}

export default App;
