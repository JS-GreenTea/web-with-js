const Shop = require("./domain/shop");
const Employee = require("./domain/employee");

function main() {
  const [employeeNum, ...menu] = [
    3,
    "치즈버거",
    "치킨버거",
    "햄버거",
    "치즈버거",
  ];
  const employees = [];
  for (let i = 0; i < employeeNum; i++) {
    employees.push(new Employee(`직원${i + 1}`));
  }
  const lotteria = new Shop(employees);
  lotteria.order(menu);
}

main();
