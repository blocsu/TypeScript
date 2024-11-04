"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
class UserHistory {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this.createdAt = new Date;
    }
    clone() {
        let target = new UserHistory(this.email, this.name);
        target.createdAt = this.createdAt;
        return target;
    }
}
const user = new UserHistory('a@a.ru', 'Anton');
const user2 = user;
const cloneUser = user.clone();
console.log(`user:`, user);
user2.email = 'user2@v.ru';
user2.name = 'User2';
//Изменение user2 изменило также user, а cloneUser отдельная копия которая не влияет на исодый экзеппляр
console.log(`user:`, user);
console.log(`user2:`, user2);
console.log(`cloneUser:`, cloneUser);
cloneUser.email = 'cloneUser@v.ru';
cloneUser.name = 'CloneUser';
console.log(`user:`, user);
console.log(`cloneUser:`, cloneUser);
