window.name = 'John';

const person = {
    name: 'Tom',
    hello: function() {
        console.log('Hello ' + this.name);
    }
}
person.hello();

const helloTom = person.hello.bind(person) // this = person

function fn(ref) {
    ref();
}

fn(helloTom);

function a(name) {
    console.log('hello ' + name);
}

const b = a.bind(null, 'Tim'); // bind creates a new function, the first argument is this, the second one is argument

b('Tom'); // Hello Tim