import React from 'react';
import Quote from './Quote'
import Author from './Author'
import '../css/components.scss';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      quote_id: 0
    }
    this.generateQoute = this.generateQoute.bind(this)
  }
  generateQoute() {
    this.setState({
      quote_id: this.state.quote_id + 1
    });
  }
  render() {
    
    return (
      <div className="quote-box">
      <Quote id="text" quote_id={this.state.quote_id}/>
      <hr/>
      <Author id="author" author_index={this.state.quote_id}/>
      <div class="buttons">
      <a class="button" id="quote" onClick={this.generateQoute}>Quote</a>
      <a href="https://twitter.com/" class="button" id="tweet-quote">Tweet</a>
      </div>
      </div>
    );
  }
}

export default App;
