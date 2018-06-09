import React, { Component } from 'react';
import { Segment, Divider, Header } from 'semantic-ui-react';
import ModeSwitcher from '../ModeSwitcher/ModeSwitcher';

const titleText = "Random Pokemon Generator";

export default class Title extends Component {
  constructor(props){
    super(props);

    this.state = {
      mode: parseInt(props.match.params.mode, 10),
    }
  }

  static getDerivedStateFromProps = (nextProps) => {
    return { mode: parseInt(nextProps.match.params.mode, 10) }
  }

  handleModeChange = (evt, data) => {
    this.setState({
      mode: data.value,
    });
  }

  render(){
    return (
      <Segment inverted size="massive">
        <Divider horizontal inverted>
          <Header size="large" inverted>{titleText}</Header>
          <br/>
          <ModeSwitcher mode={this.state.mode} handleModeChange={this.handleModeChange}/>
        </Divider>
      </Segment>
    )
  }
}