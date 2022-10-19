import './style.css';
import { addScore, displayScore } from './modules/add-display.js';

const main = () => {
  let scoresList = [];

  const nameInput = document.querySelector('#input-name');
  const scoreInput = document.querySelector('#input-score');
  const submitBtn = document.querySelector('.btn-submit');
  if (localStorage.getItem('scores') === null) {
    scoresList.push({ id: 0, name: 'tati', score: '30' });
    localStorage.setItem('scores', JSON.stringify(scoresList));
  } else {
    scoresList = JSON.parse(localStorage.getItem('scores'));
  }
  submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    addScore(nameInput.value, scoreInput.value, scoresList);
    nameInput.value = null;
    scoreInput.value = null;
  });
  displayScore(scoresList);
};
main();