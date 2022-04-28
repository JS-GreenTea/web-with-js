class Employee {
  constructor(burgerSkills, workingTime) {
    this.burgerSkills = burgerSkills;
    this.workingTime = workingTime;
    this.workStack = [];
  }

  workingTime() {
    return this.workingTime;
  }

  workStack() {
    return this.workStack;
  }

  burgerSkills() {
    return this.burgerSkills;
  }

  makeBurger(burgerName) {
    if (!burgerName in this.burgerSkills) {
      return;
    }
    return new Burger(burgerName, this.burgerSkills[burgerName]);
  }
}

module.exports = Employee;
