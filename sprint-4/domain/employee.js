class Employee {
  constructor(name, burgerSkills) {
    this.name = name;
    this.burgerSkills = burgerSkills;
    this.workingTime = 0;
    this.workStack = [];
  }

  makeBurger(burgerName, makingTime, workingTime) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`${workingTime + makingTime}초 ${this.name} ${burgerName}`);
        resolve(workingTime + makingTime);
      }, 1000 * makingTime);
    });
  }

  work() {
    let promise = this.makeBurger(
      this.workStack[0],
      this.burgerSkills[this.workStack[0]],
      0
    );

    for (let i = 1; i < this.workStack.length; i++) {
      promise = promise.then((time) =>
        this.makeBurger(
          this.workStack[i],
          this.burgerSkills[this.workStack[i]],
          time
        )
      );
    }
  }
}

module.exports = Employee;
