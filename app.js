"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const p = {};
//============== 08_080 ReturnType, Parameters, ConstructorParameters ========================
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
function getData(id) {
    return new User(id, 'Vasia');
}
function getMenu() {
    return __awaiter(this, void 0, void 0, function* () {
        return [{ name: 'Аналитика', url: 'Analitics' }];
    });
}
function getArray(x) {
    return __awaiter(this, void 0, void 0, function* () {
        return [yield x];
    });
}
//До появления Awaited вытаскивался не совсем корректный тип
function getArray2(x) {
    return __awaiter(this, void 0, void 0, function* () {
        return [yield x];
    });
}
class UserService {
    constructor() {
        this.users = 1000;
    }
    getUsersInDatabase() {
        return this.users;
    }
}
function nullUsers(obj) {
    obj.users = 0;
    return obj;
}
function logUsers(obj) {
    console.log('Users: ' + obj.users);
    return obj;
}
console.log(new UserService().getUsersInDatabase());
console.log(nullUsers(new UserService()).getUsersInDatabase());
console.log(logUsers(nullUsers(new UserService())).getUsersInDatabase());
console.log(nullUsers(logUsers(new UserService())).getUsersInDatabase());
