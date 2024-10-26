"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
const key = 'age';
function getKey(obj, key) {
    return obj[key];
}
const user = {
    name: 'Vasia',
    age: 30
};
const userName = (getKey(user, 'name'));
console.log(userName);
