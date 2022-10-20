class Game {
  constructor(id) {
    this.id = id;
  }
}

const addGame = (gameId) => {
  const game = new Game();
  game.id = gameId;
};

const getGames = () => {
  const game = new Game();
  return game.id;
};

export { addGame, getGames };