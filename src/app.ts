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



// //============== 07_063 Limitation of generic ========================
// class Vehicle {
// 	run: number;
// }

// function kmToMiles<T extends Vehicle>(vehicle: T): T {
// 	vehicle.run = vehicle.run / 0.62;
// 	return vehicle;
// }

// class LCV extends Vehicle {
// 	capacity: number;
// }

// const vehicle = kmToMiles(new Vehicle());
// const lcv = kmToMiles(new LCV());
// const v = kmToMiles({run: 1})
// console.log(vehicle);
// console.log(v);


// interface IVehicle {
// 	run: number;
// }

// function kmToMiles2<T extends IVehicle>(vehicle: T): T {
// 	vehicle.run = vehicle.run / 0.62;
// 	return vehicle;
// }

// interface ILCV extends IVehicle {
// 	capacity: number;
// }


// function logId <T extends string | number, Y> (id: T, additionalData: Y): {id: T, data: Y} {
// 	console.log(id);
// 	console.log(additionalData);
// 	return {id, data: additionalData};	
// }

// logId('asas', 12);


// //============== 07_065 Generic classes ========================
// class Resp<D, E> {
// 	data?: D;
// 	error?: E;

// 	constructor(data?: D, error?: E) {
// 		if (data) {
// 			this.data = data;
// 		}
// 		if (error) {
// 			this.error = error;
// 		}
// 	}
// }

// const res = new Resp<string, number>('data');
// res.error

// // class httpResp extends Resp<string, number> {
// // 	code: number;

// // 	setCode(code: number) {
// // 		this.code = code;
// // 	}
// // }

// class httpResp<F> extends Resp<string, number> {
// 	code: F;

// 	setCode(code: F) {
// 		this.code = code;
// 	}
// }

// const res2 = new httpResp();
// res2.data


// //============== 07_066 Mixins ========================
// type Constructor = new (...args: any[]) => {}
// type GConstructor<T = {}> = new (...args: any[]) => T

// class List {
// 	constructor(public items: string[]) {}
// }

// class Accordion {
// 	isOpened: boolean;
// }

// type ListType = GConstructor<List>;
// type AccordionType = GConstructor<Accordion>

// class ExtendedListClass extends List {
// 	first() {
// 		return this.items[0];
// 	}
// }

// const list = new ExtendedListClass(['first', 'second']);
// console.log(list.first());

// //Mixin function
// function ExtendedList<TBase extends ListType & AccordionType>(Base: TBase) {
// 	return class ExtendedList extends Base {
// 		second() {
// 			this.isOpened = true;
// 			return this.items[1];
// 		}
// 	}
// }

// class AccordionList {
// 	isOpened: boolean;
// 	constructor(public items: string[]) {}
// }

// const extendedList = ExtendedList(AccordionList);
// const res = new extendedList(['first', 'second']);
// console.log(res.second());



// //============== 08_068 Keyof ========================
// interface IUser {
// 	name: string;
// 	age: number;
// }

// type keyOfUser = keyof IUser;

// const key: keyOfUser = 'age';

// function getKey<T, K extends keyof T>(obj: T, key: K) {
// 	return obj[key]
// }

// const user: IUser = {
// 	name: 'Vasia',
// 	age: 30
// }

// const userName = (getKey(user, 'name'));
// console.log(userName);





// //============== 08_070 Typeof ========================
// let strOrNum: string | number = 5;

// if (Math.random() > 5) {
// 	strOrNum = 5;
// } else {
// 	strOrNum = 'str';
// }

// if (typeof strOrNum === 'string') {
// 	console.log(strOrNum);	
// } else {
// 	console.log(strOrNum);	
// }

// let str2OrNum: typeof strOrNum;

// const user = {
// 	name: 'Vasai',
// 	age: 30
// }

// type keyOfUser = keyof typeof user;

// enum Direction {
// 	Up,
// 	Down
// }

// type d = keyof typeof Direction;


// //============== 08_071 Indexed Access Types ========================
// interface Role {
// 	name: string;
// }

// interface Permission {
// 	endDate: Date;
// }

// interface User {
// 	name: string;
// 	roles: Role[];
// 	permission: Permission;
// }

// const user: User = {
// 	name: 'Vasia',
// 	roles: [],
// 	permission: {
// 		endDate: new Date()
// 	}
// }

// const nameUser = user['name'];
// const roleUser = 'roles';
// // let roleUser: 'roles' = 'roles';

// type rolesType = User['roles'];
// type roles2Type = User[typeof roleUser];

// //[number] позволяет получить доступ к обобщенному типу массива
// type roleType = User['roles'][number];
// type dateType = User['permission']['endDate'];

// const roles = ['admin', 'user', 'super-user'] as const;
// type role = typeof roles[number];


// //============== 08_072 Conditional Types ========================
// const a: number = Math.random() > 0.5 ? 1 :0;

// // interface HTTPResponce<T, V> {
// // 	code: number;
// // 	data: T;
// // 	data2: V;
// // }

// //Первый случай использования Conditional Types
// interface HTTPResponce<T extends 'success' | 'failed'> {
// 	code: number;
// 	data: T extends 'success' ? string : Error;
// 	// data2: T extends 'failed' ? string : number;
// }

// const suc: HTTPResponce<'success'> = {
// 	code: 200,
// 	data: 'done'
// }

// const err: HTTPResponce<'failed'> = {
// 	code: 400,
// 	data: new Error
// }

// //второй случай использования Conditional Types замена overload
// class User {
// 	id: number;
// 	name: string;
// }

// class UserPersistent extends User {
// 	dbid: string;
// }

// function getUser(id: number): User;
// function getUser(dbid: string): UserPersistent;
// function getUser(idOrDbid: number | string): User | UserPersistent {
// 	if (typeof idOrDbid === 'number') {
// 		return new User();
// 	} else {
// 		return new UserPersistent();
// 	}
// }

// type UserOrUserPersistent<T extends number | string> = T extends number ? User : UserPersistent;

// function getUser2<T extends number | string>(id: T): UserOrUserPersistent<T> {
// 	if (typeof id === 'number') {
// 		return new User() as UserOrUserPersistent<T>;
// 	} else {
// 		return new UserPersistent() as UserOrUserPersistent<T>;
// 	}
// }

// const res2 = getUser2(1);
// const res3 = getUser2('gdgf');


// //============== 08_073 Infer ========================
// function runTransaction(Transaction: {
// 	fromTo: [string, string]
// }) {
// 	console.log(Transaction);	
// }

// // //Хардкорный вариант решения типизации
// // const transaction = {
// // 	fromTo: ['1', '2'] as [string, string]
// // }

// //Предпочтительный вариант
// type GetFirstArg<T> =T extends (first: infer First, ...args: any[]) => any ? First : never;

// const transaction: GetFirstArg<typeof runTransaction> = {
// 	fromTo: ['1', '2']
// }

// runTransaction(transaction);


// //============== 08_074 Mapped Types ========================
// type Modifier = 'read' | 'update' | 'create';

// type UserRoles = {
// 	customers?: Modifier,
// 	projects?: Modifier,
// 	adminPanel?: Modifier,
// }

// //Mapped Types
// type ModifierToAccess<Type> = {
// 	+readonly [Property in keyof Type as Exclude<`canAccess${string & Property}`, 'canAccessadminPanel' | 'canAccessprojects'>]-?: boolean;
// }

// //При изменении UserRoles тоже изменится
// type UserAccess2 = ModifierToAccess<UserRoles>;

// //При изменении UserRoles не получим уведомление что и этот тип нужно изменить
// type UserAccess1 = {
// 	customers?: boolean,
// 	projects?: boolean,
// 	adminPanel?: boolean,
// }



// //============== 08_076 Template Literal Types ========================
// type ReadOrWrite = 'read' | 'write';
// type Bulk = 'bulk' | '';

// type Access = `can${Capitalize<ReadOrWrite>}${Capitalize<Bulk>}`;

// type ReadOrWriteBulk<T> = T extends `can${infer R}` ? R : never;

// type T = ReadOrWriteBulk<Access>;

// type ErrorOrSuccess = 'error' | 'success';

// type ResponceT = {
// 	result: `http${Capitalize<ErrorOrSuccess>}`;
// }

// const a: ResponceT = {
// 	result: 'httpSuccess'
// }


// //============== 09_078 Partial, Required, Readonly ========================
// interface User {
// 	neme: string;
// 	age?: number;
// 	email: string;
// }

// type partial = Partial<User>;
// const p: partial = {};

// type required = Required<User>;
// type readonly = Readonly<User>;
// type requiredAndReadonly = Required<Readonly<User>>;


// //============== 09_079 Pick, Omit, Extract, Exclude ========================
// interface PaymentPersistent {
// 	id: number;
// 	sum: number;
// 	from: string;
// 	to: string;
// }

// type Payment = Omit<PaymentPersistent, 'id'>;
// type PaymentRequisits = Pick<PaymentPersistent, 'from' | 'to'>;

// type ExtractEx = Extract<'from' | 'to' | Payment, string>;
// type ExcludeEx = Exclude<'from' | 'to' | Payment, string>;


// //============== 08_080 ReturnType, Parameters, ConstructorParameters ========================
// class User {
// 	constructor(public id: number, public name: string) {}
// }

// function getData(id: number): User {
// 	return new User(id, 'Vasia');
// }

// type RT = ReturnType<typeof getData>;//User
// type RT2 = ReturnType<() => void>;//void
// type RT3 = ReturnType<<T>() => T>;//unknown
// type RT4 = ReturnType<<T extends string>() => T>;//string

// type PT = Parameters<typeof getData>[0];//Возвращает кортеж параметров поэтому извлекаем тип по индексу [0]

// type CP = ConstructorParameters<typeof User>;//[id: number, name: string]
// type IT = InstanceType<typeof User>;


// //============== 09_081 Awaited ========================
// type A = Awaited<Promise<string>>;//string
// type A2 = Awaited<Promise<Promise<string>>>;//string

// //Пример использования Awaited
// interface IMenu {
// 	name: string;
// 	url: string
// }

// async function getMenu(): Promise<IMenu[]> {
// 	return [{name: 'Аналитика', url: 'Analitics'}];
// }

// type R = Awaited<ReturnType<typeof getMenu>>;

// async function  getArray<T>(x: T): Promise<Awaited<T>[]> {
// 	return [await x];
// }

// //До появления Awaited вытаскивался не совсем корректный тип
// async function  getArray2<T>(x: T): Promise<T[]> {
// 	return [await x];
// }


// //============== 10_083 Decorator's pattern ========================
// interface IUserService {
// 	users: number;
// 	getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
// 	users: number = 1000;
// 	getUsersInDatabase(): number {
// 		return this.users;
// 	}	
// }

// function nullUsers (obj: IUserService) {
// 	obj.users = 0;
// 	return obj;
// }

// function logUsers(obj: IUserService) {
// 	console.log('Users: ' + obj.users);
// 	return obj;
// }

// console.log(new UserService().getUsersInDatabase());
// console.log(nullUsers(new UserService()).getUsersInDatabase());
// console.log(logUsers(nullUsers(new UserService())).getUsersInDatabase());
// console.log(nullUsers(logUsers(new UserService())).getUsersInDatabase());


// //============== 10_084 Decorator of class ========================
// interface IUserService {
// 	users: number;
// 	getUsersInDatabase(): number;
// }

// @threeUserAdvanced
// @nullUsers
// class UserService implements IUserService {
// 	users: number = 1000;
// 	getUsersInDatabase(): number {
// 		return this.users;
// 	}	
// }

// function nullUsers (target: Function) {
// 	target.prototype.users = 0;
// }

// function threeUserAdvanced<T extends {new(...args: any[]): {} }>(constructor: T) {
// 	return class extends constructor {
// 		users = 3;
// 	}
// }

// console.log(new UserService().getUsersInDatabase());


// //============== 10_085 Fabric of decorators ========================
// interface IUserService {
// 	users: number;
// 	getUsersInDatabase(): number;
// }

// // @setUsersAdvanced(4)
// // @threeUserAdvanced
// @log()
// @setUsers(2)
// // @nullUsers
// class UserService implements IUserService {
// 	users: number = 1000;
// 	getUsersInDatabase(): number {
// 		return this.users;
// 	}	
// }

// function nullUsers (target: Function) {
// 	target.prototype.users = 0;
// }

// function setUsers(users: number) {
// 	console.log('setUsers init');	
// 	return (target: Function) => {
// 		console.log('setUsers run');		
// 		target.prototype.users = users;
// 	}
// }

// function log() {
// 	console.log('log init');
// 	return (target: Function) => {
// 		console.log('log run');
// 		console.log(target);
// 	}
// }

// function setUsersAdvanced(users: number) {
// 	return <T extends {new(...args: any[]): {} }>(constructor: T) => {
// 		return class extends constructor {
// 			users = users;
// 		}
// 	}
// }

// function threeUserAdvanced<T extends {new(...args: any[]): {} }>(constructor: T) {
// 	return class extends constructor {
// 		users = 3;
// 	}
// }

// console.log(new UserService().getUsersInDatabase());


//============== 10_087 Decorators of methods ========================
// interface IUserService {
// 	users: number;
// 	getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
// 	users: number = 1000;

// 	@Log()
// 	getUsersInDatabase(): number {
// 		throw new Error('Ошибка');
// 	}	
// }

// // function Log(
// // 	target: object,
// // 	propertyKey: string | symbol,
// // 	descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
// // ): TypedPropertyDescriptor<(...args: any[]) => any> | void {
// // 	console.log(target);
// // 	console.log(propertyKey);
// // 	console.log(descriptor);
// // 	descriptor.value = () => {
// // 		console.log('no error');
		
// // 	}
// // }

// //Factory
// function Log() {
// 	return (target: object,
// 		propertyKey: string | symbol,
// 		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>
// 	): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
// 		console.log(target);
// 		console.log(propertyKey);
// 		console.log(descriptor);
// 		// const oldValue = descriptor.value;
// 		descriptor.value = () => {
// 			console.log('no error');
// 			// oldValue()
			
// 		}
// 	}
// }

// console.log(new UserService().getUsersInDatabase());


// //============== 10_089 Decorators of properties ========================
// interface IUserService {
// 	users: number;
// 	getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
// 	@Max(100)
// 	users: number;

// 	getUsersInDatabase(): number {
// 		throw new Error('Ошибка');
// 	}	
// }

// function Max(max: number) {
// 	return (
// 		target: Object,
// 		propertyKey: string | symbol		
// 	) => {
// 		let value: number;
// 		const setter = function (newValue: number) {
// 			if (newValue > max) {
// 				console.log(`Нельзя установить значение больше ${max}`);				
// 			} else {
// 				value = newValue;
// 			}
// 		}
// 		const getter = function () {
// 			return value;
// 		}

// 		Object.defineProperty(target, propertyKey, {
// 			set: setter,
// 			get: getter
// 		})
// 	}
// }

// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);
// userService.users = 1000;
// console.log(userService.users);


// //============== 10_090 Decorator accessor ========================
// interface IUserService {
// 	getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
// 	private _users: number;

// 	@Log()
// 	set users(num: number) {
// 		this._users = num;
// 	}
	
// 	get users() {
// 		return this._users
// 	}

// 	getUsersInDatabase(): number {
// 		throw new Error('Ошибка');
// 	}	
// }

// function Log() {
// 	return (
// 		target: Object,
// 		_: string | symbol,
// 		descriptor: PropertyDescriptor		
// 	) => {
// 		const set = descriptor.set;
// 		descriptor.set = (...args: any) => {
// 			console.log(args);
// 			set?.apply(target, args);
// 		}
// 	}
// }

// const userService = new UserService();
// userService.users = 1;
// console.log(userService.users);


// //============== 10_091 Decorator of parameter ========================
// interface IUserService {
// 	getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
// 	private _users: number;

// 	getUsersInDatabase(): number {
// 		return this._users;
// 	}	

// 	setUsersInDatabase(@Positsve() num: number, @Positsve() _?: number): void {
// 		this._users = num;
// 	}	
// }

// function Positsve() {
// 	return (
// 		target: Object,
// 		propertyKey: string | symbol,
// 		parameterIndex: number		
// 	) => {
// 		console.log(target);
// 		console.log(propertyKey);
// 		console.log(parameterIndex);		
// 	}
// }

// const userService = new UserService();
// userService.setUsersInDatabase(5);
// console.log(userService.getUsersInDatabase());


// //============== 10_092 Metadata ========================
// import 'reflect-metadata';

// const POSITIVE_METADATA_KEY = Symbol('POSITIVE_METADATA_KEY');

// interface IUserService {
// 	getUsersInDatabase(): number;
// }

// class UserService implements IUserService {
// 	private _users: number;

// 	getUsersInDatabase(): number {
// 		return this._users;
// 	}	

// 	@Validate()
// 	setUsersInDatabase(@Positsve() num: number): void {
// 		this._users = num;
// 	}	
// }

// function Positsve() {
// 	return (
// 		target: Object,
// 		propertyKey: string | symbol,
// 		parameterIndex: number		
// 	) => {
// 		console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
// 		console.log(Reflect.getOwnMetadata('design:paramtypes', target, propertyKey));	
// 		console.log(Reflect.getOwnMetadata('design:returntype', target, propertyKey));
// 		let existParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey) || [];
// 		existParams.push(parameterIndex);
// 		Reflect.defineMetadata(POSITIVE_METADATA_KEY, existParams, target, propertyKey);	
// 	}
// }

// function Validate() {
// 	return (
// 		target: Object,
// 		propertyKey: string | symbol,
// 		descriptor: TypedPropertyDescriptor<(...args: any[]) => any>		
// 	) => {
// 		let method = descriptor.value;
// 		descriptor.value = function (...args: any) {
// 			let positiveParams: number[] = Reflect.getOwnMetadata(POSITIVE_METADATA_KEY, target, propertyKey);
// 			if (positiveParams) {
// 				for (let index of positiveParams) {
// 					if (args[index] < 0) {
// 						throw new Error('Число должно быть больше нуля')
// 					}
// 				}
// 			}
// 			return method?.apply(this, args);
// 		}
// 	}
// }

// const userService = new UserService();
// console.log(userService.setUsersInDatabase(10));
// console.log(userService.setUsersInDatabase(-1));


// //============== 10_093 Order of decorators ========================
// function Uni(name: string): any {
// 	console.log(`Инициализация: ${name}`);
// 	return function () {
// 		console.log(`Вызов: ${name}`);		
// 	}
// }

// @Uni('Класс1')
// @Uni('Класс2')
// class MyClass {
// 	@Uni('Метод static')
// 	static method2(@Uni('Параметры метода static') _: any) {}

// 	@Uni('Метод')
// 	method(@Uni('Параметры метода') _: any) {}

// 	constructor(@Uni('Параметры конструктора') _: any) {}

// 	@Uni('Свойство static')
// 	static props2?: any;

// 	@Uni('Свойство 3')
// 	props3?: any;

// 	@Uni('Свойство 1')
// 	props?: any;	
// }


// //============== 11_095 Namespaces and reference ========================
// /// <reference path="./module/app2.ts"/>
// console.log(A.a);


// //============== 11_096_097 Modules on backend / frontend ========================
// import { A } from './module/app2.js';
// console.log(A.a);


// //============== 11_098 098 Import and export ========================
// import type { MyType2 } from './module/app2';
// import * as all from './module/app2';
// import runing, { a, Test as CI, type MyType } from './module/app2';


// console.log(a);
// console.log(runing);
// console.log(all);
// new CI();
// const b: MyType = 'fg';
// const c: MyType2 = 7;


// //============== 11_099 Typing of External libraries ========================
// // //@ts-ignore
// import { toJson } from 'really-relaxed-json';
// const rjson = '[ one two three {foo:bar} ]'
// const json = toJson(rjson)
// console.log(json);


// //============== 12_101 Factory Method ========================
// interface IInsurance {
// 	id: number;
// 	status: string;
// 	setVehicle(vehicle: any): void;
// 	submit(): Promise<boolean>;
// }

// class TFInsurance implements IInsurance {
// 	id: number;
// 	status: string;
// 	private vehicle: any;

// 	setVehicle(vehicle: any): void {
// 		this.vehicle = vehicle;
// 	}

// 	async submit(): Promise<boolean> {
// 		const res = await fetch('tf', 
// 			{
// 				method: 'POST',
// 				body: JSON.stringify({vehicle: this.vehicle})
// 			});
// 		const data = await res.json();
// 		return data.isSuccess;
// 	}
// }

// class ABInsurance implements IInsurance {
// 	id: number;
// 	status: string;
// 	private vehicle: any;

// 	setVehicle(vehicle: any): void {
// 		this.vehicle = vehicle;
// 	}

// 	async submit(): Promise<boolean> {
// 		const res = await fetch('ab', 
// 			{
// 				method: 'POST',
// 				body: JSON.stringify({vehicle: this.vehicle})
// 			});
// 		const data = await res.json();
// 		return data.yes;
// 	}
// }

// //-------------Factory pattern полный ваниант-----------------
// abstract class InsuraceFactory {
// 	bd: any;

// 	abstract createInsurance(): IInsurance;

// 	saveHistory(ins: IInsurance) {
// 		this.bd.save(ins.id, ins.status);
// 	}
// }

// class TFInsuranceFactory extends InsuraceFactory {
// 	createInsurance(): TFInsurance {
// 		return new TFInsurance();
// 	}	
// }

// class ABInsuranceFactory extends InsuraceFactory {
// 	createInsurance(): ABInsurance {
// 		return new ABInsurance();
// 	}	
// }

// const tfInsuranceFactory = new TFInsuranceFactory();
// const ins = tfInsuranceFactory.createInsurance();
// tfInsuranceFactory.saveHistory(ins);

// //-------------Factory pattern компактный ваниант, но без возможности расширения-----------------------
// const INSURANCE_TYPE = {
// 	tf: TFInsurance,
// 	ab: ABInsurance
// }

// type IT = typeof INSURANCE_TYPE;

// class InsuranceFactoryAlt {
// 	bd: any;

// 	createInsurance<T extends keyof IT>(type: T): IT[T] {
// 		return INSURANCE_TYPE[type];
// 	}

// 	saveHistory(ins: IInsurance) {
// 		this.bd.save(ins.id, ins.status);
// 	}
// }

// const insuranceFactoryAlt = new InsuranceFactoryAlt();
// const ins2 = new (insuranceFactoryAlt.createInsurance('tf'));
// insuranceFactoryAlt.saveHistory(ins2);


// //============== 12_102 Singleton ========================
// class MyMap {
// 	private static instance: MyMap;

// 	map: Map<number, string> = new Map();

// 	private constructor() {}

// 	clean() {
// 		this.map = new Map();
// 	}

// 	public static get(): MyMap {
// 		if (!MyMap.instance) {
// 			MyMap.instance = new MyMap();
// 		}
// 		return MyMap.instance;
// 	}
// }

// class Service1 {
// 	addMap(key: number, value: string) {
// 		const myMap = MyMap.get();
// 		myMap.map.set(key, value);
// 	}
// }

// class Service2 {
// 	getKeys(key: number) {
// 		const myMap = MyMap.get();
// 		console.log(myMap.map.get(key));
// 		myMap.clean();
// 		console.log(myMap.map.get(key));
// 	}
// }

// new Service1().addMap(1, 'Working');
// new Service2().getKeys(1);


// //============== 12_103 Prototype ========================
// interface Prototype<T> {
// 	clone(): T;
// }

// class UserHistory implements Prototype<UserHistory> {
// 	createdAt: Date;

// 	constructor(public email: string, public name: string) {
// 		this.createdAt = new Date;
// 	}

// 	clone(): UserHistory {
// 		let target = new UserHistory(this.email, this.name);
// 		target.createdAt = this.createdAt
// 		return target;
// 	}
// }

// const user = new UserHistory('a@a.ru', 'Anton');
// const user2 = user;
// const cloneUser = user.clone();
// console.log(`user:`, user);
// user2.email = 'user2@v.ru';
// user2.name = 'User2';
// //Изменение user2 изменило также user, а cloneUser отдельная копия которая не влияет на исодый экзеппляр
// console.log(`user:`, user);
// console.log(`user2:`, user2);
// console.log(`cloneUser:`, cloneUser);
// cloneUser.email = 'cloneUser@v.ru';
// cloneUser.name = 'CloneUser';
// console.log(`user:`, user);
// console.log(`cloneUser:`, cloneUser);


// //============== 12_104 Prototype ========================
// enum ImageFormat {
// 	Png = 'png',
// 	Jpg = 'jpg'
// }

// interface IResolution { 
// 	width: number;
// 	height: number;
// }

// interface IImageConversion extends IResolution { 
// 	format: ImageFormat;
// }

// class ImageBuilder {
// 	private formats: ImageFormat[] = [];
// 	private resolutions: IResolution[] = [];

// 	addPng() {
// 		if (this.formats.includes(ImageFormat.Png)) {
// 			return this;
// 		}
// 		this.formats.push(ImageFormat.Png);
// 		return this;
// 	}

// 	addJpg() {
// 		if (this.formats.includes(ImageFormat.Jpg)) {
// 			return this;
// 		}
// 		this.formats.push(ImageFormat.Jpg);
// 		return this;
// 	}

// 	addResolution(width: number, height: number) {
// 		this.resolutions.push({width, height});
// 		return this;
// 	}

// 	build(): IImageConversion[] {
// 		const res: IImageConversion[] = [];
// 		for(const r of this.resolutions) {
// 			for(const f of this.formats) {
// 				res.push({
// 					format: f,
// 					width: r.width,
// 					height: r.height
// 				});
// 			}
// 		}
// 		return res;
// 	}
// }

// console.log(new ImageBuilder()
// 	.addJpg()
// 	.addPng()
// 	.addResolution(50, 100)
// 	.addResolution(100, 200)
// 	.build()
// );


// //============== 13_106 Bridge ========================
// interface IProvider {
// 	sendMessage(message: string):void;
// 	connect(config: unknown): void;
// 	disconnect(): void;
// }

// class TelegramProvider implements IProvider {
// 	sendMessage(message: string): void {
// 		console.log(message);		
// 	}
// 	connect(config: string): void {
// 		console.log(config);
// 	}
// 	disconnect(): void {
// 		console.log('Disconnect TG');		
// 	}
// }

// class WhatsUpProvider implements IProvider {
// 	sendMessage(message: string): void {
// 		console.log(message);		
// 	}
// 	connect(config: string): void {
// 		console.log(config);
// 	}
// 	disconnect(): void {
// 		console.log('Disconnect WU');		
// 	}
// }

// class NotificationSender {
// 	constructor(private provider: IProvider) {}

// 	send() {
// 		this.provider.connect('connect');
// 		this.provider.sendMessage('message');
// 		this.provider.disconnect();
// 	}
// }

// class DelayNotificationSender extends NotificationSender {
// 	constructor(provider: IProvider) {
// 		super(provider);
// 	}
// 	sendDelayd() {}
// }

// const sender = new NotificationSender(new TelegramProvider());
// sender.send();
// const sender2 = new NotificationSender(new WhatsUpProvider());
// sender2.send();


// //============== 13_107 Facade ========================
// class Notify {
// 	send(template: string, to: string) {
// 		console.log(`Отправляю ${template}: ${to}`);
		
// 	}
// }

// class Log {
// 	log(message: string) {
// 		console.log(message);		
// 	}
// }

// class Template {
// 	private templates = [
// 		{name: 'other', template: '<h1>Шаблон!</h1>'}
// ];

// 	getByName(name: string) {
// 		return this.templates.find(t => t.name === name);
// 	}
// }

// class NotificationFacad {
// 	private notify: Notify;
// 	private logger: Log;
// 	private template : Template;
// 	constructor() {
// 		this.notify = new Notify();
// 		this.logger = new Log();
// 		this.template = new Template();
// 	}

// 	send(to: string, templateName: string) {
// 		const data = this.template.getByName(templateName);
// 		if (!data) {
// 			this.logger.log('Не найден шаблон!');
// 			return;
// 		}
// 		this.notify.send(data.template, to);
// 		this.logger.log('Шаблон отправлен');
// 	}
// }

// const s = new NotificationFacad();
// s.send('as@as.ru', 'other');


// //============== 13_108 Adapter ========================
// class KVDatabase {
// 	private db: Map<string, string> = new Map();
// 	save(key:string, value: string) {
// 		this.db.set(key, value);
// 	}
// }

// class PersistentDB {
// 	savePersistent(data: Object) {
// 		console.log(data);
		
// 	}
// }

// class PersistentDBAdapter extends KVDatabase {
// 	constructor(public database: PersistentDB) {
// 		super();

// 	}
// 	override save(key: string, value: string): void {
// 		this.database.savePersistent({key, value})
// 	}
// }

// function run(base: KVDatabase) {
// 	base.save('key', 'myValue');
// }

// run(new PersistentDBAdapter(new PersistentDB));


// //============== 13_109 Proxy ========================
// interface IPaymentAPI {
// 	getPaymentDetail(id: number): IPaymentDetail | undefined;
// }

// interface IPaymentDetail {
// 	id: number;
// 	sum: number;
// }

// class PaymentAPI implements IPaymentAPI {
// 	private date = [{id: 1, sum: 10000}, {id: 2, sum: 20000}];
// 	getPaymentDetail(id: number): IPaymentDetail | undefined {
// 		return this.date.find(d => d.id === id)
// 	}
// }

// class PaymentAccessProxy implements IPaymentAPI {
// 	constructor(private api: PaymentAPI, private userId: number) {}
// 	getPaymentDetail(id: number): IPaymentDetail | undefined {
// 		if (this.userId === id) {
// 			return this.api.getPaymentDetail(id);
// 		}
// 		console.log('Попытка получить данные платежа!');
// 		return undefined;		
// 	}
// }

// const proxy = new PaymentAccessProxy(new PaymentAPI(), 1);
// console.log(proxy.getPaymentDetail(1));
// const proxy2 = new PaymentAccessProxy(new PaymentAPI(), 2);
// console.log(proxy2.getPaymentDetail(2));
// console.log(proxy2.getPaymentDetail(1));


// //============== 13_110 Composite ========================
// abstract class DeliveryItem {
// 	items: DeliveryItem[] = [];
	
// 	addItem(item: DeliveryItem) {
// 		this.items.push(item);
// 	}

// 	getItemPrices(): number {
// 		return this.items.reduce((acc: number, i: DeliveryItem) => acc += i.getPrice(), 0);
// 	}

// 	abstract getPrice(): number;
// }

// export class DeliveryShop extends DeliveryItem {
// 	constructor(private deliveryFee: number) {
// 		super()
// 	}
// 	getPrice(): number {
// 		return this.getItemPrices() + this.deliveryFee;
// 	}
// }

// export class Package extends DeliveryItem {
// 	getPrice(): number {
// 		return this.getItemPrices();
// 	}

// }

// export class Product extends DeliveryItem {
// 	constructor(private price: number) {
// 		super();
// 	}
// 	getPrice(): number {
// 		return this.price;
// 	}
// }

// const shop = new DeliveryShop(100);
// shop.addItem(new Product(1000));

// const pack1 = new Package();
// pack1.addItem(new Product(200));
// pack1.addItem(new Product(300));
// shop.addItem(pack1);

// const pack2 = new Package();
// pack2.addItem(new Product(30));
// shop.addItem(pack2);

// console.log(shop.getPrice());


// //============== 14_112 Chain of Command ========================
// interface IMiddleware {
// 	next(mid: IMiddleware): IMiddleware;
// 	handle(request: any): any;
// }

// abstract class AbstractMiddleware implements IMiddleware {
// 	private nextMiddleware: IMiddleware;
// 	next(mid: IMiddleware): IMiddleware {
// 		this.nextMiddleware = mid;
// 		return mid;
// 	}
// 	handle(request: any) {
// 		if (this.nextMiddleware) {
// 			return this.nextMiddleware.handle(request);
// 		}
// 		return;
// 	}
// }

// class AuthMiddleware extends AbstractMiddleware {
// 	override handle(request: any) {
// 		console.log('AuthMiddleware');
// 		if (request.userId === 1) {
// 			return super.handle(request);
// 		}
// 		return {error: 'Вы не авторизованы'}
// 	}
// }

// class ValidateMiddleware extends AbstractMiddleware {
// 	override handle(request: any) {
// 		console.log('ValidateMiddleWare');
// 		if (request.body) {
// 			return super.handle(request);
// 		}
// 		return {error: 'There is not body'}
// 	}
// }

// class Controller extends AbstractMiddleware {
// 	override handle(request: any) {
// 		console.log('Controller');
// 		return {Success: request}
// 	}
// }

// const controller = new Controller();
// const validate = new ValidateMiddleware();
// const auth = new AuthMiddleware();

// auth.next(validate).next(controller);

// console.log(auth.handle({
// 	userId: 1,
// 	body:  'I am Ok!' 
// }));


// //============== 14_113 Mediator ========================
// interface Mediator {
// 	notify(sender: string, event: string): void;
// }

// abstract class Madiated {
// 	mediator: Mediator;
// 	setMediator(mediator: Mediator) {
// 		this.mediator = mediator;
// 	}
// }

// class Notifications {
// 	send() {
// 		console.log('Отправляю уведомление');
// 	}
// }

// class Log {
// 	log(message: string) {
// 		console.log(message);		
// 	}
// }

// class EventHandler extends Madiated {
// 	myEvent() {
// 		this.mediator.notify('EventHandler', 'myEvent')
// 	}
// }

// class NotificationMediator implements Mediator {
// 	constructor(
// 		public notification: Notifications,
// 		public logger: Log,
// 		public handler: EventHandler
// 	) {}
// 	notify(_: string, event: string): void {
// 		switch(event) {
// 			case 'myEvent':
// 				this.notification.send();
// 				this.logger.log('Отправлено')
// 				break;
// 		}
// 	}
// }

// const handler = new EventHandler();
// const logger = new Log();
// const notification = new Notifications();

// const m = new NotificationMediator(
// 	notification,
// 	logger,
// 	handler
// );
// handler.setMediator(m);
// handler.myEvent();


//============== 14_114 Command ========================
class User {
	constructor(public userId: number) {}
}

class CommandHistory {
	public commands: Command[] = [];

	push(command: Command) {
		this.commands.push(command);
	}

	remove(command: Command) {
		this.commands = this.commands.filter(c => c.commandId !== command.commandId)
	}
}

abstract class Command {
	public commandId: number;

	abstract execute(): void;

	constructor(public history: CommandHistory) {
		this.commandId = Math.random();
	}
}

class AddUserCommand extends Command {
	constructor(
		private user: User,
		private receiver: UserService,
		history: CommandHistory
	) {
		super(history)
	}
	execute(): void {
		this.receiver.saveUser(this.user);
		this.history.push(this);
	}

	undo() {
		this.receiver.deleteUser(this.user.userId);
		this.history.remove(this);
	}
}

class UserService {
	saveUser(user: User) {
		console.log(`Сохраняю пользователя с id ${user.userId}`);		
	}

	deleteUser(userId: number) {
		console.log(`Удаляем пользователя с id ${userId}`);		
	}
}

class Controller {
	receiver: UserService;
	history: CommandHistory = new CommandHistory();

	addReceiver(receiver: UserService) {
		this.receiver = receiver;
	}

	run() {
		const addUserCommand = new AddUserCommand(
			new User(1),
			this.receiver,
			this.history
		)
		addUserCommand.execute();
		console.log(addUserCommand.history);
		addUserCommand.undo();
		console.log(addUserCommand.history);				
	}
}

const controller = new Controller();
controller.addReceiver(new UserService());
controller.run();
