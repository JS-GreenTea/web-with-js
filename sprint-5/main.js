const Game = require("./domain/game.js");
const Person = require("./domain/person.js");

function main() {
  const maenji = new Person("맨지");
  const fry = new Person("구라니");

  const game = new Game()
    .on("show", (name, result) => console.log(`${name}: ${result}`))
    .on("fail", (winner) => console.log(`${winner}가 승리했습니다.`));

  maenji.startGameWith(game, fry);
}

main();
