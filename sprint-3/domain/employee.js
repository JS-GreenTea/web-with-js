class Employee {
  constructor() {}

  runTimeFor() {
    let result = 0;
    let endTime = new Date().getTime();
    result = endTime - Employee.startTime;
    result = parseInt(result / 1000);
    return result;
  }

  makeBurger() {
    this.runningTime = this.runTimeFor();
  }

  getRunningTime() {
    return this.runningTime;
  }
}

module.exports = Employee;
