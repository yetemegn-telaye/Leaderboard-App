import './style.css';
import {
  createGame, refreshScores, submitScore, displayScore,
} from './modules/add-display.js';
import { getGames } from './modules/Game.js';

const main = () => {
  let gameId= "";
  
  let scoresList = [];

  if (localStorage.getItem('scorelist') === null) {
    localStorage.setItem('scorelist', JSON.stringify(scoresList));
  } else {
    scoresList = JSON.parse(localStorage.getItem('scorelist'));
  }

  createGame();

  const saveGame = async()=>{
    try{
      gameId = await getGames();
    }
    catch(e){
      console.log("Error" + e);
    }
    submitScore(gameId);
    refreshScores(gameId,scoresList);
    
  }
  saveGame();
  // submitScore(gameId);
  // refreshScores(gameId, scoresList);
  displayScore(scoresList);
};
main();