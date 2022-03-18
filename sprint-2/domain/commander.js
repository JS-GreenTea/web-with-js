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

  count() {
    return this.numbers.customReduce((accumulator, currentValue, currentIndex) => accumulator + currentIndex);
  }

  add() {
    return this.numbers.customReduce((accumulator, currentValue) => accumulator + currentValue);
  }

  getResult() {
    return this.result;
  }

  init() {
    this.separateNumbersCommands();
    this.selectCommands();
  }
}
module.exports = Commander;
