const Employee = require("./employee.js");

class Shop {
  constructor() {
    this.employees = [new Employee("fry"), new Employee("yun")];
    this.makingTime = 0;
  }

  order(count) {
    const intervalID = setInterval(() => {
      this.makingTime += 2000;
      this.employees.forEach((employee) => {
        if (count <= 0) {
          console.log("주문이 완료되었습니다.");
          clearInterval(intervalID);
          return;
        }
        employee.makeBurger(this.makingTime);
        count--;
      });
    }, 2000);
  }
}

module.exports = Shop;
