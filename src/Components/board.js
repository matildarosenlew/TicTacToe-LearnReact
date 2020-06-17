import React from 'react';
import {calcWinner} from '../Functions/calcWinner';
import {checkFullBoard} from '../Functions/checkFullBoard';
import {compMove} from '../Functions/compMove';
import {Box} from './box'; 
import {GameOver} from './gameOver';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';

export function Board(props) {   
  const [boxes, setBoxes] = React.useState(Array(9).fill(null));
  const [xIsNext, setNext] = React.useState(true);
  var xPlayer = props.location.state.playerIcon;
  var boardColor = props.location.state.boardColor;
  var border = props.location.state.border;

    const renderBox= (i) => {
      return <Box 
        value={boxes[i]}
        border={border}
        boardColor={boardColor}
        onClick={() => handleClick(i)}
        />;
    }

    const handleClick = (i) => {
        const boxes2 = boxes.slice();
        if (calcWinner(boxes2) || boxes2[i]) { 
          return;
          }
        boxes2[i] = xIsNext ? xPlayer : '🧟';
        setBoxes(boxes2);
        setNext(!xIsNext);
      }

    const handleComputerMove = () => {
        let boxNmbr = compMove(boxes);
        handleClick(boxNmbr);
    }


        const winner = calcWinner(boxes);
        let status;
        if (winner) {
          status = 'Winner: ' + winner;
          return winnerAnnounced('And the winner is ' + winner + '!');
        } else if (checkFullBoard(boxes)) {
           return winnerAnnounced('It was a tie!');
        } else {
          status = 'Next player: ' + (xIsNext ? xPlayer : '🧟');
          if (!xIsNext){
              
              handleComputerMove();
          }
        }
  
      return (
        <div className= "body clearfix">  
        <div className= "board-wrapper">
          <div className="board">
          <h1 className="game-header">TIC-TAC-TOE</h1>        
          <h2 className="board-heading">{status}</h2>
          <div className="board-row">
            {renderBox(0)}
            {renderBox(1)}
            {renderBox(2)}
          </div>
          <div className="board-row">
            {renderBox(3)}
            {renderBox(4)}
            {renderBox(5)}
          </div>
          <div className="board-row">
            {renderBox(6)}
            {renderBox(7)}
            {renderBox(8)}
          </div>
          </div>  
        </div>
        </div>
      );
    }

  function winnerAnnounced(msg){
      //console.log(winner);
    return  <Redirect to={{pathname: "/gameOver" , state: {win:msg} }} />
  }