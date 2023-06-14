import Bowman from "./Bowman";

export default class Team {
	constructor() {
        this.members = new Set();
    }
	add(character) {
		if (this.members.has(character)) {
			throw new Error('Данный персонаж уже добавлен в команду')
		}
		this.members.set(character)
	}
	
}