import React, { Component } from 'react';
import '../assets/styles/App.css';
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
      this.appClick=this.appClick.bind(this);
  }

  appClick(rowIndex,columnIndex){
      let newValues = JSON.parse(JSON.stringify(this.state.values));
      newValues[rowIndex][columnIndex]=this.state.turn===PLAYERX? "X":"0";
      this.setState({
         turn: this.state.turn===PLAYERX? PLAYER0:PLAYERX,
         values:newValues
      });
  }
    
  render() {
    let text = "Turn of " + this.state.turn;
    
    return (
       <div>
         <Header text={text}></Header>
         <Board appClick={this.appClick} values={this.state.values}/>
       </div>
    );
  }
}

export default App;
