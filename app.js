"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
class List {
    constructor(items) {
        this.items = items;
    }
}
class Accordion {
}
class ExtendedListClass extends List {
    first() {
        return this.items[0];
    }
}
const list = new ExtendedListClass(['first', 'second']);
console.log(list.first());
//Mixin function
function ExtendedList(Base) {
    return class ExtendedList extends Base {
        second() {
            this.isOpened = true;
            return this.items[1];
        }
    };
}
class AccordionList {
    constructor(items) {
        this.items = items;
    }
}
const extendedList = ExtendedList(AccordionList);
const res = new extendedList(['first', 'second']);
console.log(res.second());
