const EventEmitter = require("events");

const Observable = require("./observable");

class Game extends EventEmitter {
  constructor() {
    super();
    this.currentNum = 0;
    this.eventTarget = "";
  }
  start(startPerson) {
    this.increaseCurrentNum();
    this.setEventTarget();
    this.announceTurn();
    this.receiveAnswer();
  }

  increaseCurrentNum() {
    this.currentNum++;
  }
}

module.exports = Game;
