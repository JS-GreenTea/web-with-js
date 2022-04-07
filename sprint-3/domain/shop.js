class Shop {
  constructor(employees) {
    this.employees = employees;
  }

  alarmRunningTimeFor(employee) {
    console.log(
      employee.getRunningTime(),
      ":",
      employee.name,
      "햄버거를 완성하였습니다."
    );
  }

  order(burgerNum) {
    const makeBurgerInterval1 = setInterval(() => {
      if (burgerNum > 0) {
        burgerNum -= 1;
        this.employee1.makeBurger(this.runningTimeFor());
      } else if (burgerNum <= 0) {
        clearInterval(makeBurgerInterval1);
      }
    }, 2000);

    const makeBurgerInterval2 = setInterval(() => {
      if (burgerNum > 0) {
        let functionEnd = new Date().getTime();
        let result = functionEnd - this.start;
        result = parseInt(result / 1000);
        burgerNum -= 1;
        this.employee2.makeBurger(result);
      } else if (burgerNum <= 0) {
        clearInterval(makeBurgerInterval2);
      }
    }, 2000);
  }
}

module.exports = Shop;
