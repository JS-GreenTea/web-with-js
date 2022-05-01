import { HAM, CHICKEN, CHEEZE, HAM_STR, CHICKEN_STR, CHEEZE_STR } from './BURGER_TYPE.js';

export class Burger{
    constructor(burgerName){
        this.burgerType = 0;
        this.makingTime = 0;
        this.burgerName = burgerName;
        this.isMade = false;

        switch(burgerName) {
            case HAM_STR:
                this.burgerType = HAM;
                this.makingTime = 2;    
                break;
            case CHEEZE_STR:
                this.burgerType = CHEEZE;
                this.makingTime = 3;
                break;
            case CHICKEN_STR:
                this.burgerType = CHICKEN;
                this.makingTime = 4;
                break;
            default:
                console.error("Error!");
        }
    }
    getMakingTime() {
        return this.makingTime;
    }

    getBurgerType() {
        return this.burgerType;
    }

    getBurgerName() {
        return this.burgerName;
    }
    
    getIsMade() {
        return this.isMade;
    }

    setIsMade(isMade) {
        this.isMade = isMade;
    }
}
