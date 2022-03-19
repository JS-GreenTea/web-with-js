const Commander = require("./domain/commander");
const Log = require("./util/log");

function main() {
  const commander = new Commander();
  const log = new Log();
  const testCase = ["count 1 2 3 4 5", "add 35 23"];

  testCase.forEach((tc) => {
    const [option, result] = commander.run(tc);
    log.result(option, result);
  });
}

main();
