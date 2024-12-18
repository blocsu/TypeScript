function toString<T>(data: T): string | undefined {
	if (Array.isArray(data)) {
		return data.toString();
	}
	switch(typeof data) {
		case 'string':
			return data;
		case 'number':
		case 'symbol':
		case 'bigint':
		case 'boolean':
		case 'function':		
			return data.toString()
		case 'object':
			return JSON.stringify(data);		
		default:
			return undefined;
	}	
}

console.log(toString('s'));
console.log(toString(3));
console.log(toString(true));
console.log(toString(['s', 'a']));
console.log(toString({a: 1}));
console.log(toString(toString('f')));
