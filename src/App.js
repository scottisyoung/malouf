import React, { Component } from 'react';
import './App.css';

//Components 

import Navbar from './components/navbar/navbar.js';
import Landing from './components/landing/landing.js';
import Footer from './components/footer/footer.js';


class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar/>
          <Landing/>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default App;
