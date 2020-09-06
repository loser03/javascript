function Person(name, age) {
  this.name = name;
  this.age = age;
  // this.hello = function() {
  //   console.log('OwnProperty: hello ' + this.name);
  // }
}

// Person.prototype.hello = function() {
//   console.log('Person: hello ' + this.name);
// }

Object.prototype.hello = function() {
  console.log('Object: hello ' + this.name);
}


const bob = new Person('Bob', 18);
bob.hello(); //Object: hello Bob

const result = bob.hasOwnProperty('gender');
console.log(result);　//false because bob instance doesn't have gender method.