import { addScoreList } from './Scores.js';

const apiKey = '3MROiN3gbdAG1ahXT7Zl';
const baseUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games';

// Add score to a game to your api
const addScores = async (name, score) => {
  const response = await fetch(`${baseUrl}/${apiKey}/scores`, {
    method: 'POST',
    body: JSON.stringify({
      user: name,
      score,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  await response.json();
};

// Get scores of a game from api
const getScores = async () => {
  const response = await fetch(`${baseUrl}/${apiKey}/scores`);
  const scores = (await response.json()).result;

  return scores;
};
addScoreList(getScores());

// Submit score on submit button clicked
const submitScore = () => {
  const nameInput = document.querySelector('#input-name');
  const scoreInput = document.querySelector('#input-score');
  const submitBtn = document.querySelector('.btn-submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addScores(nameInput.value, scoreInput.value);
    nameInput.value = null;
    scoreInput.value = null;
  });
};

const displayScore = (scoresList) => {
  const tBody = document.createElement('tbody');
  const scoreContainer = document.querySelector('.score-container');
  scoresList.forEach((score) => {
    tBody.innerHTML += `
        <tr class="score-row"><td class="score-info">${score.user} : ${score.score}</td></tr>
        `;
  });
  scoreContainer.appendChild(tBody);
};

// get Scores of a game on refresh button clicked
const refreshScores = () => {
  const refreshBtn = document.querySelector('.btn-refresh');
  refreshBtn.addEventListener('click', () => {
    getScores();
    document.location.reload();
  });
};

export {
  refreshScores, submitScore, getScores, displayScore,
};