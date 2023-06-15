import Team from '../class/Team'

import Swordsman from '../class/Swordsman'

import Bowman from '../class/Bowman'


const team = new Team();
let swordman = new Swordsman('Arktur');
let bowman = new Swordsman('Arktur');

test('Персонаж добавляется в команду', () => {

	team.add(swordman);

	const entries = team.members.entries();

	const set = new Set ([{
		attack: 40, defence: 10, health: 100, level: 1, name: 'Arktur', type: 'Swordsman',
	  }])
	  
	const setEntries = set.entries();

	expect(entries).toEqual(setEntries)

})

test('Персонаж существующий в команде не добавляется', () => {
	team.add(swordman);

	const result = new Error('Данный персонаж уже добавлен в команду');

	expect(result).toEqual(new Error('Данный персонаж уже добавлен в команду'))
	
})

test('В команду добавляется несколько персонажей', () => {

})

test('Set преобразуется в массив', () => {

})