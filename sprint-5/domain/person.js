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

  clapTime(currentNum) {
    if (this.is369(currentNum)) {
      if (this.isClap()) {
        this.emit("receiveTo" + this.name, "짝");
        return;
      }
      this.emit("receiveTo" + this.name, currentNum);
      return;
    }
  }
}

module.exports = Person;
