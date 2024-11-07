"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
class PaymentAPI {
    constructor() {
        this.date = [{ id: 1, sum: 10000 }, { id: 2, sum: 20000 }];
    }
    getPaymentDetail(id) {
        return this.date.find(d => d.id === id);
    }
}
class PaymentAccessProxy {
    constructor(api, userId) {
        this.api = api;
        this.userId = userId;
    }
    getPaymentDetail(id) {
        if (this.userId === id) {
            return this.api.getPaymentDetail(id);
        }
        console.log('Попытка получить данные платежа!');
        return undefined;
    }
}
const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
console.log(proxy.getPaymentDetail(1));
const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
console.log(proxy2.getPaymentDetail(2));
console.log(proxy2.getPaymentDetail(3));
