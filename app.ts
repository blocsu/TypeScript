//=================03_010 Использование типов==========================
// function getFullName(firstname: string, secondname: string): string {
// 	return `${firstname} ${secondname}`
// }

// console.log(getFullName('true', 'false'))

//=================03_014 Массивы ==========================
// const skills: string[] = ['Dev', 'DevOps', 'Testing'];

// for(const skill of skills) {
// 	console.log(skill.toLowerCase());
// }

// const res = skills
// 		.filter((s: string) => s !== 'DevOps')
// 		.map(s => s + '! ')
// 		.reduce((a, b) => a + b);

// console.log(res);

//=================03_015 Tuples ==========================
// const skill: [number, string] = [1, 'Dev'];
// const id = skill[0];
// const skillName = [1]

// skill.push('hgfhgf');
// skill.push(2);
// skill.pop();

// const [id, skillName] = skill;
// const arr: [number, string, ...boolean[]] = [4, 'dfs', true, false]

// console.log(arr);

// //============== 03_016 Readonly========================
// const skill: readonly [number, string] = [1, 'Dev'];
// // const skills: readonly string[] = ['Dev', 'Devs'];
// const skills: ReadonlyArray<string> = ['Dev', 'Devs'];

// // skills[0] = 'jj';

// //============== 03_017 enum ========================
// enum StatusCode {
// 	SUCCESS = 1,
// 	IN_PROCESS = 'p',
// 	FAILED = 'f'
// }

// const res = {
// 	message: 'Платёж успешен',
// 	statusCode: StatusCode.SUCCESS
// };

// if(res.statusCode === StatusCode.SUCCESS) {

// }

// function action(status: StatusCode) {
// 	console.log(status);
// }

// action(StatusCode.SUCCESS);
// action(1);
// action(StatusCode.IN_PROCESS)

// function compute() {
// 	return 3;
// }

// enum Role {
// 	ADMIN = 1,
// 	USER = compute()
// }

// console.log(Role)

// const enum Roles {
// 	ADMIN = 1,
// 	USER = 2
// }
// const res2 = Roles.USER
// console.log(res2)

// //============== 03_018 Упражнение - Типизируем функцию ========================
// enum QuestionStatus {
// 		Published = "published",
//     Draft = "draft",
// 		deleted = "deleted"}

// async function getFaqs(req: {
// 	topicId: number,
// 	status: QuestionStatus
// }): Promise<{
// 	question: string;
// 	answer: string;
// 	tags: string[];
// 	likes: number;
// 	status: string;
// }> {
// 	const res = await fetch('/faqs', {
// 		method: 'POST',
// 		body: JSON.stringify(req)
// 	});
// 	const data = await res.json();
// 	return data;
// }

// //============== 04_020 Union ========================
// function logId(id: string | number| boolean) {	
// 	if (typeof id === 'string') {
// 		console.log(id);
// 	} else if (typeof id === 'number') {
// 		console.log(id);
// 	} else {
// 		console.log(id);
// 	}
// }

// function logArr(arr: string | string[]) {	
// 	if (Array.isArray(arr)) {
// 		console.log(arr);
// 	} else {
// 		console.log(arr);
// 	}
// }

// function logObj(obj: {a: number} | {b: number}) {	
// 	if ('a' in obj) {
// 		console.log(obj.a);
// 	} else {
// 		console.log(obj.b);
// 	}
// }

// function logMultipleIds(a: string | number, b: string | boolean) {	
// 	if (a === b) {
// 		console.log(a); //a === string
// 	} else {
// 		console.log(a)
// 	}
// }

// let a: 1 = 1;// в литерал а можно записать только 1

// //============== 04_021 Literal Types ========================
// // enum RequestTypes {
// // 	GET = 'get',
// // 	POST = 'post'
// // }

// // function fetchWithAuth(url: string, method: RequestTypes) {}

// function fetchWithAuth(url: string, method: 'get' | 'post'): 1 | -1 {
// 	return 1
// }

// fetchWithAuth('s', 'post');

// // const method = 'post';
// // fetchWithAuth('s', method);

// let method = 'post';
// fetchWithAuth('s', method as 'post');


// //============== 04_022 Type Aliases ========================
// type httpMethod = 'get' | 'post';
// type coolString = string;//ещё один алиас типа sring

// function fetchWithAuth(url: string, method: httpMethod): 1 | -1 {
// 	return 1
// }

// type User = {
// 	name: string,
// 	age: number,
// 	skills: string[]
// }

// type Role = {
// 	name: string,
// 	id: number
// }

// // type UserWithRole = User & Role;
// type UserWithRole = {
// 	user: User,
// 	role: Role
// }


// let user: UserWithRole = {
// 	name: 'asd',
// 	age: 33,
// 	skills: ['1', '2'],
// 	id: 1
// }


// //============== 04_023 Interfaces ========================
// interface User {
// 	name: string,
// 	age: number,
// 	skills: string[],

// 	log: (id: number) => string;
// }

// interface Role {
// 	name: string,
// 	roleId: number
// }

// interface UserWithRole extends User, Role {
// 	createdAt: Date
// }

// type User2 = {
// 	name: string,
// 	age: number,
// 	skills: string[],

// 	log: (id: number) => string;
// }


// let user: UserWithRole = {
// 	name: 'asd',
// 	age: 33,
// 	skills: ['1', '2'],
// 	roleId: 1,
// 	createdAt: new Date(),

// 	log(id) {
// 		return '';
// 	}
// };

// interface UserDic {
// 	[index: number]: User
// }

// type UserDic2 = {
// 	[index: number]: User
// }


// //============== 04_024 Types или Interfaces_ ========================
// interface User {
// 	name: string	
// }

// interface User {
// 	age: number	
// }

// type ID = string | number;

// interface IDI {
// 	ID: string | number;
// }


// //============== 04_025 Optional ========================
// interface User {
// 	login: string,
// 	password?: string
// }

// const user: User = {
// 	login: 'a@ab.ru',
// 	password: '1'
// }

// function multiply(first: number, second?: number): number {
// 	if (!second) {
// 		return first * first;
// 	}
// 	return first * second;
// }

// multiply(5)

// interface UserPro {
// 	login: string,
// 	password?: {
// 		type: 'ptimary' | 'secondary'
// 	};
// }

// function testPass(user: UserPro) {
// 	const t = user.password?.type;
// }

// function test(param?: string) {
// 	const t = param ?? multiply(5);
// 	console.log(t);
// }	
//  test();
//  test('fdf');


// //============== 04_027 Void ========================
// function logId(id: number | string): void {
// 	console.log(id);	
// }

// const a = logId(1);

// function multiply(f: number, s?: number) {
// 	if (!s) {
// 		return f *f;
// 	}
// 	// return f * s;
// }

// type voidFunk = () => void;

// const f1: voidFunk = () => {}

// const f2: voidFunk = () => {
// 	return true
// }

// const b = f2();

// const skills = ['Dev', 'DevOps'];

// const user = {
// 	s: ['s']
// }

// skills.forEach((skill) => user.s.push(skill));


// //============== 04_028 Unknown ========================
// let input: unknown;

// input = 3;
// input = ['jkj', 'sad']

// function run(i: unknown) {
// 	if (typeof i == 'number') {
// 		i++;
// 	} else {
// 		return i;
// 	}
// }

// run(input);

// async function getData() {
// 	try {
// 		await fetch('');
// 	} catch (error) {
// 		if (error instanceof Error) { //рекомендованная явная проверка типа
// 			console.log(error.message);			
// 		}
// 	}
// }

// async function getDataForce() {
// 	try {
// 		await fetch('');
// 	} catch (error) {
// 		const e = error as Error;
// 		console.log(e.message);		
// 	}
// }

// type U1 = unknown | number;
// type I1 = unknown & string;


// //============== 04_029 Never ========================
// function genereateError(message: string): never {
// 	throw new Error(message);
// }

// function dumpError(): never {
// 	while(true) {}
// }

// function rec(): never {
// 	rec();
// }

// type paymentAction = 'refund' | 'checkout' | 'reject';

// function processAction(action: paymentAction) {
// 	switch(action) {
// 		case 'refund':
// 			//....
// 			break;
// 		case 'checkout':
// 			//....
// 			break;
// 		case 'reject':
// 			//....
// 			break;
// 		default:
// 			const _: never = action;
// 			throw new Error('Нет такого action');
// 	}
// }

// function isString(x: string | number): boolean {
// 	if (typeof x === 'string') {
// 		return true
// 	} else if (typeof x === 'number') {
// 		return false
// 	}
// 	genereateError('dsfasd')
// }


// //============== 04_030 Null ========================
// const n: null = null;
// const n2: any = null;
// const n3: string = null;
// const n4: number = null;
// const n5: boolean = null;
// const n6: undefined = null;

// interface User {
// 	name: string;
// }

//  function getUser() {
// 	if (Math.random() > 0.5) {
// 		return null;
// 	} else {
// 		return {
// 			name: 'Вася'
// 		} as User
// 	}
//  }

//  const user = getUser();
//  if (user) {
// 	const n7 = user.name;
//  }


// //============== 04_031 Приведение типов ========================
// let a = 5;
// let b: string = a.toString();
// let e: string = new String(a).valueOf();
// let f: boolean = new Boolean(a).valueOf();

// let c = 'sgf';
// let d: number = parseInt(c);

// interface User {
// 	name: string;
// 	email: string;
// 	login: string;
// }

// const user: User = {
// 	name: 'Вася',
// 	email: 'vasia@yandex.ru',
// 	login: 'vasai'
// }

// interface Admin {
// 	name: string;
// 	role: number;
// }

// const admin: Admin = {//нежелательный вариант
// 	...user,
// 	role: 1
// }
// console.log(admin);

// function userToAdmin (user: User): Admin { //предпочтительный вариант
// 	return {
// 		name: user.name,
// 		role: 1
// 	}
// }


// //============== 04_032 type Guard ========================
// interface User {
// 	name: string;
// 	email: string;
// 	login: string;
// }

// const user: User = {
// 	name: 'Вася',
// 	email: 'vasia@yandex.ru',
// 	login: 'vasai'
// }

// interface Admin {
// 	name: string;
// 	role: number;
// }

// function logId(id: string | number) {
// 	if (isString(id)) {
// 		console.log(id);		
// 	} else {
// 		console.log(id);
// 	}
// }

// function isString(x: string | number): x is string {
// 	return typeof x === 'string';
// }

// function isAdmin(user: User | Admin): user is Admin {
// 	return 'role' in user;
// }

// function isAdminAlternative(user: User | Admin): user is Admin {
// 	return (user as Admin).role !== undefined;
// }

// function setRoleZero(user: User | Admin) {
// 	if (isAdmin(user)) {
// 		user.role = 0;
// 	} else {
// 		throw new Error('Пользователь не админ')
// 	}
// }


// //============== 05_035 Создание класса ========================
// class User {
// 	name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }

// const user = new User('Вася');
// console.log(user);
// user.name = 'Петя';
// console.log(user);


// class Admin {
// 	role: number;
// }

// const admin = new Admin();
// admin.role = 1;


// //============== 05_036 Constructor ========================
// class User {
// 	name: string;
// 	age: number;

// 	constructor();
// 	constructor(name: string);
// 	constructor(age: number);
// 	constructor(name: string, age: number);
// 	constructor(ageOrName?: string | number, age?: number) {
// 		if (typeof ageOrName === 'string') {
// 			this.name = ageOrName;
// 		} else if (typeof ageOrName === 'number') {
// 			this.age = ageOrName;
// 		}
// 		if (typeof age === 'number') {
// 			this.age = age;
// 		}
// 	}
// }

// const user = new User('Вася');
// const user2 = new User();
// const user3 = new User(33);
// const user4 = new User('Vasia', 33);


// //============== 05_037 Methods ========================
// enum PaymentStatus {
// 	Holded,
// 	Processed,
// 	Reversed
// }

// class Payment {
// 	id: number;
// 	status: PaymentStatus = PaymentStatus.Holded;
// 	createdAt: Date = new Date();
// 	updatedAt: Date;

// 	constructor(id: number) {
// 		this.id = id;
// 	}

// 	getPaymentLifeTime(): number {
// 		return new Date().getTime() - this.createdAt.getTime();
// 	}

// 	unholdPayment(): void {
// 		if (this.status == PaymentStatus.Processed) {
// 			throw new Error('Платёж не может быть возвращен!')
// 		}
// 		this.status = PaymentStatus.Reversed;
// 		this.updatedAt = new Date();
// 	}
// }

// const payment = new Payment(1);
// payment.unholdPayment();
// console.log(payment);
// const time = payment.getPaymentLifeTime();
// console.log(time);


// //============== 05_038_Exercise OverLoading of Methods ========================
// class User {
// 	skills: string[];

// 	addSkills(skill: string): void;
// 	addSkills(skills: string[]): void;
// 	addSkills(skillOrSkills: string | string[]): void {
// 		if (typeof skillOrSkills === 'string') {
// 			this.skills.push(skillOrSkills)
// 		} else {
// 			this.skills.concat(skillOrSkills)
// 		}
// 	}
// }

// // new User().addSkills('sdfd')


// function run(distance: number): number;
// function run(distance: string): string;
// function run(distance: number | string): number | string {
// 	if (typeof distance == 'number') {
// 		return 1;
// 	} else {
// 		return '';
// 	}
// }

// run('fdg')


// //============== 05_039_Getter and Setter ========================
// class User {
// 	_login: string;
// 	password: string;
// 	createdAt: Date;

// 	// getLogin(l: string) {
// 	// 	this.login = 'user-' + l;
// 	// }

// 	//Only sync
// 	set login(l: string | number) {//Если не указан тип, то берётся тип который возвращает get
// 		this._login = 'user-' + l;
// 		this.createdAt = new Date();
// 	}

// 	//Only sync
// 	get login() {
// 		return this._login;
// 	}

// 	async getPassword(p: string) {}
// }

// const user = new User()
// user.login = 'myLogin';
// console.log(user);
// console.log(user.login);


// //============== 05_040_Implements ========================
// interface ILogger {
// 	log(...args): void;
// 	error(...args): void;
// }

// class Logger implements ILogger {
// 	log(...args: any[]): void {
// 		console.log(...args);		
// 	}
// 	async error(...args: any[]): Promise<void> {
// 		//Кинуть во внешнюю систему
// 		console.log(...args);		
// 	}
// }

// interface IPayable {
// 	pay(paymentId: number): void;
// 	price?: number;
// }

// interface IDeleteble {
// 	delete(): void;
// }

// class User implements IPayable, IDeleteble {
// 	delete(): void {
// 		throw new Error('Method not implemented.');
// 	}
// 	pay(paymentId: number): void {
// 		// throw new Error('Method not implemented.');
// 	}
// 	// price?: number | undefined;
// }


// //============== 05_041_042_Extends ========================
// type PaymentStatus_1 = 'new' | 'paid';

// class Payment {
// 	id: number;
// 	status: PaymentStatus_1 = 'new';

// 	constructor(id: number) {
// 		this.id = id;
// 	}

// 	pay() {
// 		this.status = 'paid';
// 	}
// }

// class PersistentPayment extends Payment {
// 	databaseId: number;
// 	paidAt: Date;

// 	constructor() {
// 		const id = Math.random();
// 		super(id);
// 	}

// 	save() {
// 		//Saved to base...
// 	}

// 	override pay(date?: Date) {
// 		super.pay();
// 		if (date) {
// 			this.paidAt = date;
// 		}
// 	}
// }

// new PersistentPayment();

// class User {
// 	name: string = 'user';

// 	constructor() {
// 		console.log(this.name);		
// 	}
// }

// class Admun extends User {
// 	name: string = 'admin';

// 	constructor() {
// 		super();
// 		console.log(this.name);
		
// 	}
// }

// new Admun();

// //new Error();

// class httpError extends Error {
// 	code: number;

// 	constructor(message: string, code?: number) {
// 		super(message);
// 		this.code = code ?? 500;
// 	}
// }


// //============== 05_043_Compositions_against_Extends ========================
// class User {
// 	name: string;

// 	constructor(name: string) {
// 		this.name = name;
// 	}
// }

// //Неправильный вариант т.к. унаследуем много ненужных свойств
// class Users extends Array<User> {
// 	searchByName(name: string) {
// 		return this.filter(u => u.name === name);
// 	}

// 	override toString(): string {
// 		return this.map(u => u.name).join(', ')
// 	}
// }

// const users = new Users();
// users.push(new User('Vasia'));
// users.push(new User('Piter'));
// console.log(users.toString());

// //Правильный вариант, не связываемся жестко с отнаследованным классом без надобности
// class UserList {
// 	users: User[];

// 	push(u: User) {
// 		this.users.push(u);
// 	}
// }

// class Payment {
// 	date: Date;
// }

// //Неправильный вариант, связваемся жестко с классом  из другой доменной области
// class UserWithPayment extends Payment {
// 	name: string;
// }

// //Правильный вариант, не связываемся жестко с отнаследованным классом без надобности
// class UserWithPayment_2 {
// 	user: User;
// 	payment: Payment;

// 	constructor(user: User, payment: Payment) {
// 		this.user = user;
// 		this.payment = payment;
// 	}
// }


// //============== 05_044 Visibility of properties ========================
// class Vehicle {
// 	public make: string;
// 	private damages: string[];
// 	private _model: string;
// 	protected run: number;
// 	#price: number;

// 	set model(m: string) {
// 		this._model = m;
// 		this.#price = 100;
// 	}

// 	get model() {
// 		return this._model;
// 	}

// 	addDamage(damage: string) {
// 		this.damages.push(damage);
// 	}

// 	isPriceEqual(v: Vehicle) {
// 		return this.#price === v.#price;
// 	}
// }

// class EuroTruck extends Vehicle {
// 	setRun(km: number) {
// 		this.run = km / 0.62;
// 		// this.damages - error
// 	}
// }

// new Vehicle()
// new EuroTruck()


// //============== 05_046 Static properties ========================
// class UserService {
// 	// static name: string;
// 	private static db: any;

// 	static async getUser(id: number) {
// 		return this.db.findById(id)
// 	}
	
// 	constructor(id: number) {}

// 	create() {
// 		UserService.db;
// 	}

// 	static {
// 		// await new Promise() не можем использавать внутри статик блоков
// 		UserService.db = 'fgdx';
// 	}


// }

// UserService.getUser(1);
// const inst = new UserService(1);
// inst.create();


// //============== 05_047 Working with this ========================
// class Payment {
// 	private date: Date = new Date();

// 	getDate(this: Payment) {
// 		return this.date;
// 	}

// 	getDateArrow = () => {
// 		return this.date;
// 	}
// }

// const p = new Payment();

// const user = {
// 	id: 1,
// 	paymentDate: p.getDate.bind(p),
// 	paymentDateArrow: p.getDateArrow

// }

// // console.log(p.getDate());
// // console.log(user.paymentDate());
// // console.log(user.paymentDateArrow());

// class PaymentPersistent extends Payment {
// 	save() {
// 		return super.getDate();
// 	}

// 	instansArrow() {
// 		return this.getDateArrow();//Это экземпляр от наследованного класса
// 	}
// }

// console.log(new PaymentPersistent().save());
// console.log(new PaymentPersistent().instansArrow());


// //============== 05_048 Typification of this ========================
// class UserBilder {
// 	name: string;

// 	setName(name: string): this {
// 		this.name = name;
// 		return this;
// 	}

// 	isAdmin(): this is AdminBilder {
// 		return this instanceof AdminBilder;
// 	}
// }

// class AdminBilder extends UserBilder {
// 	roles: string[];
// }

// const res = new UserBilder().setName('Vasia');
// const res2 = new AdminBilder().setName('Piter');

// let user: UserBilder | AdminBilder = new UserBilder();

// if (user.isAdmin()) {
// 	console.log(user);	
// } else {
// 	console.log(user);	
// }


// //============== 05_049 Abstract classes ========================
// abstract class Controller {
// 	abstract handle(req: any): void;

// 	handleWithLogs(req: any) {
// 		console.log('Start');
// 		this.handle(req);
// 		console.log('End');		
// 	}
// }

// class UserController extends Controller {
// 	handle(req: any): void {
// 		console.log(req);
		
// 	}
// }
// // new Controller() - error

// const c = new UserController();
// c.handleWithLogs('Request');
// c.handle('test');


// //============== 07_059 Example of built-in generic ========================
// const num: Array<number> = [1, 2, 3];

// async function test() {
// 	const a = await new Promise<number>((resolve, reject) => {
// 		resolve(1)
// 	})
// }

// const check: Record<string, boolean> = {
// 	drive: true,
// 	kpp: false
// }


// //============== 07_060_062 Writing function with generic ========================
// function logMiddleware<T>(data: T): T {
// 	console.log(data);
// 	return data;	
// }

// const res = logMiddleware<string>('10');
// const res2 = logMiddleware<number>(10);

// function getSplitedHalf<T>(data: Array<T>): Array<T> {
// 	const l = data.length / 2;
// 	return data.splice(0, l);
// }

// const s = getSplitedHalf<number>([1, 2, 3]);
// console.log(s);

// const split: <T>(data: Array<T>) => Array<T> = getSplitedHalf;
// const split2: <Y>(data: Array<Y>) => Array<Y> = getSplitedHalf;

// interface ILogLine<T> {
// 	timeStamp: Date;
// 	data: T;
// }

// const logLine: ILogLine<{a: number}> = {
// 	timeStamp: new Date(),
// 	data: {
// 		a: 1
// 	}
// }


// type logLineType<T> = {
// 	timeStamp: Date;
// 	data: T;
// }

// const logLine2: logLineType<{a: number}> = {
// 	timeStamp: new Date(),
// 	data: {
// 		a: 1
// 	}
// }



//============== 07_063 Limitation of generic ========================
class Vehicle {
	run: number;
}

function kmToMiles<T extends Vehicle>(vehicle: T): T {
	vehicle.run = vehicle.run / 0.62;
	return vehicle;
}

class LCV extends Vehicle {
	capacity: number;
}

const vehicle = kmToMiles(new Vehicle());
const lcv = kmToMiles(new LCV());
const v = kmToMiles({run: 1})
console.log(vehicle);
console.log(v);


interface IVehicle {
	run: number;
}

function kmToMiles2<T extends IVehicle>(vehicle: T): T {
	vehicle.run = vehicle.run / 0.62;
	return vehicle;
}

interface ILCV extends IVehicle {
	capacity: number;
}


function logId <T extends string | number, Y> (id: T, additionalData: Y): {id: T, data: Y} {
	console.log(id);
	console.log(additionalData);
	return {id, data: additionalData};	
}

logId('asas', 12);


//============== 07_065 Generic classes ========================
class Resp<D, E> {
	data?: D;
	error?: E;

	constructor(data?: D, error?: E) {
		if (data) {
			this.data = data;
		}
		if (error) {
			this.error = error;
		}
	}
}

const res = new Resp<string, number>('data');
res.error

// class httpResp extends Resp<string, number> {
// 	code: number;

// 	setCode(code: number) {
// 		this.code = code;
// 	}
// }

class httpResp<F> extends Resp<string, number> {
	code: F;

	setCode(code: F) {
		this.code = code;
	}
}

const res2 = new httpResp();
res2.data