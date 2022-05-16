const isFail = require('../util/check.js');

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

    this.announceWinners(winners);
  }

  announceWinners(persons) {
    const personsName = persons.map(person => person.name);
    console.log(`${personsName.join(',')} (이)가 승리하였습니다.`);
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
    this.isContinue = !isFail(actionNumber);
  }

  announceTurn() {
    this.eventEmitter.emit(this.currentTurnParticipant.name, this.currentNum);
  }

  receiveAnswer() {
    this.participants.forEach(participant => {
      this.eventEmitter.on("receiveTo" + participant.name, this.sayAnswer);
    })
  }

  setCurrentTurnParticipant() {
    this.currentTurnParticipant = this.participants[this.currentParticipantIndex];
  }
}

module.exports = Game;
