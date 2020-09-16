class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	hello(person) {
		console.log(`${this.name} says hello ${person.name}`);
		return this; //return to instance
	}

	introduce() {
		console.log(`Hi, I'm ${this.name}, ${this.age} years old.`);
		return this; //return to instance
	}

	shakeHands(person) {
		console.log(`${this.name} shake hands with ${person.name}.`);
		return this; //return to instance
	}

	bye(person) {
		console.log(`Goodbye, ${person.name}.`);
		return this; //return to instance
	}
}

const bob = new Person('Bob', 23);
const tim = new Person('Tim', 33);

bob.hello(tim)
  .introduce()
  .shakeHands(tim)
  .bye(tim)

