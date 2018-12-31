import React from 'react';

export default class Footer extends React.Component{
    
    clickReset(){
        this.props.resetGame();
    }
    
    render(){
        return( <div>
                    <p>{this.props.text}</p>
                    <button onClick={()=>this.clickReset()}>Reset game</button>
                </div>);
    }
}