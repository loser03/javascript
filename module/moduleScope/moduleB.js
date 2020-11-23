import './moduleA.js';

console.log(this); //undefined due to module scope
const a = 0;

function fn() {
    console.log(this); //undefined due to module scope
    console.log(a);
}
fn();

const obj = {
    fn
}

obj.fn() // {fn: f}

console.log(window.d);