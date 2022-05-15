import { Person } from './domain/person.js';

const personA = new Person("loopy");
const personB = new Person("mimmi");
const personC = new Person("singco");

personA.makeFriend(personB);
personB.makeFriend(personC);
personC.makeFriend(personA);

personA.startGame();