const EventEmitter = require("events");
const _ = require("lodash");

class Person {
  constructor(name, eventEmitter) {
    this.name = name;
    this.eventEmitter = eventEmitter;
    this.checkMyTurn();
  }

  checkMyTurn() {
    this.eventEmitter.on(this.name, this.clapTime.bind(this));
  }

  is369(currentNum) {
    const regExp369 = /[369]/;
    return regExp369.test(currentNum);
  }

  isClap() {
    return _.random(0, 1);
  }

  clapTime (currentNum) {
    const result = this.is369(currentNum) && this.isClap() ? "짝" : currentNum
    this.eventEmitter.emit("receiveTo" + this.name, result);
  }
}

module.exports = Person;
