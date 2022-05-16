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

  start() {
    while (this.isContinue) {
      this.increaseCurrentNum();
      this.currentParticipantIndex = this.currentPartipants;
      this.setCurrentTurnParticipant();
      this.announceTurn();
    }

    const winners = this.participants.filter((participant, index) => index !== this.currentParticipantIndex);
  }

  get currentPartipants() {
    return (this.currentNum - 1) % this.participants.length;
  }

  increaseCurrentNum() {
    this.currentNum++;
  }

  sayAnswer = (actionNumber) => {
    const currentParticipantName = this.participants[this.currentParticipantIndex].name;
    console.log(`${currentParticipantName}: ${actionNumber}`);
    this.isContinue = !this.isFail(actionNumber);
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
