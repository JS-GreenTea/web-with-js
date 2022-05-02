const Employee = require("./employee.js");
const { burgerInfo } = require("../config.js");

class Shop {
  constructor(numberEmployees) {
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
      this.announce(`직원${i}`, burgerSkill);

      this.employees.push(new Employee(`직원${++i}`, burgerSkill));
    }
  }

  order(menuList) {
    menuList.forEach((menu) => this.distributeWork(menu));
    this.employees.forEach((employee) => employee.work());
  }

  distributeWork(menu) {
    this.sortEmployees();

    for (let employee of this.employees) {
      if (menu in employee.burgerSkills) {
        employee.workingTime += employee.burgerSkills[menu];
        employee.workStack.push(menu);
        break;
      }
    }
  }

  sortEmployees() {
    this.employees.sort((obj1, obj2) => {
      return obj1.workingTime - obj2.workingTime;
    });
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

  announce(employeeName, burgerSkill) {
    console.log(
      `${employeeName}는 ${Object.keys(burgerSkill).join(
        ", "
      )}를 만들 수 있습니다.`
    );
  }
}

module.exports = {
  Shop,
};
