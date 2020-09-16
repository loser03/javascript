function Person1(name, age) {
	this._name = name;
	this._age = age;
}

Person1.hello = function() {
	console.log('hello');
}
Person1.hello('hello'); // = static method

Object.defineProperty(Person1.prototype, 'name', {
	get: function() {
		console.log('hello')
		return this._name;
	},
	set: function(val) {
		this._name = val;
	}
});

const p1 = new Person1('Bob', 23);

// p1.name = 'Tom';
// console.log(p1.name);

//After ES6, we can write the getter and the setter like the below codes.

class Person2 {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		console.log('hello')
		return this._name;
	}
	set name(val) {
		this._name = val;
	}

	static hello() {
		console.log('hello');
	}
}

const p2 = new Person2('Bob', 23);

Person2.hello();

