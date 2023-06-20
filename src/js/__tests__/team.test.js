import Team from '../class/Team'

import Swordsman from '../class/Swordsman'

import Bowman from '../class/Bowman'


const team = new Team();
let swordman = new Swordsman('Arktur');
let bowman = new Bowman('Arktur');

test('Персонаж добавляется в команду', () => {

	team.add(swordman);

	const entries = team.members.entries();

	const set = new Set(
		[
			{
				attack: 40, defence: 10, health: 100, level: 1, name: 'Arktur', type: 'Swordsman',
			}
		]
	)

	const setEntries = set.entries();

	expect(entries).toEqual(setEntries)

})
/*
test('Персонаж существующий в команде не добавляется', () => {
	team.add(swordman);

	function result() {
		throw new Error('Данный персонаж уже добавлен в команду')
	};

	expect(result).toThrow(new Error('Данный персонаж уже добавлен в команду'))
	
})
*/

// test('Персонаж существующий в команде не добавляется', () => {
// 	team.add(swordman);
// 	expect(() => {
// 		throw new Error('Данный персонаж уже добавлен в команду');
// 	}).toThrow(new Error('Данный персонаж уже добавлен в команду'));
//   });

test('В команду добавляется несколько персонажей', () => {
	team.addAll(swordman, bowman);

	const entries = team.members.entries();

	const set = new Set(
		[
			{
				attack: 40, defence: 10, health: 100, level: 1, name: 'Arktur', type: 'Swordsman',
			},
			{
				attack: 25, defence: 25, health: 100, level: 1, name: 'Arktur', type: 'Bowman',
			}
		]
	)

	const setEntries = set.entries()
	expect(entries).toEqual(setEntries)
})

test('Set преобразуется в массив', () => {
	const teamArray = team.toArray();
	const set = new Set(
		[
			{
				attack: 40, defence: 10, health: 100, level: 1, name: 'Arktur', type: 'Swordsman',
			},
			{
				attack: 25, defence: 25, health: 100, level: 1, name: 'Arktur', type: 'Bowman',
			}
		]
	)

	const setEntries = set.entries()
	
	expect(teamArray).toEqual(setEntries)

})