import React from 'react';
import {Board} from './board'; 
import {PlayerIcon} from './playerIcon';
import {ColorBox} from './colorBox';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';


export class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      emoji: '',
      emojiList : ['🧠', '🦾', '👵', '🦹‍♂️', '🧚‍♀️'],
      colorHex : ['#E27D60', '#E8A87C', 'C38D9E', '#41B3A3', '#000000'],
      boardColor: '',
      pickedColor : false,
      pickedIcon : false,
    };

  }

  renderIcon(emoji) {
    return <PlayerIcon
      icon={emoji}
      onClick={() => this.handleClick(emoji)}
      />;
  }

  renderColorPick(hexCode) {
    return <ColorBox
      hexCode={hexCode}
      onClick={() => this.handleClickCol(hexCode)}
      />;
  }

  handleClick(icon) {
      this.setState({
        emoji: icon,
        pickedIcon: true,
    });
  }

  handleClickCol(hexCode) {
    this.setState({
      boardColor: hexCode,
      pickedColor: true,
  });
}



    render() {
      if (this.state.pickedIcon &&this.state.pickedColor) {
        return startGame(this.state.emoji, this.state.boardColor);
      }
      let prompt = 'Choose your player icon!';


      return (
        <div className= "wrapper">
          <h1 className="game-header">TIC-TAC-TOE</h1>    
          <h2 className="board-heading">{prompt}</h2>
          <div className="icon-row">
          {this.state.emojiList.map((emoji) => this.renderIcon(emoji))}
          </div>
           <div className="color-row">
          {this.state.colorHex.map((hexCode) => this.renderColorPick(hexCode))}
          </div> 
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }

  function startGame(emoji, color){
    return  <Redirect to={{pathname: "/gameStart" , state: {playerIcon: emoji, boardColor: color} }} />
}