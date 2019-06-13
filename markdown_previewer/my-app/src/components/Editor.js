import React from "react";
import styles from "./editor.module.css";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.props.onType(event);
  }
  render() {
    return (
      <form>
        <textarea
          className={styles.textarea}
          placeholder="Insert text here"
          value={this.props.text}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Editor;
