/*
Необходимо сделать тип для результата варидации формы, 
основываясь на типе формы
*/

interface IForm {
	name: string;
	password: string;
}

const form: IForm = {
	name: 'Vasia',
	password: '123'
}

// const formValidation = {
// 	name: {isValid: true},
// 	password: {isValid: false, errorMessage: 'Должен быть длиннее 5 симвлолв'}
// }

const formValidation: Validation<IForm> = {
	name: {isValid: true},
	password: {isValid: false, errorMessage: 'Должен быть длиннее 5 симвлолв'}
}

type Validation<T> = {
	[K in keyof T]: {
		isValid: true;
	} | {
		isValid: false;
		errorMessage: string;
	}
}