import PropTypes from 'prop-types';
import React from 'react';
import { Segment, Divider, Header } from 'semantic-ui-react';
import ModeSwitcher from '../ModeSwitcher/ModeSwitcher';

const titleText = "Random Pokemon Generator";

const Title = (props) => {
  return (
    <Segment padded="very" inverted size="massive">
      <Divider horizontal inverted>
        <Header size="huge" inverted>{titleText}</Header>
        <ModeSwitcher {...props} />
      </Divider>
    </Segment>
  )
}

Title.propTypes = {
  mode: PropTypes.number,
}

Title.defaultProps = {
  mode: 1,
}

export default Title;