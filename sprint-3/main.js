const Employee = require("./domain/employee.js");
const Shop = require("./domain/shop.js");

function main() {
  const employee1 = new Employee('maenji');
  const employee2 = new Employee('singco');
  const employees = [employee1, employee2];

  const shop = new Shop(employees);
  shop.order(5);
}

main();
