import React from 'react';
import './ModePrompt.css';
import { Image, Icon, Message } from 'semantic-ui-react';

export default class ModePrompt extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      quote: "",
    }
  }

  getRandomQuote = () => {
    const url = "https://api.whatdoestrumpthink.com/api/v1/quotes/random";
    fetch(url, {
      headers: {
        Accept: "application/json", 
      },
    }).then(this.parseJSON)
      .then(this.updateQuote);
  }

  parseJSON = (response) => {
    return response.json();
  }

  updateQuote = (response) => {
    this.setState({
      loading: false,
      quote: response.message, 
    });
  }

  componentDidMount() {
    this.getRandomQuote();
  }

  render(){
    return (
      <Message info>
        <Message.Header>Please choose a valid game mode from above!</Message.Header>
        <br/>
        {this.state.loading ?
          <Icon name='circle notched' loading/>
          :
          <div>
            <Image src="https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg" avatar/>
            <p>{this.state.quote}</p>
          </div>
        }
      </Message>
    )
  }
}