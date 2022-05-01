import {HAM, CHICKEN, CHEEZE} from './BURBGER_TYPE';

class Burger{
    constructor(burgerName){
        this.burgerType = 0;
        this.makingTime = 0;
        
        switch(burgerName) {
            case "햄버거":
                this.burgerType = HAM;
                this.makingTime = 2;    
                break;
            case "치킨버거":
                this.burgerType = CHICKEN;
                this.makingTime = 3;
                break;
            case "치즈버거":
                this.burgerType = CHICKEN;
                this.makingTime = 4;
                break;
            default:
                console.error("Error!")
        }
    }
    getMakingTime() {
        return this.makingTime;
    }

    getBurgerType() {
        return this.burgerType;
    }
}