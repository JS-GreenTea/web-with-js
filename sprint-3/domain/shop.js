class Shop {
  constructor(employee1, employee2, start) {
    this.employee1 = employee1;
    this.employee2 = employee2;
    this.start = start;
  }

  order(burgerNum) {
    const makeBurgerInterval1 = setInterval(() => {
      if (burgerNum > 0) {
        let functionEnd = new Date().getTime();
        let result = functionEnd - this.start;
        result = parseInt(result / 1000);
        burgerNum -= 1;
        this.employee1.makeBurger(result);
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
