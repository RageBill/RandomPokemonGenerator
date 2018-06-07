import React from 'react';

const ScrollContent = (props) => {
  const pokemon1 = props.match.params.first || 1;
  const pokemon2 = props.match.params.second || 2;
  const pokemon3 = props.match.params.third || 0;
  const url = `/redirectpage/${pokemon1}/${pokemon2}/${pokemon3}`;
  return (
    <iframe 
      src={url}
      height="2000"
      width="1000"
      title="scrollContent"
      scrolling="no"
    />
  )
}

export default ScrollContent;