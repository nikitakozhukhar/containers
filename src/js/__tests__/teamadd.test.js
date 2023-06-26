import Team from '../class/Team'

import Swordsman from '../class/Swordsman'

import Bowman from '../class/Bowman'

const team = new Team();
let swordman = new Swordsman('Arktur');
let bowman = new Bowman('Arktur');

test('Персонаж существующий в команде не добавляется', () => {
	team.add(swordman)
	const error = 'Данный персонаж уже добавлен в команду';

	expect(() => {
		team.add(swordman)
	}).toThrow(error)
	
})