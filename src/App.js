import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Title from './components/Title/Title';
import PokemonGenerator from './components/PokemonGenerator/PokemonGenerator';
import PokemonFusion from './components/PokemonFusion/PokemonFusion';
import ModePrompt from './components/ModePrompt/ModePrompt';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route path="/">
          <div>
            <Switch>
              <Route exact path="/" component={Title}/>
              <Route exact path="/modes" component={Title}/>
              <Route path="/modes/:mode" component={Title}/>
            </Switch>
            <Switch>
              <Route path="/modes/:mode" component={PokemonGenerator}/>
              <Route path="/" component={ModePrompt}/>
            </Switch>
          </div>
        </Route>
      </div>
    );
  }
}

export default App;
