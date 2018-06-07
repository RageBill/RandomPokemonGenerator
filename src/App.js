import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Title from './components/Title/Title';
import PokemonGenerator from './components/PokemonGenerator/PokemonGenerator';
import ModePrompt from './components/ModePrompt/ModePrompt';
import ScrollContent from './components/ScrollContent/ScrollContent';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/scrollcontent/:first/:second/:third" component={ScrollContent}/>
          <Route path="/">
            <div>
              <Switch>
                <Route path="/modes/:mode" component={Title}/>
                <Route path="/" component={Title}/>
              </Switch>
              <Switch>
                <Route path="/modes/:mode" component={PokemonGenerator}/>
                <Route path="/" component={ModePrompt}/>
              </Switch>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
