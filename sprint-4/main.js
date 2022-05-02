import { employeesSetter } from "./domain/employee.management.js";
import { orderBurgersSetter } from './domain/burger.management.js';
import { Shop } from "./domain/shop.js";

function main() {
    const INPUT = [3, "햄버거", "치킨버거"];
    let [employeesNumber, ...burgerNames] = INPUT;
    let employees = [];
    let burgers = [];
    let burgerCounts = [];

    [burgers, burgerCounts] = orderBurgersSetter(burgerNames);

    employees = employeesSetter(employeesNumber, burgerCounts);

    let shop = new Shop(employees);
    shop.order(burgers);
}

main();