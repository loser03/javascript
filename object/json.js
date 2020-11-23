const obj = {a: 0, b: 1, c: 2};

function replacer(prop, value) {
    if(value < 1) {
        return;
    } else {
        return value;
    }
}
// const json = JSON.stringify(obj, replacer);
const json = JSON.stringify(obj, ['a', 'b']);
console.log(json); // string type

const obj2 = JSON.parse(json);
console.log(obj2);