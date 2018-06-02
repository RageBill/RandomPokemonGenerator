import React from 'react';
import './PokemonGenerator.css';
import { Container, Popup, Icon, Button } from 'semantic-ui-react';
import Randomizer from '../Randomizer/Randomizer';
import PokemonDisplay from '../PokemonDisplay/PokemonDisplay';

const proxy = "https://cors-anywhere.herokuapp.com/";

const instructions = "Choose the starting and ending Pokedex ID then click on 'Randomize' to get a random pokemon. By looking at the name, try to recall the face or even draw out the pokemon!";

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

export default class PokemonGuesser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      showing: false,
      pokemon: {
        image: null,
        id: null,
        name: null,
      },
      fields: {
        start: generations[0].start,
        end: generations[0].end,
      },
      selected: 0,
    }
  }

  handleInput = (evt) => {
    const fields = Object.assign({}, this.props.fields);
    fields[evt.target.name] = evt.target.value;
    this.setState({fields});
  }

  handleChange = (evt, {value}) => {
    this.setState({
      selected: value,
      fields: {
        start: generations[value].start,
        end: generations[value].end,
      },
    });
  }

  parseJSON = (response) => {
    return response.json();
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.setState({
      loading: true,
      showing: false,
    });
    let url = "https://pokeapi.co/api/v2/pokemon/";
    url += Math.round(Math.random() * (this.state.fields.end - this.state.fields.start)) + this.state.fields.start;
    fetch( proxy + url, {
      headers: {
        Accept: "application/json", 
      },
    }).then(this.parseJSON)
      .then(this.updatePokemon);
  }

  updatePokemon = (response) => {
    console.log(response);
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

  render() {
    const ballImg = "http://www.stickpng.com/assets/images/580b57fcd9996e24bc43c31e.png";
    return (
      <Container className="generatorContainer">
        <Popup
          trigger={<Button><Icon name="help"/>How to Play</Button>}
          content={instructions}
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
        <PokemonDisplay
          ball={ballImg}
          loading={this.state.loading}
          showing={this.state.showing}
          pokemon={this.state.pokemon}
        />
      </Container>
    );
  }
}
