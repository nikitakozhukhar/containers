import ErrorRepository from "../class/ErrorRepository";

let errRepo = new ErrorRepository();

test('Читает и выдает ошибку по входящему коду из коллекции Map', () => {
	const check = 'Данный персонаж уже добавлен в команду'

	expect(() => {
		errRepo.translate('1')
	}).toThrow(check)
})

test('Выбрасывает ошибку из-за отсутствия кода в коллекции Map', () => {
	const check = 'Неизвестная ошибка'
	expect(() => {
		errRepo.translate('3') 
	}).toThrow(check)
})