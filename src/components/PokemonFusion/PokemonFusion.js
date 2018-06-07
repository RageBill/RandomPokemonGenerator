import PropTypes from 'prop-types';
import React from 'react';
import './PokemonFusion.css';
import { Container, Loader } from 'semantic-ui-react';

export default class PokemonFusion extends React.Component {
  static propTypes = {
    showing: PropTypes.bool,
    pokemons: PropTypes.array,
  }

  constructor(props){
    super(props);

    this.state = {
      showing: props.showing,
      pokemons: props.pokemons,
      loaded: false,
    }
  }

  static getDerivedStateFromProps(nextProps, state){
    const showing = nextProps.showing;
    const pokemons = nextProps.pokemons;
    const loaded = pokemons === state.pokemons && showing && state.loaded;
    return { 
      showing: showing,
      pokemons: pokemons,
      loaded: loaded,
    }
  }

  componentDidMount() {
    this.refs.iframe.onload = () => {
      this.refs.iframe.contentWindow.scrollTo(410, 610);
      this.setState({
        loaded: true, 
      });
    }
  }

  componentWillUnmount() {
    this.refs.iframe.onload = null;
  }

  render() {
    const pokemons = this.state.pokemons;
    const url = pokemons.length === 2 ? `/scrollcontent/${pokemons[0].id}/${pokemons[1].id}/0` : "";
    return (
      <Container>
        <Loader 
          indeterminate
          inline center
          active={this.state.showing && !this.state.loaded}
        >
        Preparing Pokemon...
        </Loader>
        <br/>
        <iframe 
          src={url}
          scrolling="no"
          height="230"
          width="200"
          title="fusionDisplay"
          ref="iframe"
          className={!this.state.loaded? "hiddenFrame":""}
        />
      </Container>
    );
  }
}