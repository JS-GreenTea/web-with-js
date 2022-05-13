const { CLAP } = require("../costants.js");

class Person {
  constructor(name) {
    this.name = name;
  }

  startGameWith(game, friend) {
    game.addPlayer(this).addPlayer(friend).startGameBy(this);
  }

  clapOrSpeak(num) {
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
