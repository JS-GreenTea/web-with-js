const EventEmitter = require("events");
const { CLAP } = require("../costants.js");
const { is369In } = require("../utils.js");

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
      return;
    }

    let playerIdx = this.players.findIndex((obj) => obj.name === player.name);
    let currentNum = 1;
    let isPlaying = true;

    while (isPlaying) {
      playerIdx %= this.players.length;
      const player = this.players[playerIdx];
      const result = player.clapOrSpeak(currentNum);

      // 박수 쳐야하는 경우 (3, 6, 9가 포함된 경우)
      if (this.isCorrectAnswer(currentNum, result)) {
        this.emit("pass", player.name, result);
        playerIdx++;
        currentNum++;
      } else {
        this.emit("pass", player.name, result);
        this.emit(
          "fail",
          this.players
            .filter((obj) => obj.name !== player.name)
            .map((obj) => obj.name)
            .join(",")
        );

        isPlaying = false;
      }
    }

    return this;
  }

  isCorrectAnswer(currentNum, result) {
    return (
      (is369In(currentNum) && result === CLAP) ||
      (!is369In(currentNum) && result === currentNum)
    );
  }
}

module.exports = Game;
