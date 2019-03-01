import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Body from './components/Body/Body.js';
class App extends Component {
  render() {
    return (
      <div>
     <div className="header"><Header/></div>
     <div className="body"><Body/></div>
     </div>
    );
  }
}

export default App;
