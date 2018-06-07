import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ModeSwitcher = (props) => {
  return (
    <Button.Group>
      <Link
        to={"/modes/1"}
      >
        <Button value={1} onClick={props.handleModeChange} positive={props.mode === 1}>
          Original Pokemons
        </Button>
      </Link>
      <Button.Or />
      <Link
        to={"/modes/2"}
      >
      <Button value={2} onClick={props.handleModeChange} positive={props.mode === 2}>
        Fusion Pokemons
      </Button>
      </Link>
    </Button.Group>
  )
}

ModeSwitcher.propTypes = {
  mode: PropTypes.number,
  handleModeChange: PropTypes.func,
}

export default ModeSwitcher;
