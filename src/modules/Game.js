class Game {
  constructor(id) {
    this.id = id;
  }
}
const game = new Game();
const addGame = (gameId) => {
  
  game.id = gameId;
};

const getGames = () => {
  
  return game.id;
};

export { addGame, getGames };