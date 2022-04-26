class Shop {
  constructor(employees) {
    this.employees = employees;
  }

  alarmRunningTimeFor(employee) {
    console.log(`${employee.getRunningTime()} : ${employee.name}가 햄버거를 완성하였습니다.`);
  }

  order(burgerNum) {
    const orderStartTime = new Date().getTime();
    this.employees.forEach((employee) => {
      const flowInterval = setInterval(() => {
        if (burgerNum > 0) {
          employee.makeBurger(orderStartTime);
          burgerNum -= 1;
          this.alarmRunningTimeFor(employee);
        } else if (burgerNum === 0) {
          clearInterval(flowInterval);
        }
      }, 2000);
    });
  }
}

module.exports = Shop;
