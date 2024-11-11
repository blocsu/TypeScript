"use strict";
//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }
class Madiated {
    setMediator(mediator) {
        this.mediator = mediator;
    }
}
class Notifications {
    send() {
        console.log('Отправляю уведомление');
    }
}
class Log {
    log(message) {
        console.log(message);
    }
}
class EventHandler extends Madiated {
    myEvent() {
        this.mediator.notify('EventHandler', 'myEvent');
    }
}
class NotificationMediator {
    constructor(notification, logger, handler) {
        this.notification = notification;
        this.logger = logger;
        this.handler = handler;
    }
    notify(_, event) {
        switch (event) {
            case 'myEvent':
                this.notification.send();
                this.logger.log('Отправлено');
                break;
        }
    }
}
const handler = new EventHandler();
const logger = new Log();
const notification = new Notifications();
const m = new NotificationMediator(notification, logger, handler);
handler.setMediator(m);
handler.myEvent();
