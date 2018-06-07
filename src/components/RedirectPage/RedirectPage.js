import React from 'react';
import { Redirect } from 'react-router-dom';

const RedirectPage = (props) => {
  const pokemon1 = props.match.params.first || 1;
  const pokemon2 = props.match.params.second || 2;
  const pokemon3 = props.match.params.third || 0;
  const url = `http://pokefusion.japeal.com/${pokemon1}/${pokemon2}/${pokemon3}`;
      
  return (
    <Redirect to={url}/>
  )
}

export default RedirectPage;