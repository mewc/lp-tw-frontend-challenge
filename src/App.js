import React, { Component } from 'react';
import './App.css';
import TwitterList from "./TwitterList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><a href="https://liveperson.com">LIVEPERSON TWITTER CHALLENGE APP</a></h1>
        <TwitterList/>
      </div>
    );
  }
}

export default App;
