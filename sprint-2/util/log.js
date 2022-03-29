class Log {
  constructor(option, result) {
    this.option = option;
    this.result = result;
  }
  print() {
    console.log(`${this.option}:${this.result}`);
  }
}

module.exports = Log;
