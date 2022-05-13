const Person = require("./domain/person.js");

function main() {
  const maenji = new Person("맨지");
  const fry = new Person("구라니");

  maenji.startWith(fry);
}

main();
