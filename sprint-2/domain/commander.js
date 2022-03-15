const array = require("./array.js");

class Commander {
  inputValue = '';
  command = '';
  numbers = [];

  constructor(inputValue) {
    this.inputValue = inputValue;
  }

  separateNumbersCommands() {
    const arr = this.inputValue.split(' ');
    this.command = arr[0];
    for(let i = 1; i < arr.length; i++) {
      this.numbers.push(arr[i]);
    }
  }

  selectCommands() {
    if (this.command === 'count') {
      this.count();
    }

    if (this.command === 'add') {
      this.add();
    }
  }
}
module.exports = Commander;
