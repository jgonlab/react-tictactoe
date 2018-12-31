import React, { Component } from 'react';
import '../assets/styles/App.css';
import Header from './Header.jsx';
import Board from './Board.jsx';
import Footer from './Footer.jsx';

const PLAYERX = "Player 1 - Xs";
const PLAYER0 = "Player 2 - 0s";
const GANADOR = "The winner is: ";

class App extends Component {
  constructor(props){
      super(props);
      this.state={
          turn: PLAYERX,
          values: [
              ["-","-","-"],
              ["-","-","-"],
              ["-","-","-"]
          ],
          numMovs: 0,
          winner: false
      }
      this.appClick=this.appClick.bind(this);
      this.resetGame=this.resetGame.bind(this);
  }

  appClick(rowIndex,columnIndex){
      if (!this.state.winner){
          let newValues = JSON.parse(JSON.stringify(this.state.values));
          newValues[rowIndex][columnIndex]=this.state.turn===PLAYERX? "X":"0";
          let newNumMovs = this.state.numMovs + 1;
          let isWinner = this.checkWinner(rowIndex,columnIndex,newValues[rowIndex][columnIndex]);
          let newTurn="";
          if (isWinner){
              newTurn=this.state.turn;
          } else{
              newTurn=this.state.turn===PLAYERX? PLAYER0:PLAYERX; 
          }
          this.setState({
             //turn: this.state.turn===PLAYERX? PLAYER0:PLAYERX,
             turn:newTurn,
             values:newValues,
             numMovs:newNumMovs,
             winner:isWinner
          });
      }
  }
    
  resetGame(){
      this.setState({
          turn: PLAYERX,
          values: [
              ["-","-","-"],
              ["-","-","-"],
              ["-","-","-"]
          ],
          numMovs: 0,
          winner: false
      });
  }
    
  checkWinner(row,col,newValue){
    let tempRow=0;
    let tempCol=0;
    //Compruebo en horizontal
    tempCol = col+1>2? 0:col+1;
    if (this.state.values[row][tempCol] === newValue){
        tempCol = tempCol+1>2? 0:tempCol+1;
        if (this.state.values[row][tempCol] === newValue){
            return true;
        }
    }
    
    //Compruebo en vertical
    tempRow = row+1>2? 0:row+1;
    if (this.state.values[tempRow][col] === newValue){
        tempRow = tempRow+1>2? 0:tempRow+1;
        if (this.state.values[tempRow][col] === newValue){
            return true;
        }
    }
    
    //Compruebo en diagonal
    if (this.state.values[0][0] === newValue &&
        this.state.values[1][1] === newValue &&
        this.state.values[2][2] === newValue){
        return true;
    }
    if (this.state.values[0][2] === newValue &&
        this.state.values[1][1] === newValue &&
        this.state.values[2][0] === newValue){
        return true;
    }

    return false;
  }
    
  render() {
    let text = "";
    if (this.state.winner){
        text = GANADOR + this.state.turn;
    } else{
        text = "Turn of " + this.state.turn;
    }
    //let text = "Turn of " + this.state.turn;
    let nMovs = "Number of movements: " + this.state.numMovs;
    
    return (
       <div>
         <Header text={text}></Header>
         <Board appClick={this.appClick} values={this.state.values}/>
         <Footer resetGame={this.resetGame} text={nMovs}></Footer>
       </div>
    );
  }
}

export default App;
