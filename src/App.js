import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Title from './components/Title/Title';
import PokemonGenerator from './components/PokemonGenerator/PokemonGenerator';
import {
  Route,
  Link,
  Redirect,
  Switch
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title text="Random Pokemon Generator"/>
        <Route path="/RecallMemory" component={PokemonGenerator}/>
      </div>
    );
  }
}

export default App;
