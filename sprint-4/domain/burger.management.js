import { HAM, CHICKEN, CHEEZE, HAM_STR, CHICKEN_STR, CHEEZE_STR } from './BURGER_TYPE.js';
import { Burger } from "./burger.js";

export function burgerCounter(burgers) {
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

export function makeBurgerTypes(burgerTypes) {
    let makingBurgerTypes = []; 
    for(let i = 0; i < burgerTypes.length; i++) {
        makingBurgerTypes.push(new Burger(burgerTypes[i]));
    }

    return makingBurgerTypes;
}

export function orderBurgersSetter(burgerNames) {
    let burgers = [];
    let burgerCounts = [];
    for (let i = 0; i < burgerNames.length; i++) {
        burgers.push(new Burger(burgerNames[i]));
    }

    burgerCounts = burgerCounter(burgers);
    return [burgers, burgerCounts];
}