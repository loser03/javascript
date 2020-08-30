const a = {
    prop: 0
}

const b = {
    prop: 0
}

console.log(a === b); //false because of the reference mismatch
console.log(a.prop === b.prop); //true because of the same values

const c = a;

console.log(a === c); //true because of the same reference
