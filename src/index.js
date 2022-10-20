import './style.css';
import {
  createGame, refreshScores, submitScore, displayScore,
} from './modules/add-display.js';
import { getGames } from './modules/Game.js';

const main = () => {
  const gameId = getGames();
  let scoresList = [];

  if (localStorage.getItem('scorelist') === null) {
    localStorage.setItem('scorelist', JSON.stringify(scoresList));
  } else {
    scoresList = JSON.parse(localStorage.getItem('scorelist'));
  }

  createGame();
  submitScore(gameId);
  refreshScores(gameId, scoresList);
  displayScore(scoresList);
};
main();