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
  }

  removePlayer(player) {
    this.players = this.players.filter((obj) => obj.name !== player.name);
  }

  startGameBy(player) {
    if (this.players.length === 0) {
      return;
    }

    let curNum = 1;
    let isPlaying = true;
    let playerIdx = this.players.findIndex((obj) => obj.name === player.name);

    while (isPlaying) {
      playerIdx %= this.players.length;
      const player = this.players[playerIdx];
      const result = player.clapOrSpeak(curNum);

      if (this.isCorrectAnswer(curNum, result)) {
        this.emit("showResult", player.name, result);
        playerIdx++;
        curNum++;
      } else {
        const winner = this.players.filter((obj) => obj.name !== player.name);
        this.emit("showResult", player.name, result);
        this.emit("showWinner", joinName(winner));
        isPlaying = false;
      }
    }
  }

  isCorrectAnswer(curNum, result) {
    return (
      (is369In(curNum) && result === CLAP) ||
      (!is369In(curNum) && result === curNum)
    );
  }
}

module.exports = Game;
