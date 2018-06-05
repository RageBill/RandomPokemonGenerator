import PropTypes from 'prop-types';
import React from 'react';
import { Button } from 'semantic-ui-react';

const ModeSwitcher = (props) => {
  return (
    <Button.Group>
      <Button value={1} onClick={props.handleModeChange} positive={props.mode === 1}>
        Game Mode 1
      </Button>
      <Button.Or />
      <Button value={2} onClick={props.handleModeChange} positive={props.mode === 2}>
        Game Mode 2
      </Button>
    </Button.Group>
  )
}

ModeSwitcher.propTypes = {
  mode: PropTypes.number,
  handleModeChange: PropTypes.func,
}

export default ModeSwitcher;
