"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
class Payment {
    constructor(id) {
        this.status = 'new';
        this.id = id;
    }
    pay() {
        this.status = 'paid';
    }
}
class PersistentPayment extends Payment {
    constructor() {
        const id = Math.random();
        super(id);
    }
    save() {
        //Saved to base...
    }
    pay(date) {
        super.pay();
        if (date) {
            this.paidAt = date;
        }
    }
}
new PersistentPayment();
class User {
    constructor() {
        this.name = 'user';
        console.log(this.name);
    }
}
class Admun extends User {
    constructor() {
        super();
        this.name = 'admin';
        console.log(this.name);
    }
}
new Admun();
