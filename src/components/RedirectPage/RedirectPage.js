import React from 'react';

export default class RedirectPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      first: props.match.params.first || 1,
      second: props.match.params.second || 2,
    }
  }

  static getDerivedStateFromProps(nextProps, state){
    return({
      first: nextProps.match.params.first || 1,
      second: nextProps.match.params.second || 2,
    });
  }

  componentDidMount() {
    const pokemon1 = this.state.first;
    const pokemon2 = this.state.second;
    const url = `http://pokefusion.japeal.com/${pokemon1}/${pokemon2}/0`;
    window.location.href = url;
  }

  render() {
    return (
      <div></div>
    );
  }
}
