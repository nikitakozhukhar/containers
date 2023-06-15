import Bowman from "./Bowman";
import Swordsman from "./Swordsman";

export default class Team {
	constructor() {
        this.members = new Set();
    }
	
	add(character) {
		if (this.members.has(character)) {
			throw new Error('Данный персонаж уже добавлен в команду')
		}
		this.members.add(character)
	}

	addAll(...characters) {
		for (let char of characters) {
			this.members.add(char)
		}
	}

	toArray() {
		const arrMembers = this.members.entries()
		return arrMembers
	}
	
}

const team = new Team();

let swordman = new Swordsman('Arktur');
let bowman = new Bowman('Sanek')

//добавление 
team.add(swordman);
console.log(team.members)

// team.addAll(swordman, bowman);
// console.log(team.members)

// team.toArray();
// console.log(team.toArray())

//////////////////////////////////////////////////
// let members = new Set();

// console.log(members);

// let swordman = new Swordsman('Artur');
// let bowman = new Bowman('Sanek')

// members.add(swordman);
// members.add(bowman)
// console.log(members);
