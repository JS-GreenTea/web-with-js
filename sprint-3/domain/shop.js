class Shop {
  constructor(employees) {
    this.employees = employees;
  }

  runningTimeFor() {
    let result = 0;
    let endTime = new Date().getTime();
    result = endTime - this.start;
    result = parseInt(result / 1000);
    return result;
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
