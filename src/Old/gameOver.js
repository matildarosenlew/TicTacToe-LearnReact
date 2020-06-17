import React from 'react';
import { BrowserRouter, Route, Link, Redirect } from 'react-router-dom';


export class GameOver extends React.Component {
    constructor(props) {
      super(props);
      console.log(props.location);
    }
  
    render() {
        console.log(this.props);
      return (
        <div className="wrapper">
          <h1 className="game-header">TIC-TAC-TOE</h1>    
          <h2 className="board-heading">{this.props.location.state.win}</h2>
          <button className="play-button">
              <Link to='/'>
              GO AGAIN    
              </Link>
          </button>
        </div>
      );
    }
  }
