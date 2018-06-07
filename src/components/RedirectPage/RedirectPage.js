import React from 'react';

export default class RedirectPage extends React.Component {
  
  componentDidMount() {
    const pokemon1 = this.props.match.params.first || 1;
    const pokemon2 = this.props.match.params.second || 2;
    const pokemon3 = this.props.match.params.third || 0;
    const url = `http://pokefusion.japeal.com/${pokemon1}/${pokemon2}/${pokemon3}`;
    window.location.href = url;
  }

  render() {
    return (
      <div></div>
    );
  }
}
