class Log {
  constructor(result) {
    this.result = result;
  }

  print() {
    console.log(`${this.result[0]}: ${this.result[1]}`)
  }
}

module.exports = Log;
