"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
class UserService {
    getUsersInDatabase() {
        return this._users;
    }
    setUsersInDatabase(num, _) {
        this._users = num;
    }
}
__decorate([
    __param(0, Positsve()),
    __param(1, Positsve())
], UserService.prototype, "setUsersInDatabase", null);
function Positsve() {
    return (target, propertyKey, parameterIndex) => {
        console.log(target);
        console.log(propertyKey);
        console.log(parameterIndex);
    };
}
const userService = new UserService();
userService.setUsersInDatabase(5);
console.log(userService.getUsersInDatabase());
