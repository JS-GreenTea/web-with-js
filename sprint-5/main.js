const Game = require("./domain/game.js");
const Person = require("./domain/person.js");

function main() {
  const maenji = new Person("맨지");
  const fry = new Person("구라니");
  const happy = new Person("상엽");
  const singco = new Person("재현");

  const game = new Game()
    .on("showResult", (name, result) => console.log(`${name}: ${result}`))
    .on("showWinner", (winner) =>
      console.log(`${winner} 이(가) 승리했습니다.`)
    );

  maenji.startGameWith(game, fry, happy, singco);
}

main();
