class Employee {
  constructor(name) {
    this.name = name;
  }

  makeBurger(time) {
    console.log(`${time / 1000}: 햄버거를 완성하였습니다.`);
  }
}

module.exports = Employee;
