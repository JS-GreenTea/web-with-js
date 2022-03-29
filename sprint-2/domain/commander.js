class Commander {
  constructor(command) {
    this.command = command;
  }

  parseCommand() {
    const [option, ...operateElements] = this.command.split(" ");
    this.option = option;
    this.operateElements = operateElements;
  }

  giveCallBackFuncAndOperateElementsByOption() {
    if (this.option === "add") {
      return [this.add, this.convertStringElementToNumber()];
    }
    if (this.option === "count") {
      return [this.count, this.operateElements];
    }
  }

  convertStringElementToNumber() {
    return this.operateElements.map((e) => Number(e));
  }

  getOption() {
    return this.option;
  }

  count(acc, cur) {
    if (cur !== undefined) return acc + 1;
  }

  add(acc, cur) {
    return acc + cur;
  }
}
module.exports = Commander;
