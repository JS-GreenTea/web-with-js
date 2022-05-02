import { Employee } from "./domain/employee.js";
import { Burger } from "./domain/burger.js";
import { Shop } from "./domain/shop.js";
import { HAM, CHICKEN, CHEEZE, HAM_STR, CHICKEN_STR, CHEEZE_STR } from './domain/BURGER_TYPE.js';

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

function burgerCounter(burgers) {
    let burgerCounts = [0,0,0];
    for(let i = 0; i < burgers.length; i++) {
        switch(burgers[i].getBurgerType()){
            case HAM:
                burgerCounts[HAM] += 1;
                break;
            case CHICKEN:
                burgerCounts[CHICKEN] += 1;
                break;
            case CHEEZE:
                burgerCounts[CHEEZE] += 1;
                break;
            default:
                console.error("error: invaild Type");
        }
    }
    
    return burgerCounts;
}

function makeBurgerTypes(burgerTypes) {
    let makingBurgerTypes = []; 
    for(let i = 0; i < burgerTypes.length; i++) {
        makingBurgerTypes.push(new Burger(burgerTypes[i]));
    }

    return makingBurgerTypes;
}

function employeeEnrollment(employeeTag, burgerTypes){
    const makingBurgerTypes = makeBurgerTypes(burgerTypes);
    return new Employee(makingBurgerTypes, employeeTag);
}

function orderBurgersSetter(burgerNames) {
    let burgers = [];
    let burgerCounts = [];
    for (let i = 0; i < burgerNames.length; i++) {
        burgers.push(new Burger(burgerNames[i]));
    }

    burgerCounts = burgerCounter(burgers);
    return [burgers, burgerCounts];
}

function employeesSetter(employeesNumber, burgerCounts) {
    let employees = [];
    
    if(employeesNumber === 1){
        employees = oneEmployeeSetter(burgerCounts);
    } else if(employeesNumber === 2){
        employees = twoEmployeesSetter(burgerCounts);
    } else{
        employees = multipleEmployeesSetter(burgerCounts, employeesNumber);
    }    
    
    return employees;
}

function oneEmployeeSetter(burgerCounts) {
    let burgerTypes = [];
    let employees = [];

    if (burgerCounts[CHEEZE] !== 0) {
        burgerTypes = [HAM_STR, CHEEZE_STR];
    } else {
        burgerTypes = [HAM_STR, CHICKEN_STR];
    }
    employees.push(employeeEnrollment(1, burgerTypes));
    return employees;
}

function twoEmployeesSetter(burgerCounts) {
    let employees = [];
    if (burgerCounts[CHEEZE] !== 0 && burgerCounts[CHICKEN] === 0) {
        employees.push(employeeEnrollment(1, [HAM_STR, CHEEZE_STR]));
        employees.push(employeeEnrollment(2, [HAM_STR, CHEEZE_STR]));
    } else if(burgerCounts[CHICKEN] !== 0 && burgerCounts[CHEEZE] === 0){
        employees.push(employeeEnrollment(1, [HAM_STR, CHICKEN_STR]));
        employees.push(employeeEnrollment(2, [HAM_STR, CHICKEN_STR]));
    } else {
        employees.push(employeeEnrollment(1, [HAM_STR, CHEEZE_STR]));
        employees.push(employeeEnrollment(2, [HAM_STR, CHICKEN_STR]));
    }
    return employees;
}

function multipleEmployeesSetter(burgerCounts, employeesNumber){
    let isInputedChicken = false;
    let employees = [];
    for(let i = 0; i < employeesNumber; i++) {
        const EMPLOYEE_TAG = i + 1;
        if(i == 0){
            employees.push(employeeEnrollment(EMPLOYEE_TAG, [HAM_STR, CHEEZE_STR]));
            continue;
        } else if(i == 1){
            employees.push(employeeEnrollment(EMPLOYEE_TAG, [HAM_STR, CHICKEN_STR])); 
            continue;
        } else if(burgerCounts[CHEEZE] < burgerCounts[CHICKEN] && i == 2){
            isInputedChicken = true;
        } 

        if (isInputedChicken) employees.push(employeeEnrollment(EMPLOYEE_TAG, [HAM_STR, CHICKEN_STR])); 
        else employees.push(employeeEnrollment(EMPLOYEE_TAG, [HAM_STR, CHEEZE_STR])); 

        isInputedChicken = !isInputedChicken;
    }
    return employees;
}

main();