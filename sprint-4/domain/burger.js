import { HAM, CHICKEN, CHEEZE, HAM_STR, CHICKEN_STR, CHEEZE_STR } from './BURBGER_TYPE';

class Burger{
    constructor(burgerName){
        this.burgerType = 0;
        this.makingTime = 0;

        switch(burgerName) {
            case HAM_STR:
                this.burgerType = HAM;
                this.makingTime = 2;    
                break;
            case CHICKEN_STR:
                this.burgerType = CHICKEN;
                this.makingTime = 3;
                break;
            case CHEEZE_STR:
                this.burgerType = CHEEZE;
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
}