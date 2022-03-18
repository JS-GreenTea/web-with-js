const Commander = require("./domain/commander");
const Log = require("./util/log");

function main() {
  const inputValue = 'count 1 2 3 4 5'

  const commander = new Commander(inputValue);
  commander.init();
  const log = new Log(commander.getResult());

  log.print();
}
main();
