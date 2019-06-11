import React from 'react';
import '../css/components.scss';

class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            quotes: ['Quote 0', 'Quote 1', 'A beatiful quote number 3']
        }
    }

    render(){
        const quote_size = this.state.quotes.length;
        let quote = this.state.quotes[ (this.props.quote_id%quote_size) ];
        return(
           <h1 className='quote-box-text'>{quote}</h1> 
        );
    }
}

export default Quote;