import EventEmitter from "events";

export class Person extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
        this.nextPerson;
        this.isPass = true;
    }

    speak(number) {
        let nextNumber = number + 1;
        if (this.isClap(nextNumber)) {
            console.log(`${this.name}: 짝`);
        } else {
            console.log(`${this.name}: ${nextNumber}`);
        }

        if (this.isPass) {
            this.nextPerson.emit("speak", nextNumber);
        } else {
            this.nextPerson.sayIsWinner(this);
        }
    }

    makeFriend(person) {
        this.nextPerson = person;
        this.addNextPersonSpeak();
    }

    addNextPersonSpeak() {
        this.on("speak", (number) => this.speak(number));
    }

    startGame() {
        this.speak(0);
    }

    isClap(number) {
        let numberString = new String(number);

        for (const oneNumber of numberString) {
            if(oneNumber == "3" || oneNumber == "6" || oneNumber == "9") {
                // 실패시
                if (Math.random() > 0.5) {
                    this.isPass = false;
                    return false;
                } else {
                    return true;
                }
            } 
        }
        return false;
    }

    sayIsWinner(loser) {
        if(this == loser) return;

        this.nextPerson.sayIsWinner(loser)
        console.log(`${this.name} is winner`)
    }
}