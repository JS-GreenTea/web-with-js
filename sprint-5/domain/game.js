const EventEmitter = require("events");
const { CLAP } = require("../costants.js");
const { is369In, joinName } = require("../utils.js");

class Game extends EventEmitter {
  constructor() {
    super();
    this.players = [];
  }

  addPlayer(player) {
    this.players.push(player);
    return this;
  }

  removePlayer(player) {
    this.players.filter((obj) => obj.name !== player.name);
    return this;
  }

  startGameBy(player) {
    if (this.players.length === 0) {
      return this;
    }

    let curNum = 1;
    let isPlaying = true;
    let playerIdx = this.players.findIndex((obj) => obj.name === player.name);

    while (isPlaying) {
      playerIdx %= this.players.length;
      const player = this.players[playerIdx];
      const result = player.clapOrSpeak(curNum);

      if (this.isCorrectAnswer(curNum, result)) {
        this.emit("show", player.name, result);
        playerIdx++;
        curNum++;
      } else {
        const winner = this.players.filter((obj) => obj.name !== player.name);
        this.emit("show", player.name, result);
        this.emit("fail", joinName(winner));
        isPlaying = false;
      }
    }

    return this;
  }

  isCorrectAnswer(curNum, result) {
    return (
      (is369In(curNum) && result === CLAP) ||
      (!is369In(curNum) && result === curNum)
    );
  }
}

module.exports = Game;
