import React, { Component } from 'react';
import './App.css';
import Header from './Header.jsx';
import Board from './Board.jsx';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";

class App extends Component {
  constructor(props){
      super(props);
      this.state={
          turn: PLAYERX,
          values: [
              ["-","-","0"],
              ["-","X","-"],
              ["-","-","-"]
          ]
      }
  }
    
    
  render() {
    let text = "Turn of " + this.state.turn;
    
    return (
       <div>
         <Header text={text}></Header>
         <Board values={this.state.values}/>
       </div>
    );
  }
}

export default App;
