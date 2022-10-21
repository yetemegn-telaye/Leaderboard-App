class Scores {
  constructor(scores) {
    this.scores=scores;
  }
}
const score = new Scores();
const addScoreList = (scores) => {
  
  score.scores= scores;
};

const getScoreList = () => {
  return score.scores;
};

export { addScoreList, getScoreList};