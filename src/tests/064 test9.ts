const data = [
	{ id: 2, name: 'Петя' },
	{ id: 1, name: 'Вася' },
	{ id: 3, name: 'Надя' },
];

interface ID {
	id: number;
}

function sort<T extends ID>(data: T[], type: 'asc' | 'desc' = 'asc'): T[] {
	return data.sort((a, b) => {
		switch(type) {
			case 'asc':
				return a.id - b.id;
			case 'desc':
				return b.id - a.id;
		}		
	})
}

const data2 = [
	5,
	[2, 3],
	[1, 4]	
];

// console.log(sort(data, 'desc'));
// console.log(sort(data));
// const d: number[] = data2.flatMap((data) => Array.isArray(data) ? data : [data]);
// console.log(d);
// console.log(data2.flat());



