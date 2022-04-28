const Employee = require("./employee.js");
const { burgerInfo } = require("../config.js");

class Shop {
  constructor(numberEmployees) {
    this.orderStartTime = new Date().getTime();
    this.employees = [];

    const menus = Object.keys(burgerInfo);
    const randomBurgerSkillList = this.randomBurgerSkill(
      menus,
      numberEmployees,
      "햄버거"
    );
    let i = 0;
    for (let burgerSkill of randomBurgerSkillList) {
      burgerSkill = burgerSkill.reduce(
        (acc, key) => ({ ...acc, [key]: burgerInfo[key] }),
        {}
      );

      this.employees.push(new Employee(burgerSkill, i++));
    }

    this.employees.sort((obj1, obj2) => {
      return obj2.workingTime - obj1.workingTime;
    });

    console.log(this.employees);
  }

  order(menu) {
    this.employees.sort((obj1, obj2) => {
      return obj2.workingTime - obj1.workingTime;
    });

    while (true) {
      this.employees.forEach((employee) => {
        if (menu in employee.burgerSkills) {
        }
      });
    }

    switch (menu) {
      case "햄버거":
        break;
      case "치즈버거":
        break;
      case "치킨버거":
        break;
    }
  }

  randomBurgerSkill(menu, numberEmployees, defaultSkill) {
    let result = [];
    menu = menu.filter((key) => key != defaultSkill);

    for (let i = 0; i < numberEmployees; i++) {
      const randomPick = Math.floor(Math.random() * menu.length);
      result.push([defaultSkill, menu[randomPick]]);
    }
    return result;
  }
}

module.exports = Shop;
