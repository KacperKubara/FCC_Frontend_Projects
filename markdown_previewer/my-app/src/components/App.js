import React from "react";
import Editor from "./Editor";
import Preview from "./Preview";
import styles from "./app.module.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
    this.onType = this.onType.bind(this);
  }
  onType(event) {
    this.setState({
      text: event.target.value
    });
  }
  render() {
    return (
      <div className={styles.grid}>
        <div className={styles.header}>
          <h1>Test</h1>
        </div>
        <div className={styles.editor}>
          <Editor text={this.state.text} onType={this.onType} />
        </div>
        <div className={styles.previewer}>
          <Preview text={this.state.text} />
        </div>
      </div>
    );
  }
}

export default App;
