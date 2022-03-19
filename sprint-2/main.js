const Commander = require("./domain/commander");
const Log = require("./util/log");

function main() {
  console.log([1, 2, 3].customReduce((acc, cur) => acc + cur));
}

main();
