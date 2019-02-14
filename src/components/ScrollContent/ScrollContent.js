import React from 'react';

const proxy = "https://cors-anywhere.herokuapp.com/";

export default class ScrollContent extends React.Component {

  componentDidMount() {
    const pokemon1 = this.props.match.params.first || 1;
    const pokemon2 = this.props.match.params.second || 2;
    const pokemon3 = this.props.match.params.third || 0;
    const url = `http://pokefusion.japeal.com/${pokemon1}/${pokemon2}/${pokemon3}`;
    this.fetchData(proxy + url);
  }

  componentWillUnmount() {
    this.refs.iframe.onload = null;
  }

  fetchData = (url) => {
    fetch(url)
    .then((response) => response.text())
    .then((response) => {
      this.refs.iframe.srcdoc = response;
    });
  }

  render() {
    return (
      <iframe 
        src=""
        height="685"
        width="1000"
        title="scrollContent"
        scrolling="no"
        ref="iframe"
      />
    );
  }
}