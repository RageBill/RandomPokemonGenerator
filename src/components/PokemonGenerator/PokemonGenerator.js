import React from 'react';
import './PokemonGenerator.css';
import { Container, Popup, Icon, Button } from 'semantic-ui-react';
import Randomizer from '../Randomizer/Randomizer';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';
import PokemonFusion from '../PokemonFusion/PokemonFusion';
import ModePrompt from '../ModePrompt/ModePrompt';

const proxy = "https://cors-anywhere.herokuapp.com/";

const instructions = [
  "Choose the starting and ending Pokedex ID then click on 'Randomize' to get a random pokemon. By looking at the name, try to recall the face or even draw out the pokemon!",
  "Hello"
];

// Pokedex start & end IDs for pokemon generations
const generations = [
  {"start": 1, "end": 807},
  {"start": 1, "end": 151},
  {"start": 152, "end": 251},
  {"start": 252, "end": 386},
  {"start": 387, "end": 493},
  {"start": 494, "end": 649},
  {"start": 650, "end": 721},
  {"start": 722, "end": 807},
];

export default class PokemonGenerator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      showing: false,
      pokemon: {},
      fields: {
        start: generations[0].start,
        end: generations[0].end,
      },
      selected: 0,
      mode: parseInt(props.match.params.mode, 10),
    }
  }

  static getDerivedStateFromProps(nextProps, state){
    const nextMode = parseInt(nextProps.match.params.mode, 10);
    if( nextMode !== state.mode ){
      return({
        loading: false,
        showing: false,
        pokemon: {},
        fields: {
          start: generations[0].start,
          end: generations[0].end,
        },
        selected: 0,
        mode: nextMode,
      });
    } else {
      return ;
    }
  }

  // Update state's fields with user's manual input
  handleInput = (evt) => {
    const fields = Object.assign({}, this.props.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  }

  // Update state's fields with option choices
  handleChange = (evt, {value}) => {
    this.setState({
      selected: value,
      fields: {
        start: generations[value].start,
        end: generations[value].end,
      },
    });
  }

  // For fetch API
  parseJSON = (response) => {
    return response.json();
  }

  // Update pokemon display after fetch
  updatePokemon = (response) => {
    this.setState({
      loading: false,
      showing: true,
      pokemon: {
        image: response.sprites.front_default,
        id: response.id,
        name: response.name,
      }, 
    });
  }

  // Fetch random pokemon from PokeAPI
  handleSubmit = (evt) => {
    const mode = parseInt(this.props.match.params.mode, 10);
    evt.preventDefault();
    this.setState({
      loading: true,
      showing: false,
    });
    if(mode === 1){
      let url = "https://pokeapi.co/api/v2/pokemon/";
      url += Math.round(Math.random() * (this.state.fields.end - this.state.fields.start)) + this.state.fields.start;
      fetch( proxy + url, {
        headers: {
          Accept: "application/json", 
        },
      }).then(this.parseJSON)
        .then(this.updatePokemon);
      return ;
    }
    
    if(mode === 2){
      return ;
    }
  }

  // Render different pokemon display for different game modes
  // Game Mode 1 -> PokemonDisplay
  // Game Mode 2 -> PokemonFusion
  renderResult = (mode) => {
    if(mode === 1){
      const ballImg = "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c31e.png";
      return(
        <PokemonDisplay
          ball={ballImg}
          loading={this.state.loading}
          showing={this.state.showing}
          pokemon={this.state.pokemon}
        />
      );
    }

    if(mode === 2){
      return(
        <PokemonFusion
          loading={this.state.loading}
          showing={this.state.showing}
          pokemon={this.state.pokemon}
        />
      );
    }
  }

  render() {
    const params = this.props.match.params;
    const mode = parseInt(params.mode, 10);
    const instruction = instructions[mode - 1];
    // Only render game display when game mode is valid
    if(mode === 1 || mode === 2){
      return (
        <Container className="generatorContainer">
          <Popup
            trigger={<Button><Icon name="help"/>How to Play</Button>}
            content={instruction}
            size="large"
            wide="very"
          />
          <Randomizer
            generations={generations}
            selected={this.state.selected}
            loading={this.state.loading}
            fields={this.state.fields}
            handleChange={this.handleChange}
            handleInput={this.handleInput}
            handleSubmit={this.handleSubmit}
          />
          {this.renderResult(mode)}
        </Container>
      );
    } else {
      return(
        <ModePrompt/>
      );
    } 
  }
}
