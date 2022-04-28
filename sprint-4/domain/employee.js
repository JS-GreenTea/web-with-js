class Employee {
  constructor(burgerSkills) {
    this.burgerSkills = burgerSkills;
  }

  makeBurger(burgerName) {
    if (!burgerName in this.burgerSkills) {
      return;
    }
    return new Burger(burgerName, this.burgerSkills[burgerName]);
  }
}

module.exports = Employee;
