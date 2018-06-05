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
  constructor(props) {
    super(props);

    this.state = {
      mode: 1,
    }
  }

  handleModeChange = (evt, data) => {
    this.setState({
      mode: data.value,
    });
  }

  render() {
    return (
      <div className="App">
        <Title mode={this.state.mode} handleModeChange={this.handleModeChange}/>
        <Route path="/mode/1" component={PokemonGenerator}/>
      </div>
    );
  }
}

export default App;
