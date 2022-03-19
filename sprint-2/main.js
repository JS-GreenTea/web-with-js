const Commander = require("./domain/commander");
const Log = require("./util/log");
const { add, count } = require("./domain/operations");

function main() {
  console.log(add([1, 2, 3]));
  console.log(count([1, 2, 3]));
}

main();
