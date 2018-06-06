import React from 'react';
import './PokemonFusion.css';
import Randomizer from '../Randomizer/Randomizer';
import { Container, Popup, Button, Icon } from 'semantic-ui-react';

const instructions = "Hello";

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

export default class PokemonFusion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
      loading: false,
      fields: {
        start: generations[0].start,
        end: generations[0].end,
      },
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

  render() {
    return (
      <Container className="fusionContainer">
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
      </Container>
    );
  }
}
