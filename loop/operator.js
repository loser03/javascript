let a = 0;
let b;

a = b = a + 1; // let b = ++a;
console.log(a, b); //1, 1

a = (b = a) + 1; // let b = a++;
console.log(a, b); //2, 1

function fn() {
    let a = 0;
    return a++;
}

console.log(!(fn() * 5)); //true