import React from 'react'
import '../css/components.scss'

class Author extends React.Component{
    constructor(props){
        super(props);
        this.state = { 
            author: ['Kacper', 'Marcin', 'Leonardo']
        }
    }

    render(){
        const author_size = this.state.author.length;
        let author = this.state.author[this.props.author_index%author_size];
        return(
           <h1 className='quote-box-author'>Author: {author}</h1> 
        );
    }
}

export default Author;