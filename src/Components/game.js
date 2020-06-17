import React from 'react';
import {Board} from './board'; 
import {PlayerIcon} from './playerIcon';
import {ColorBox} from './colorBox';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';


export function Game(props) {

  const [emoji, setEmoji] = React.useState('');
  const [boardColor, setBoardColor] = React.useState('');
  const [pickedColor, setPickedColor] = React.useState(false);
  const [pickedIcon, setPickedIcon] = React.useState(false);
  var emojiList = ['🧠', '🦾', '👵', '🦹‍♂️', '🧚‍♀️'];
  var colorHex = ['#E27D60', '#E8A87C', 'C38D9E', '#41B3A3', '#000000'];

  const renderIcon = (emoji) => {
    return <PlayerIcon
      icon={emoji}
      onClick={() => handleClick(emoji)}
      />;
  }

  const renderColorPick = (hexCode) => {
    return <ColorBox
      hexCode={hexCode}
      onClick={() => handleClickCol(hexCode)}
      />;
  }

  const handleClick = (icon) => {
      setEmoji(icon);
      setPickedIcon(true);
  }

  const handleClickCol = (hexCode) => {
    setBoardColor(hexCode);
    setPickedColor(true);
}


      if (pickedIcon && pickedColor) {
        return startGame(emoji, boardColor);
      }
      let prompt = 'Choose your player icon!';


      return (
        <div className= "wrapper">
          <h1 className="game-header">TIC-TAC-TOE</h1>    
          <h2 className="board-heading">{prompt}</h2>
          <div className="icon-row">
          {emojiList.map((emoji) => renderIcon(emoji))}
          </div>
           <div className="color-row">
          {colorHex.map((hexCode) => renderColorPick(hexCode))}
          </div> 
        </div>
      );
    }

  function startGame(emoji, color){
    return  <Redirect to={{pathname: "/gameStart" , state: {playerIcon: emoji, boardColor: color} }} />
}