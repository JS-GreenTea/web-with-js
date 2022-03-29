const Employee = require("./employee.js");

class Shop {
  constructor() {
    this.employees = [new Employee("fry"), new Employee("yun")];
    this.burgerTime = 2000;
    this.orders = 0;
  }

  order(count) {
    this.orders += count;

    let orderTime = 0;
    const intervalID = setInterval(() => {
      orderTime += this.burgerTime;
      this.work(orderTime, intervalID);
    }, this.burgerTime);
  }

  work(orderTime, intervalID) {
    this.employees.forEach((employee) => {
      if (this.orders <= 0) {
        this.finishOrder(intervalID);
        return;
      }
      this.announce(employee.makeBurger(), orderTime);
      this.orders--;
    });
  }

  finishOrder(intervalID) {
    this.announce("주문이 완료되었습니다.");
    clearInterval(intervalID);
  }

  announce(msg, time) {
    const prefix = time ? time / 1000 + ": " : "";
    console.log(`${prefix}${msg}`);
  }
}

module.exports = Shop;
