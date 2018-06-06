import PropTypes from 'prop-types'
import React from 'react';
import './Randomizer.css';
import { Icon, Form } from 'semantic-ui-react';

export default class Randomizer extends React.Component {
  static propTypes = {
    generations: PropTypes.array,
    selected: PropTypes.number,
    loading: PropTypes.bool,
    fields: PropTypes.object,
    handleChange: PropTypes.func,
    handleInput: PropTypes.func,
    handleSubmit: PropTypes.func,
  }

  // Generate the option choices for each pokemon gen
  generateChoices = (selected) => {
    const choices = this.props.generations.map((gen, i) => {
      const labelText = i === 0 ? "All" : "Gen " + (i);
      return (
        <Form.Radio 
          key={"generation-option-"+i}
          label={labelText} 
          value={i} 
          checked={selected === i} 
          onChange={this.props.handleChange}
        />
      );
    });
    return choices;
  }

  render() {
    let selected = this.props.selected;
    return (  
      <Form loading={this.props.loading}>
        <Form.Group widths="equal">
          <Form.Input 
            name="start" 
            label="Start ID" 
            placeholder="Start ID" 
            value={this.props.fields.start} 
            onChange={this.handleInput}
          />
          <Form.Input 
            name="end" 
            label="End ID" 
            placeholder="End ID" 
            value={this.props.fields.end} 
            onChange={this.handleInput}
          />
        </Form.Group>
        <Form.Group inline>
          <label>Generation:</label>
          { this.generateChoices(selected) }
        </Form.Group>
        <Form.Button primary circular onClick={this.props.handleSubmit} className="ranBtn"><Icon name="random"/>Randomize</Form.Button>
      </Form>
    );
  }
}
