"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
class AbstractMiddleware {
    next(mid) {
        this.nextMiddleware = mid;
        return mid;
    }
    handle(request) {
        if (this.nextMiddleware) {
            return this.nextMiddleware.handle(request);
        }
        return;
    }
}
class AuthMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log('AuthMiddleware');
        if (request.userId === 1) {
            return super.handle(request);
        }
        return { error: 'Вы не авторизованы' };
    }
}
class ValidateMiddleware extends AbstractMiddleware {
    handle(request) {
        console.log('ValidateMiddleWare');
        if (request.body) {
            return super.handle(request);
        }
        return { error: 'There is not body' };
    }
}
class Controller extends AbstractMiddleware {
    handle(request) {
        console.log('Controller');
        return { Success: request };
    }
}
const controller = new Controller();
const validate = new ValidateMiddleware();
const auth = new AuthMiddleware();
auth.next(validate).next(controller);
console.log(auth.handle({
    userId: 1,
    body: 'I am Ok!'
}));
