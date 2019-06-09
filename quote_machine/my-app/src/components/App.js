import React from 'react';
import Quote from './Quote'
import Author from './Author'
import '../css/components.scss';

class App extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    
    return (
      <div className="quote-box">
      <Quote id="text"/>
      <hr/>
      <Author id="author"/>
      <div class="buttons">
      <a class="button" id="quote">Quote</a>
      <a href="https://twitter.com/" class="button" id="tweet-quote">Tweet</a>
      </div>
      </div>
    );
  }
}

export default App;
