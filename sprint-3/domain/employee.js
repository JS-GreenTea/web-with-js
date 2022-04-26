class Employee {
  runningTime = 0;

  constructor(name) {
    this.name = name;
  }

  runTimeFor(startTime) {
    let result = 0;
    let endTime = new Date().getTime();
    result = endTime - startTime;
    result = parseInt(result / 1000);
    return result;
  }

  makeBurger(startTime) {
    this.runningTime = this.runTimeFor(startTime);
  }

  getRunningTime() {
    return this.runningTime;
  }
}

module.exports = Employee;
