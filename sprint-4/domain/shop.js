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

      this.employees.push(new Employee(`직원${++i}`, burgerSkill));
      console.log(
        `직원${i}는 ${Object.keys(burgerSkill).join(", ")}를 만들 수 있습니다.`
      );
    }
  }

  orderAll(menuList) {
    menuList.forEach((menu) => this.order(menu));
    this.employees.forEach((employee) => employee.work());
  }

  order(menu) {
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
}

function sampleShopData() {
  return 3;
}

module.exports = {
  Shop,
  sampleShopData,
};
