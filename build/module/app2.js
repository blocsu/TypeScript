"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obj = exports.Test = exports.a = exports.A = void 0;
exports.default = run;
var A;
(function (A) {
    A.a = 5;
})(A || (exports.A = A = {}));
exports.a = 5;
class Test {
}
exports.Test = Test;
exports.obj = {};
function run() {
    console.log('run');
}
