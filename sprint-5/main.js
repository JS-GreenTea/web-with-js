const Game = require("./domain/game");
const Person = require("./domain/person");

function main() {
  const personA = new Person("A");
  const personB = new Person("B");
  const game = new Game();

  personA.checkMyTurn();
  personB.checkMyTurn();

  game.start(personA);
}

main();
