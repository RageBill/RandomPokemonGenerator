import React from 'react';
import './PokemonDisplay.css';
import { Container, Label, Image, Reveal } from 'semantic-ui-react';

const PokemonDisplay = (props) => {
  const properName = props.pokemon.name ? props.pokemon.name.charAt(0).toUpperCase() + props.pokemon.name.slice(1) : "";
  const labelText = props.loading ? "" : "#" + props.pokemon.id + " " + properName;
  console.log(props);
  return (
    <Container>
      <Label 
        color={props.loading ? "grey" : "teal"} 
        pointing="below" 
        size="big"
        className={(!props.pokemon.id || props.loading) ? "hiddenLabel" : ""}
      >
        {labelText}
      </Label>
      <Reveal 
        disabled={!props.showing}
        animated="small fade" 
        className="centered image"
      >
        <Reveal.Content visible>
          <Image src={props.ball} size="small"/>
        </Reveal.Content>
        <Reveal.Content hidden>
          <Image src={props.pokemon.image} size="small"/>
        </Reveal.Content>
      </Reveal>
    </Container>
  )
}

export default PokemonDisplay;