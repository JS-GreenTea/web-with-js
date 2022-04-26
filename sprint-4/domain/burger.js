const { burgerInfo } = require("../config");

class Burger {
  constructor(name, makingTime) {
    this.name = name;
    this.makingTime = makingTime;
  }

  get name() {
    return this.name;
  }

  get makingTime() {
    return this.makingTime;
  }
}

module.exports = Burger;
