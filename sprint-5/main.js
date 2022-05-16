const Game = require("./domain/game");
const Person = require("./domain/person");
const EventEmitter = require("events");

function main() {
  const eventEmitter = new EventEmitter();

  const personA = new Person("A", eventEmitter);
  const personB = new Person("B", eventEmitter);
  const personC = new Person("C", eventEmitter);

  const participants = [personA, personB, personC];

  const game = new Game(eventEmitter, participants);

  game.start();
}

main();
