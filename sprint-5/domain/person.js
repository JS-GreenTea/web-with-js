const Game = require("./game.js");
const { CLAP } = require("../costants.js");

class Person {
  constructor(name) {
    this.name = name;
  }

  startWith(friend) {
    new Game()
      .addPlayer(this)
      .addPlayer(friend)
      .on("pass", (name, result) => console.log(`${name}: ${result}`))
      .on("fail", (winner) => console.log(`${winner}가 승리했습니다.`))
      .startGameBy(this);
  }

  play(num) {
    if (
      num
        .toString()
        .split("")
        .findIndex((num) => num != 0 && num % 3 === 0) !== -1
    ) {
      return Math.floor(Math.random() * 2) ? CLAP : num;
    }
    return num;
  }
}

module.exports = Person;
