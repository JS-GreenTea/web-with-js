import { HAM, CHICKEN, CHEEZE, HAM_STR, CHICKEN_STR, CHEEZE_STR } from './BURGER_TYPE.js';

export class Shop {
  constructor(employees) {
    this.employees = employees;
    this.totalTime = 0;
  }

  order(burgers) {
    // 1. 직원에게 버거 할당하기
    // 1.1. 남는 버거에 직원이 있는가?
    // 1.2 가장 빨리 끝나는 직원은 누구인가?
    // 1.3 빨리 끝나는 직원에게 할당
    // 2. 모두 남는다면 앞에 있는 사람에게 할등
    let finishedBurger = 0;
    
    while(finishedBurger !== burgers.length) {
      for(let i = 0; i < burgers.length; i++) {
        for (let j = 0; j < this.employees.length; j++) {
          let employee = this.employees[j];
          if(!employee.isWorking && employee.canMakingBurgerTypes(burgers[i]) && !burgers[i].getIsMade()) {
            employee.makeBurger(burgers[i], this.getTotalTime())
              .then(burgers[i].setIsMade(true))
              .then(() => {
                this.setTotalTime(burgers[i].getMakingTime() + this.getTotalTime());
              })
              .catch((e) => console.error(e));
            finishedBurger += 1;
          }
        }
      }
    }
    return;
  }

  getTotalTime() {
    return this.totalTime;
  }

  setTotalTime(totalTime) {
    this.totalTime = totalTime;
  }
}