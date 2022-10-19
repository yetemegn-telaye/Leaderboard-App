class Score {
  constructor(id, name, score) {
    this.id = id;
    this.name = name;
    this.score = score;
  }
}

const addScore = (name, score, scoresList) => {
  const scoreObj = new Score(scoresList.length, name, score);
  scoresList.push(scoreObj);
  localStorage.setItem('scores', JSON.stringify(scoresList));
  window.location.reload();
};

const displayScore = (scoresList) => {
  const tBody = document.createElement('tbody');
  const scoreContainer = document.querySelector('.score-container');
  scoresList.forEach((score) => {
    tBody.innerHTML += `
        <tr class="score-row"><td class="score-info">${score.name} : ${score.score}</td></tr>
        `;
  });
  scoreContainer.appendChild(tBody);
};

export { addScore, displayScore };