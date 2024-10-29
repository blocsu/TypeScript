"use strict";
/*
Необходимо сделать тип для результата варидации формы,
основываясь на типе формы
*/
const form = {
    name: 'Vasia',
    password: '123'
};
// const formValidation = {
// 	name: {isValid: true},
// 	password: {isValid: false, errorMessage: 'Должен быть длиннее 5 симвлолв'}
// }
const formValidation = {
    name: { isValid: true },
    password: { isValid: false, errorMessage: 'Должен быть длиннее 5 симвлолв' }
};
