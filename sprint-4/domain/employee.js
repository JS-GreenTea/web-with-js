import {HAM, CHICKEN, CHEEZE} from './BURGER_TYPE.js';

export class Employee {
    constructor(makingBurgerList, employeeTag){
        this.makingBurgerList = makingBurgerList; // 직원이 만들 수 있는 버거 타입
        this.employeeTag = employeeTag; // 직원 태그 이름
        this.isWorking = false;
        let hamburgerNames = "";
        for(let i = 0; i < makingBurgerList.length; i++){
            hamburgerNames += makingBurgerList[i].getBurgerName();
            if(i !== makingBurgerList.length - 1){
                hamburgerNames += ", ";
            }
        }
        console.log(`직원${employeeTag}은 ${hamburgerNames}를 만들 수 있습니다.`);
    }
    canMakingBurgerTypes(burger){
        const verificationBurgerList = this.makingBurgerList.filter((b) => {
            return burger.getBurgerType() === b.getBurgerType();
        });

        if(verificationBurgerList.length == 0){
            return false;
        }
        return true;
    }

    getEmployeeTag(){
        return this.employeeTag;
    }

    makeBurger(burger, totalTimes) {
        this.isWorking = true;
        return new Promise((resolve, reject) =>{
            setTimeout(() => {
                console.log(`${totalTimes + burger.makingTime}초 직원${this.employeeTag} ${burger.burgerName}` );
                this.isWorking = false;
                resolve();
            }, burger.makingTime * 1000);
        });
    }
}