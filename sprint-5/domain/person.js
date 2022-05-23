import EventEmitter from "events";

export class Person extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.nextPerson;
        this.isPass = true;
    }

    play(number) {
        let nextNumber = number + 1;

        this.speak(nextNumber);

        if (this.isPass) {
            return this.nextPerson.emit("speak", nextNumber);
        }

        return this.nextPerson.sayIsWinner(this);
    }

    speak(nextNumber) {
        if (this.isClap(nextNumber)) {
            console.log(`${this.name}: 짝`);
        } else {
            console.log(`${this.name}: ${nextNumber}`);
        }
    }

    makeFriend(person) {
        this.nextPerson = person;
        this.addNextPersonSpeak();
    }

    addNextPersonSpeak() {
        this.on("speak", (number) => this.play(number));
    }

    startGame() {
        this.play(0);
    }

    isClap(number) {
        let numberString = new String(number);

        for (const oneNumber of numberString) {
            if(oneNumber == "3" || oneNumber == "6" || oneNumber == "9") {
                return this.isPassProbability();
            } 
        }
        return false;
    }

    isPassProbability() {
        if (Math.random() > 0.5) {
            this.isPass = false;
            return false;
        } else {
            return true;
        }
    }

    sayIsWinner(loser) {
        if(this == loser) return;

        this.nextPerson.sayIsWinner(loser)
        console.log(`${this.name} is winner`)
    }
}