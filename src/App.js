import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import Title from './components/Title/Title';
import PokemonGenerator from './components/PokemonGenerator/PokemonGenerator';
import ModePrompt from './components/ModePrompt/ModePrompt';
import ScrollContent from './components/ScrollContent/ScrollContent';
import RedirectPage from './components/RedirectPage/RedirectPage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/RandomPokemonGenerator/redirectpage/:first/:second/:third" component={RedirectPage}/>
          <Route path="/RandomPokemonGenerator/scrollcontent/:first/:second/:third" component={ScrollContent}/>
          <Route path="/RandomPokemonGenerator/">
            <div>
              <Switch>
                <Route path="/RandomPokemonGenerator/modes/:mode" component={Title}/>
                <Route path="/RandomPokemonGenerator/" component={Title}/>
              </Switch>
              <Switch>
                <Route path="/RandomPokemonGenerator/modes/:mode" component={PokemonGenerator}/>
                <Route path="/RandomPokemonGenerator/" component={ModePrompt}/>
              </Switch>
            </div>
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
