import { addGame } from './Game.js';

// Create a new game using the leaderboard api
const createGame = async () => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
    method: 'POST',
    body: JSON.stringify({
      name: 'New Chess Game',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const gameId = (await response.json()).result.substr(14, 20);
  addGame(gameId);
};

// Add score to a game to your api
const addScores = async (gameId, name, score) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
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

const saveScore = (scores, scoresList) => {
  scoresList = scores;
  localStorage.setItem('scorelist', JSON.stringify(scoresList));
  window.location.reload();
};

// Get scores of a game from api
const getScores = async (gameId, scoresList) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
  const scores = (await response.json()).result;
  saveScore(scores, scoresList);
};

// Submit score on submit button clicked
const submitScore = (gameId) => {
  const nameInput = document.querySelector('#input-name');
  const scoreInput = document.querySelector('#input-score');
  const submitBtn = document.querySelector('.btn-submit');
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addScores(gameId, nameInput.value, scoreInput.value);
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
const refreshScores = (gameId, scoresList) => {
  const refreshBtn = document.querySelector('.btn-refresh');
  refreshBtn.addEventListener('click', () => {
    getScores(gameId, scoresList);
  });
};

export {
  createGame, refreshScores, submitScore, displayScore,
};