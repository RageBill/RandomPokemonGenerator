import React from 'react';
import './PokemonFusion.css';
import { Container, Loader } from 'semantic-ui-react';

export default class PokemonFusion extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      loading: props.loading,
      showing: props.showing,
    }
  }

  componentDidMount() {
    this.refs.iframe.onload = () => {
      this.refs.iframe.contentWindow.scrollTo(410, 610);
      this.setState({
        loading: false,
      });
    }
  }

  componentWillUnmount() {
    this.refs.iframe.onload = null;
  }

  render() {
    return (
      <Container>
        <Loader
          active={this.state.loading}
        />
        <iframe 
          src="/scrollcontent"
          scrolling="no"
          height="220"
          width="200"
          title="fusionDisplay"
          ref="iframe"
          className={!this.state.showing? "hiddenFrame":""}
        />
      </Container>
    );
  }
}