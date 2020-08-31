function fn() {
    const a = arguments[0]; // 1
    const b = arguments[1]; // undefined
    console.log(arguments); 
    console.log(a, b);
    return a;
}

//e.x. let d = undefined is not correct. let c = null is better when we intend to empty the variable.
let c = fn(1, undefined)
console.log(c);
