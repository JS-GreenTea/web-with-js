const array = require("./array.js");

class Commander {
  inputValue = '';
  command = '';
  numbers = [];

  constructor(inputValue) {
    this.inputValue = inputValue;
  }

  separateNumbersCommands(inputValue) {
    const arr = inputValue.split(' ');
    this.command = arr[0];
    for(let i = 1; i < arr.length; i++) {
      this.numbers.push(arr[i]);
    }
  }
}
module.exports = Commander;
