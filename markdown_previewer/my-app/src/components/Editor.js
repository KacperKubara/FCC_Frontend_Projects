import React from "react";
import styles from "./editor.css"

class Editor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: 'Please start typing'
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.props.onType(event);
    }
    render(){
        return(
            <form>
            <textarea value={this.props.text}
            onChange={this.handleChange}/>
            </form>
        );
    }
}

export default Editor