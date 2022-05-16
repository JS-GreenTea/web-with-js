const EventEmitter = require("events");
const _ = require("lodash");

const isFail = require('../util/check.js');

class Person {
  constructor(name, eventEmitter) {
    this.name = name;
    this.eventEmitter = eventEmitter;
    this.checkMyTurn();
  }

  checkMyTurn() {
    this.eventEmitter.on(this.name, this.clapTime.bind(this));
  }

  isClap() {
    return _.random(0, 1);
  }

  clapTime (currentNum) {
    const result = isFail(currentNum) && this.isClap() ? "짝" : currentNum
    this.eventEmitter.emit("receiveTo" + this.name, result);
  }
}

module.exports = Person;
