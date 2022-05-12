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
}

module.exports = Person;
다