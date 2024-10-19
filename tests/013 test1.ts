interface Address {
	city: string
}

interface Contact {
	phone: string,
	email: string,
	address: Address
}

interface Data {
	officeId: number,
	isOpened: boolean,
	contacts: Contact,
}

//OR
let Data: {
	officeId: number,
	isOpened: boolean,
	contacts: {
		phone: string,
		email: string,
		address: {
			city: string
		}
	}
} = {
	"officeId": 45,
	"isOpened": false,
	"contacts": {
		"phone": "+79100000000",
		"email": "my@email.ru",
		"address": {
			"city": "Москва"
		}
	}
}