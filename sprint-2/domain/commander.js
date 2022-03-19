const array = require("./array.js");
const { add, count } = require("./operations.js");

class Commander {
  constructor() {
    this.options = { add, count };
  }

  parse(command) {
    let [option, ...array] = command.split(" ");

    if (option == "add") {
      array = array.map((x) => Number(x));
    }

    return [option, array];
  }
}

module.exports = Commander;
