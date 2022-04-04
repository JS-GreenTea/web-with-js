const Employee = require("./domain/employee.js");
const Shop = require("./domain/shop.js");

function main() {
  const start = new Date().getTime();
  const employee1 = new Employee();
  const employee2 = new Employee();
  const shop = new Shop(employee1, employee2, start);
  shop.order(5);
}

main();
