import React from 'react'
import '../css/components.scss'

class Author extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            author_index: 0, 
            author: ['Kacper', 'Marcin']
        }
    }

    render(){
        let author = this.state.author[this.state.author_index];
        return(
           <h1 className='quote-box-author'>Author: {author}</h1> 
        );
    }
}

export default Author;