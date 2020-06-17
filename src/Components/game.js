import React from 'react';
import {Board} from './board'; 
import {PlayerIcon} from './playerIcon';
import {ColorBox} from './colorBox';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';


export const Game = (props) => {

  const [emoji, setEmoji] = React.useState('');
  const [boardColor, setBoardColor] = React.useState('');
  const [border, setBorderCol] = React.useState('');
  const [pickedColor, setPickedColor] = React.useState(false);
  const [pickedIcon, setPickedIcon] = React.useState(false);
  const [clickedPlay, setPlay] = React.useState(false);

  const emojiList = ['🧠', '🦾', '👵', '🦹‍♂️', '🧚‍♀️'];
  const colorHex = [{'backCol':'#E27D60', 'border':'#E8A87C'}, {'backCol':'#E8A87C', 'border':'#E27D60'}, {'backCol':'#C38D9E', 'border':'#E8A87C'}, {'backCol':'#41B3A3','border':'#E8A87C'}, {'backCol':'#41B3C0', 'border':'#E8A87C'}];


  const renderIcon = (emoji) => {
    return <PlayerIcon
      icon={emoji}
      onClick={() => handleClick(emoji)}
      />;
  }

  const renderColorPick = (hexCode, border) => {
    return <ColorBox
      hexCode={hexCode}
      border = {border}
      onClick={() => handleClickCol(hexCode, border)}
      />;
  }

  const handleClick = (icon) => {
      setEmoji(icon);
      setPickedIcon(true);
  }

  const handleClickCol = (hexCode, border) => {
    setBoardColor(hexCode);
    setBorderCol(border);
    setPickedColor(true);
}

  const handleClickPlay = () => {
    setPlay(true);
}


      if (pickedIcon && pickedColor && clickedPlay) {
        return startGame(emoji, boardColor, border);
      } 
      const iconPrompt = 'Choose your player icon & board color!';
      const colorPrompt = 'Choose your board color!';


      return (
        <div className= "wrapper">
          <h1 className="game-header">TIC-TAC-TOE</h1>    
          <h2 className="board-heading">{iconPrompt}</h2>
          <div className="icon-row">
          {emojiList.map((emoji) => renderIcon(emoji))}
          </div>
           <div className="color-row">
          {colorHex.map((elem) => renderColorPick(elem.backCol, elem.border))}
          </div> 
          <button className="play-button2"  onClick={() => handleClickPlay()}>PLAY</button>
        </div>
      );
    }

  const startGame = (emoji, color, border) => {
    return  <Redirect to={{pathname: "/gameStart" , state: {playerIcon: emoji, boardColor: color, border:border} }} />
}