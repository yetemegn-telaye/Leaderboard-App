import './style.css';
import {
 refreshScores, submitScore, displayScore,
} from './modules/add-display.js';
//import { getGames } from './modules/Game.js';

const main = () => {
  // let scoresList = [];

  // if (localStorage.getItem('scorelist') === null) {
  //   localStorage.setItem('scorelist', JSON.stringify(scoresList));
  // } else {
  //   scoresList = JSON.parse(localStorage.getItem('scorelist'));
  // }

  //createGame();

  // const saveGame = async()=>{
  //   try{
  //     gameId = await getGames();
  //   }
  //   catch(e){
  //     console.log("Error" + e);
  //   }
    
    
  // }
  // saveGame();

  submitScore();
  refreshScores();
  
};
main();