import React from 'react';
import {calcWinner} from '../Functions/calcWinner';
import {checkFullBoard} from '../Functions/checkFullBoard';
import {compMove} from '../Functions/compMove';
import {Box} from './box'; 
import {GameOver} from './gameOver';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

export class Board extends React.Component {
    constructor(props) {
        super(props);
        var computer = '🧟';
        this.state = {
          boxes: Array(9).fill(null),
          xIsNext: true,
          xPlayer: this.props.location.state.playerIcon,
          boardColor: this.props.location.state.boardColor,
        };
        console.log(this.props.location.state.xPlayer)
      }

    renderBox(i) {
      return <Box 
        value={this.state.boxes[i]}
        onClick={() => this.handleClick(i)}
        />;
    }

    handleClick(i) {
        const boxes = this.state.boxes.slice();
        if (calcWinner(boxes) || boxes[i]) { 
          return;
          }
        boxes[i] = this.state.xIsNext ? this.state.xPlayer : '🧟';
        this.setState({
            boxes: boxes,
            xIsNext: !this.state.xIsNext,
        });
      }

    handleComputerMove(){
        let boxNmbr = compMove(this.state.boxes);
        this.handleClick(boxNmbr);
    }
  
    render() {
        const winner = calcWinner(this.state.boxes);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
          return winnerAnnounced('And the winner is ' + winner + '!');
        } else if (checkFullBoard(this.state.boxes)) {
           return winnerAnnounced('It was a tie!');
        } else {
          status = 'Next player: ' + (this.state.xIsNext ? this.state.xPlayer : '🧟');
          if (!this.state.xIsNext){
              
              this.handleComputerMove();
          }
        }
  
      return (
        <div className= "body clearfix">  
        <div className= "board-wrapper">
          <div className="board">
          <h1 className="game-header">TIC-TAC-TOE</h1>        
          <h2 className="board-heading">{status}</h2>
          <div className="board-row">
            {this.renderBox(0)}
            {this.renderBox(1)}
            {this.renderBox(2)}
          </div>
          <div className="board-row">
            {this.renderBox(3)}
            {this.renderBox(4)}
            {this.renderBox(5)}
          </div>
          <div className="board-row">
            {this.renderBox(6)}
            {this.renderBox(7)}
            {this.renderBox(8)}
          </div>
          </div>  
        </div>
        </div>
      );
    }
  }

  function winnerAnnounced(msg){
      //console.log(winner);
    return  <Redirect to={{pathname: "/gameOver" , state: {win:msg} }} />
  }