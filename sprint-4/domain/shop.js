const Employee = require("./employee.js");
const { burgerInfo } = require("../config.js");

class Shop {
  constructor(numberEmployees) {
    this.orderStartTime = new Date().getTime();
    this.employees = [];

    const randomPick = Math.floor(Math.random() * burgerInfo.length);
    console.log(burgerInfo[randomPick]);

    for (let i = 0; i < numberEmployees; i++) {
      this.employees.push(new Employee(burgerInfo["햄버거"]));
    }
  }

  order(menu) {
    switch (menu) {
      case "햄버거":
        break;
      case "치즈버거":
        break;
      case "치킨버거":
        break;
    }
  }
}

module.exports = Shop;
