import { HAM, CHICKEN, CHEEZE, HAM_STR, CHICKEN_STR, CHEEZE_STR } from './BURGER_TYPE.js';
import { Employee } from './employee.js';
import { makeBurgerTypes } from "./burger.management.js";

export function employeeEnrollment(employeeTag, burgerTypes){
    const makingBurgerTypes = makeBurgerTypes(burgerTypes);
    return new Employee(makingBurgerTypes, employeeTag);
}

export function employeesSetter(employeesNumber, burgerCounts) {
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

export function oneEmployeeSetter(burgerCounts) {
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

export function twoEmployeesSetter(burgerCounts) {
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

export function multipleEmployeesSetter(burgerCounts, employeesNumber){
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