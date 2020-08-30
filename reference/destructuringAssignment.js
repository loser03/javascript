const a = {
    prop: 0
}

let { prop } = a;
prop = 1;

console.log(a, prop); // prop: 0, 1

function fn({ prop }) {
    prop = 1;
    console.log(a, prop);
};

fn(a); // prop: 0, 1

const c = {
    prop1: {
        prop2: 0
    }
};

let { prop1 } = c;
console.log(prop1); // prop2: 0

prop1.prop2 = 1;
console.log(c, prop1); // prop1: { prop2: 0 }, prop2: 1