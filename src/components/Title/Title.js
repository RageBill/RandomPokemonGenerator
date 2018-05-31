import PropTypes from 'prop-types';
import React from 'react';
import styles from './Title.css';
import { Segment, Divider, Header } from 'semantic-ui-react';

const Title = (props) => {
  return (
    <Segment padded="very" inverted size="massive">
      <Divider horizontal inverted>
        <Header size="huge" inverted>{props.text}</Header>
      </Divider>
    </Segment>
  )
}

Title.propTypes = {
  text: PropTypes.string,
}

Title.defaultProps = {
  text: "--Title Text Here--",
}

export default Title;