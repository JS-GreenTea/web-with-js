const EventEmitter = require("events");

const Observable = require("./observable");

class Game extends EventEmitter {
  constructor() {
    super();
    this.currentNum = 0;
    this.eventTarget = "";
  }
  start(startPerson) {
    this.increseCurrentNum();
    this.setEventTarget();
    this.announceTurn();
    this.receiveAnswer();
  }
}

module.exports = Game;
