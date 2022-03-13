const Commander = require("./domain/commander");
const Log = require("./util/log");
const Array = require("./domain/array");

function main() {
  const inputData = ["count 1 2 3 4 5", "add 35 53"];
  const testData = [1, 2, 3, 4, 5];

  for (let i = 0; i < inputData.length; i++) {
    const commander = new Commander(inputData[i]);
    commander.parseCommand();
    const [callbackFunction, testArray] =
      commander.giveCallBackFuncAndOperateElementsByOption();
    const resultLog = new Log(testArray.customReduce(callbackFunction, 0));
    resultLog.print();
  }
}
main();
