function F(a, b) {
    this.a = a;
    this.b = b;
    // return {a: 1};
    
    /* return {a: 1}; excutes the following codes.
    const result = new Object();
    result.a = 1;
    */
}

F.prototype.c = function() {}

const instance = new F(1, 2);
console.log(instance);
console.log(instance instanceof Object); //true
console.log(instance.__proto__ === F.prototype); //true

function fn(arg) {
    if(arg instanceof Array) {
        arg.push('value');
    } else {
        arg['key'] = 'value';
    }
    console.log(arg);
}

fn([]); //['value']
fn({}); //{key: 'value'}