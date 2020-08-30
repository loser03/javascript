let a = 'Hello';

let b = a;

b = 'Bye';

console.log(a, b) // Hello, Bye


let c = {
    prop: 'Hello'
};

let d = c;
d.prop = 'Bye'
console.log(c, d); //prop: 'Bye', prop: 'Bye'

d = {};

console.log(c, d); //prop: 'Bye', {}