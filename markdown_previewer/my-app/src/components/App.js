import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Please start typing'
    }
    this.onType = this.onType.bind(this);
  }
  onType(event){
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <div>
        <h1>Test</h1>
        <Editor text={this.state.text}
         onType={this.onType}/>
        <Preview text={this.state.text}/>
      </div>
    );
  }
}

export default App;
