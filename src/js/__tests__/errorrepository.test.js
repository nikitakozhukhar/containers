import ErrorRepository from "../class/ErrorRepository";

let er = new ErrorRepository();

test('Выбрасывает ошибку из коллекции Map', () => {
	const error = er.translate('1');

	expect('Данный персонаж уже добавлен в команду').toThrow(error)
})

test('Выбрасывает ошибку из коллекции Map', () => {
	const error = er.translate('3');

	expect('Неизвестная ошибка').toThrow(error)
})