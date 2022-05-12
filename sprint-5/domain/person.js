const EventEmitter = require("events");
const _ = require("lodash");

class Person extends EventEmitter {
  constructor(name) {
    super();
    this.name = name;
  }

  checkMyTurn() {
    this.on(this.name, this.clapTime);
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
