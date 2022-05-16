const EventEmitter = require("events");

class Game {
  constructor(eventEmitter, participants) {
    this.eventEmitter = eventEmitter;
    this.currentNum = 0;
    this.isContinue = true;
    this.participants = participants;
    this.currentTurnParticipant = "";
    this.currentParticipantIndex = 0;
    this.receiveAnswer();
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

  receiveAnswer() {
    this.on("receiveToA", this.sayAnswerA);
    this.on("receiveToB", this.sayAnswerB);
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
