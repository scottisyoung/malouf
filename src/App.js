import React, { Component } from 'react';
import './App.css';

//Components 

import Navbar from './components/navbar/navbar.js';
import Landing from './components/landing/landing.js';


class App extends Component {
  render() {
    return (
      <div className="tempBackground">
        <div>
          <Navbar/>
          <Landing/>
        </div>
      </div>
    );
  }
}

export default App;
