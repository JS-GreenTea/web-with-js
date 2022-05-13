const { CLAP } = require("../costants.js");
const { is369In } = require("../utils.js");

class Person {
  constructor(name) {
    this.name = name;
  }

  startGameWith(game, friend) {
    game.addPlayer(this).addPlayer(friend).startGameBy(this);
  }

  clapOrSpeak(num) {
    if (is369In(num)) {
      return Math.floor(Math.random() * 2) ? CLAP : num;
    }

    return num;
  }
}

module.exports = Person;
