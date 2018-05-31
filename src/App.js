import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Title from './components/Title/Title';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title text="Random Pokemon Guesser"/>
      </div>
    );
  }
}

export default App;
