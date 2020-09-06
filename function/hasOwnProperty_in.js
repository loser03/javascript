function Person(name, age) {
    this.name = name;
    this.age = age;
}

Object.prototype.hello = function() {
    console.log('Object: hello ' + this.name);
}

const bob = new Person('Bob', 18);
const result = bob.hasOwnProperty('hello');
console.log(result); //false  hasOwnProperty doesn't look for prototype chain.
console.log('hasOwnProperty' in bob); //true  in looks for prototype chain.