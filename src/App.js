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
        <Route path="/">
          <div>
            <Switch>
              <Route exact path="/" component={Title}/>
              <Route exact path="/modes" component={Title}/>
              <Route path="/modes/:mode" component={Title}/>
            </Switch>
            <Switch>
              <Route path="/modes/:mode" component={PokemonGenerator}/>
              <Route exact path="/" component={ModePrompt}/>
              <Route exact path="/modes" component={ModePrompt}/>
            </Switch>
          </div>
        </Route>
        <Route path="/scrollcontent" component={ScrollContent}/>
      </div>
    );
  }
}

export default App;
