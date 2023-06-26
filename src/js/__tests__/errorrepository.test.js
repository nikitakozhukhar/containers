import ErrorRepository from "../class/ErrorRepository";

let errRepo = new ErrorRepository();

test('Читает и выдает ошибку по входящему коду из коллекции Map', () => {
	const error = errRepo.translate('1');

	const check = 'Данный персонаж уже добавлен в команду'

	expect(() => {
		errRepo.translate('1')
	}).toThrow(check)
	
	// expect(check).toThrow(error) // 1й вариант проверки

	// expect('Данный персонаж уже добавлен в команду').toThrow(error) //2й варинт проверки
})

test('Выбрасывает ошибку из-за отсутствия кода в коллекции Map', () => {
	const error = errRepo.translate('3');

	expect(() => {
		'Неизвестная ошибка'
	}).toThrow(error)  // 3й вариант проверки
	// expect('Неизвестная ошибка').toThrow(error)
})