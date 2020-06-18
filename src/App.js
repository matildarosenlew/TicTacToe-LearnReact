import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import {Game} from './Components/game';
import { Board } from './Components/board';
import {GameOver} from './Components/gameOver';

function App() {
  return (
    <div className="Game">
        <BrowserRouter>
          <Route exact path="/" component={Game}/>
          <Route path="/gameStart" component={Board}/>
          <Route path="/gameOver" component={GameOver}/>
        </BrowserRouter>
    </div>
  );
}



export default App;
