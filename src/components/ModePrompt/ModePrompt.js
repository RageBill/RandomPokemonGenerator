import React from 'react';
import './ModePrompt.css';
import { Image, Icon, Message } from 'semantic-ui-react';

const trumps = [
  "https://pbs.twimg.com/profile_images/874276197357596672/kUuht00m_400x400.jpg",
  "https://cdn.theatlantic.com/assets/media/img/2016/05/03/WEL_McAdams_Trump_Opener_nobugger/1920.jpg?1462287566",
  "http://www.slate.com/content/dam/slate/articles/news_and_politics/politics/2016/05/160503_POL_trump-president.jpg.CROP.promo-xlarge2.jpg",
  "https://cdn.mtlblog.com/u/2017/11/10/97084cb7e04e953430851c65315cb12d0db743d8.png_1200x630.png",
  "https://www.cheatsheet.com/wp-content/uploads/2018/01/Donald-Trump-Making-a-face.jpg",
  "http://image.mlive.com/home/mlive-media/width620/img/us-world-news/photo/donald-trump-1762ddef25f29dc5.jpg",
  "https://techstory.in/wp-content/uploads/2017/07/donald-trump-cnn-tweet.jpg",
  "https://timesofindia.indiatimes.com/photo/54913591.cms",
  "https://shawglobalnews.files.wordpress.com/2018/03/donald-trump8.jpg?quality=70&strip=all&w=720&h=480&crop=1",
  "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-953303126-1525188971.jpg?crop=1.00xw:0.754xh;0,0.0415xh&resize=768:*",
  "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2016/03/17/103477275-GettyImages-487401374.600x400.jpg?v=1522767624",
  "https://cdn.newsapi.com.au/image/v1/2ad71c9f9cc75b428a6f857e5721adfd",
];

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
    const trump = trumps[Math.floor(Math.random() * trumps.length)];
    return (
      <Message info>
        <Message.Header><h2>Please choose a valid game mode from above!</h2></Message.Header>
        <br/>
        {this.state.loading ?
          <Icon name='circle notched' loading/>
          :
          <div>
            <Image 
              src={trump}
              circular
              size="small"
              className="centered"
            />
            <p className="quote"><i>"{this.state.quote}"</i></p>
          </div>
        }
      </Message>
    )
  }
}