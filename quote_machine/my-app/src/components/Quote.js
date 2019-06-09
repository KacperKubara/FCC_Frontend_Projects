import React from 'react';
import quote_db from '../quote_db'
import '../css/components.scss';

class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quote_index: 0, 
            quotes: ['Quote 0', 'Quote 1']
        }
    }

    render(){
        let quote = this.state.quotes[this.state.quote_index];
        return(
           <h1 className='quote-box-text'>{quote}</h1> 
        );
    }
}

export default Quote;