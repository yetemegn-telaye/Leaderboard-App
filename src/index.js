import './style.css';
import {
 refreshScores, submitScore, displayScore, getScores
} from './modules/add-display.js';
import { getScoreList } from './modules/Scores.js';

const main = () => {
 
  getScores();
  const updateScores = async()=>{
    try{
      let scores = await getScoreList();
      displayScore(scores);
    }
    catch(e){
      console.log("Error" + e);
    }
    
  }
  submitScore();
  refreshScores();
  updateScores();
};
main();