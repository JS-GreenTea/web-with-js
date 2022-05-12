const EventEmitter = require("events");

const Observable = require("./observable");

class Game extends EventEmitter {
  constructor() {
    super();
    this.currentNum = 0;
    this.eventTarget = "";
  }
  start(startPerson) {
    this.increaseCurrentNum();
    this.setEventTarget();
    this.announceTurn();
    this.receiveAnswer();
  }

  increaseCurrentNum() {
    this.currentNum++;
  }

  sayAnswerA(answer) {
    console.log(`A: ${answer}`);
  }

  sayAnswerB(answer) {
    console.log(`B: ${answer}`);
  }

  announceTurn() {
    this.emit(this.eventTarget, this.currentNum);
  }

  // 순서가 바뀔 수 있음을 처리해야 함.
  setEventTarget() {
    if (this.currentNum % 2 === 0) {
      this.eventTarget = "A";
    } else {
      this.eventTarget = "B";
    }
  }
}

module.exports = Game;
